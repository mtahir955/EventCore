#!/bin/bash

# Build, Tag, and Push Docker Images - Marketing Layer
# This script builds images with 'dev' tag, tags them as 'latest', and pushes both

set -e  # Exit on error

echo "========================================"
echo "Building Marketing Layer Docker Image (dev tag)"
echo "========================================"

imageName="eventcoresolutions/eventcore-marketing"

# Step 1: Build image with dev tag using docker-compose
echo "Building ${imageName}:dev"
docker-compose build

echo ""
echo "========================================"
echo "Tagging dev image as latest"
echo "========================================"

# Step 2: Tag dev image as latest
echo "Tagging ${imageName}:dev -> ${imageName}:latest"
docker tag "${imageName}:dev" "${imageName}:latest"

echo ""
echo "========================================"
echo "Pushing images to Docker Hub (latest tag only)"
echo "========================================"

# Step 3: Push only latest tag (matching backend pattern)
echo "Pushing ${imageName}:latest"
docker push "${imageName}:latest"

echo ""
echo "========================================"
echo "Done! Marketing image built, tagged, and pushed."
echo "========================================"

