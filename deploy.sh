#!/bin/bash

# Pull latest changes from repository
echo "Pulling latest changes..."
git pull origin main

# Build API Docker image
echo "Building API Docker image..."
docker build -t portfolio-api-image -f Dockerfile-api .

# Stop and remove existing API container if it exists
echo "Stopping existing API container..."
docker stop portfolio-api-container || true
docker rm portfolio-api-container || true

# Run API container
echo "Starting API container..."
docker run -d \
  --name portfolio-api-container \
  -p 6032:4322 \
  -p 6031:4321 \
  --restart unless-stopped \
  portfolio-api-image

echo "Deployment completed successfully!"
