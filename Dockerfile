# Step 1: Node.js base image
FROM node:18-alpine

# Step 2: Working directory
WORKDIR /app

# Step 3: Project files copy karo
COPY . .

# Step 4: http-server install karo
RUN npm install -g http-server

# Step 5: Port expose karo (8000)
EXPOSE 8000

# Step 6: http-server run karo on port 8000
CMD ["http-server", ".", "-p", "8000"]
