FROM node:12-alpine as build-stage

WORKDIR /app
COPY package*.json /app/
RUN yarn
COPY ./ /app/
RUN yarn test
RUN yarn build


FROM nginx:latest

COPY --from=build-stage /app/docs/ /usr/share/nginx/html
