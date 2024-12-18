#!/bin/bash

# Stop and remove existing container if it exists
echo "Stopping existing container..."
docker stop portfolio-container || true
docker rm portfolio-container || true

# Pull latest changes from repository
echo "Pulling latest changes..."
git pull origin main

# Build Docker image
echo "Building Docker image..."
docker build -t portfolio-image .

# Run the container
echo "Starting container..."
docker run -d \
  --name portfolio-container \
  -p 6029:80 \
  --restart unless-stopped \
  portfolio-image

# Build API Docker image
echo "Building API Docker image..."
docker build -t portfolio-api-image -f Dockerfile-api .

# Run API container
echo "Starting API container..."
docker run -d \
  --name portfolio-api-container \
  -p 6030:4322 \
  --restart unless-stopped \
  portfolio-api-image

echo "Deployment completed successfully!"
