FROM node:12-alpine as build-stage

WORKDIR /app
COPY ./ /app/
RUN yarn
RUN yarn test
RUN yarn build --prod


FROM nginx:latest

COPY --from=build-stage /app/docs/ /usr/share/nginx/html
