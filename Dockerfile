FROM node:9.3.0-alpine
RUN mkdir -p /app
WORKDIR /app
COPY / /app
RUN ["npm", "install"]
EXPOSE 2337/tcp

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]