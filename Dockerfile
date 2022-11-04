FROM node:18

RUN mkdir -p /usr/app/client

WORKDIR /usr/app/client

COPY . .

RUN yarn install

CMD [ "yarn", "dev" ]