FROM node:14-alpine

MAINTAINER DmytroP

RUN mkdir /app
WORKDIR /app

COPY backend/package.json /app

RUN npm install --prouction
