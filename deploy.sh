#!/bin/bash

# Pull latest changes from repository
echo "Pulling latest changes..."
git pull origin main

echo "Building the project..."
pnpm install
pnpm run build

echo "Starting the project..."
pm2 start ecosystem.config.js --env production

echo "Deployment completed successfully!"
