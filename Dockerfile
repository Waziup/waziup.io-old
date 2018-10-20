FROM nginx:alpine
COPY public /var/www/
ADD nginx.conf /etc/nginx/conf.d/default.conf
