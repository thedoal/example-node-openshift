FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

COPY .npmrc ./

RUN npm install

COPY . .

USER node

EXPOSE 8889

CMD [ "node", "./src/server/index.js" ]
