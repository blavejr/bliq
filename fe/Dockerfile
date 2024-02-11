# docker container to run an express backend server

FROM node:21-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .

ENV PORT=3001

# Expose port 3001
EXPOSE 3001

# Run the app
CMD [ "sh", "-c", "npm run dev" ]