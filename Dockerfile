FROM node:21-alpine as dependencies
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .

# Build production image from the same dependencies stage
FROM dependencies as builder
RUN npm run build
EXPOSE 3000
CMD npm run start