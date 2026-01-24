import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eventcoresolutions.com"),
  title: {
    default: "Event Core - At the Core of Every Great Event",
    template: "%s | Event Core",
  },
  description:
    "Event Core is a smart multi-tenant event ticketing and management platform for virtual and in-person events.",
  applicationName: "Event Core",
  generator: "Event Core Platform",

  /* ✅ Favicon & App Icons */
  icons: {
    icon: "/images/favicon.png",
  },

  /* ✅ Open Graph (Facebook, LinkedIn, WhatsApp) */
  openGraph: {
    title: "Event Core - At the Core of Every Great Event",
    description:
      "Create, manage, and scale events effortlessly with Event Core’s powerful multi-tenant platform.",
    url: "https://eventcore.com", // replace with your domain
    siteName: "Event Core",
    images: [
      {
        url: "/images/event-core-logo.png",
        width: 512,
        height: 512,
        alt: "Event Core Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* ✅ Twitter / X Card */
  twitter: {
    card: "summary_large_image",
    title: "Event Core - At the Core of Every Great Event",
    description:
      "Run smarter events with secure ticketing, analytics, and multi-tenant support.",
    images: ["/images/event-core-logo.png"],
  },

  /* SEO */
  keywords: [
    "Event Core",
    "event management platform",
    "multi-tenant events",
    "event ticketing",
    "QR ticketing",
    "event analytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}

// import type React from "react"
// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Suspense } from "react"
// import "./globals.css"

// export const metadata: Metadata = {
//   title: "Event Core - At the Core of every Great Event",
//   description: "Explore our top events and discover the most exciting and must-attend experiences around you.",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
//         <Suspense fallback={null}>
//           <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
//             {children}
//           </ThemeProvider>
//         </Suspense>
//         <Analytics />
//       </body>
//     </html>
//   )
// }
