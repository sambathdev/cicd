FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3005

CMD ["node","index.js"]
