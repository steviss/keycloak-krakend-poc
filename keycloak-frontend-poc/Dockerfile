FROM node:18-alpine

RUN apk add --no-cache git
RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev

COPY package.json /tmp/package.json
COPY yarn.lock /tmp/yarn.lock

RUN cd /tmp && yarn install
RUN mkdir -p /frontend-app 
RUN cp -a /tmp/node_modules /frontend-app/

WORKDIR /frontend-app
COPY . /frontend-app

RUN yarn build
EXPOSE 3000
CMD yarn dev