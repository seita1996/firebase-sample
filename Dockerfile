FROM node:16.16-alpine3.16

WORKDIR /app

RUN apk update && \
    npm install -g npm \
    npm install -g firebase-tools \
    && rm -rf /var/lib/apt/lists/*
