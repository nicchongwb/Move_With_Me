# Get NODE JS 14 image
FROM NODE:14-slim

# Create a working directory in image and CD to it; any commands after will be run in WORKDIR
WORKDIR /user/src/app

# Copy ./package.json to WORKDIR
COPY ./package.json ./

# Copy ./yarn.lock to WORKDIR
COPY ./yarn.lock ./

# npm install all packages in package.json
RUN npm install

# Copy all files in cur dir to WORKDIR in image
COPY . .

# Docker React container port
EXPOSE 3000

# Start npm environment in docker container
CMD ["npm", "start"]