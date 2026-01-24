# ============================================================================
# EVENT CORE MARKETING APP - PRODUCTION DOCKERFILE
# ============================================================================
# 
# Multi-stage Docker build for the marketing application.
# This serves the root domain: eventcoresolutions.com
#
# BUILD:
#   docker build -t eventcore-marketing .
#
# RUN:
#   docker run -p 3000:3000 eventcore-marketing
#
# ============================================================================

# ─────────────────────────────────────────────────────────────
# STAGE 1: Dependencies
# ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && (pnpm install --frozen-lockfile || pnpm install --no-frozen-lockfile); \
  elif [ -f package-lock.json ]; then \
    npm ci; \
  else \
    npm install; \
  fi

# ─────────────────────────────────────────────────────────────
# STAGE 2: Builder
# ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time API URL configuration
ARG API_BASE_URL=https://api.eventcoresolutions.com
ARG NEXT_PUBLIC_APP_ENV=production

ENV NEXT_PUBLIC_APP_ENV=$NEXT_PUBLIC_APP_ENV
ENV NEXT_TELEMETRY_DISABLED=1

# Replace API URL in config file at build time (whatever is there -> production URL)
RUN sed -i "s|API_BASE_URL = \".*\"|API_BASE_URL = \"${API_BASE_URL}\"|g" /app/config/apiConfig.ts

RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm run build; \
  else \
    npm run build; \
  fi

# ─────────────────────────────────────────────────────────────
# STAGE 3: Production Runner
# ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install wget for healthcheck
RUN apk add --no-cache wget

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Marketing app runs on port 3000
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["node", "server.js"]

