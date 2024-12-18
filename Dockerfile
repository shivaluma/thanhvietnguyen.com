# Build stage
FROM node:20-alpine AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy source files
COPY . .

# Run dev in a detach mode
RUN pnpm run dev &

# Build the project in static mode
RUN pnpm run build

# Serve stage
FROM nginx:alpine

# Copy built assets from builder stage to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
