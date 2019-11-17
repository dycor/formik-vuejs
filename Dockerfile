FROM node:10-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn global add add @vue/cli
RUN yarn install

EXPOSE 8000
EXPOSE 8080
