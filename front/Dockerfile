FROM node:lts-alpine3.17

WORKDIR /usr/src/front

RUN npm install -g create-react-app

COPY ./package-lock.json .
COPY ./package.json .


RUN npm install
COPY . .


