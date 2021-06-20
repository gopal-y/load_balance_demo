FROM node:latest
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install
CMD npm run start
EXPOSE 9999
