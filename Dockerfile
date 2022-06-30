FROM node:18-alpine

WORKDIR /excalibur

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 1234

CMD ["yarn", "start"]