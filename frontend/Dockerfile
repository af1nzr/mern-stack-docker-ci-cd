# ---- Build Stage ----
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    # Copy only package.json first (optional cache optimization)
    COPY package*.json ./
    
    RUN npm install
    
    # Now copy the rest of the frontend files
    COPY . .
    
    # Build the Vite app
    RUN npm run build
    
    # ---- Production Stage ----
    FROM nginx:stable-alpine
    
    # Copy build output from builder stage to nginx html folder
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # Optional: Copy custom nginx config if any
    # COPY nginx.conf /etc/nginx/nginx.conf
    
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]
    