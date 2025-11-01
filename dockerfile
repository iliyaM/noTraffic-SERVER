# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Build NestJS (אם אתה צריך build, אחרת הסר)
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "dist/main.js"]
