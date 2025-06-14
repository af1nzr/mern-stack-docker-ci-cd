# Set working directory to frontend
FROM node:18-alpine as builder
WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .   # ✅ Corrected here
RUN npm run build

# Use Nginx for serving the app
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
