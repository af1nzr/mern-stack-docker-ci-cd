# Use Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy only package.json first to install dependencies
COPY package.json .

# Install dependencies
RUN npm install

# Now copy the rest of the backend code
COPY . .

# Expose port (make sure it matches your backend port)
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
