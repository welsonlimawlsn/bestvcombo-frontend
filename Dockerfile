FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/frontend-bestcombo /usr/share/nginx/html

COPY --from=build /usr/local/app/nginx_conf.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
