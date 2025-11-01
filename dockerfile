FROM node:20-alpine AS build

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dev dependencies so nest CLI is available
RUN npm install

# Copy source code
COPY . .

# Build the project (generates dist/main.js)
RUN npm run build

# Stage 2: production image
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy built files from build stage
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
