FROM nginx:latest

RUN apt-get update && \
    apt-get install -y iputils-ping && \
    apt-get install -y wget && \
    apt-get install -y vim

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]






