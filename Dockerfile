# Use the official Node.js image.
FROM node:16

# Set the working directory in the container.
WORKDIR /app

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the React application.
RUN npm run build

# Expose port 3000.
EXPOSE 3000

# Start the application.
CMD ["npm", "start"]
