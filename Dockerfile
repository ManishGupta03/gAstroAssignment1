# official Node.js image
FROM node:16

# Setting the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8085

# Command to run the application
CMD ["npm", "run","start"]