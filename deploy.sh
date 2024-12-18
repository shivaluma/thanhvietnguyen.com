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

echo "Deployment completed successfully!"
