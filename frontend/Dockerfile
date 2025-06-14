# frontend/Dockerfile

FROM node:18-alpine AS builder

WORKDIR /app

# Copy all required files first
COPY . .

# Install dependencies
RUN npm install

# Run build (make sure index.html is in root or set root in vite.config.js)
RUN npm run build

# Use Nginx to serve the app
FROM nginx:stable-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
