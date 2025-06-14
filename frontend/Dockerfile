# Stage 1: Build
FROM node:18-alpine as builder
WORKDIR /app

# Copy everything early
COPY . .

# Install dependencies
RUN npm install

# Build
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
