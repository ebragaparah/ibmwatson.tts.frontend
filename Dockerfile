FROM node:13.12.0-alpine

WORKDIR /opt/site

ENV PATH /opt/site/node_modules/.bin:$PATH

COPY ./package.json /opt/site
COPY ./package-lock.json /opt/site

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY ./src /opt/site/src
COPY ./public /opt/site/public

CMD ["npm", "start"]