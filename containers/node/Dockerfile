FROM node:10.12.0-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN ./node_modules/.bin/babel-node tools/build.js
