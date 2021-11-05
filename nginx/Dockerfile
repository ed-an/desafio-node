FROM nginx:latest

RUN apt-get update && \
    apt-get install -y iputils-ping && \
    apt-get install -y wget && \
    apt-get install -y vim

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]






