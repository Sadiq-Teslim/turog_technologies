# Stage 1
FROM node:20-alpine as react-build
WORKDIR /app
COPY . ./

ARG FEED_URL
ARG CLIENT_ID
ARG AUTH_TOKEN_URL

ENV FEED_URL=${FEED_URL}
ENV CLIENT_ID=${CLIENT_ID}
ENV AUTH_TOKEN_URL=${AUTH_TOKEN_URL}

RUN npm ci
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine

RUN mkdir -p /usr/share/static/public

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/dist/release /usr/share/nginx/html
COPY --from=react-build /app/src/public /usr/share/static/public

RUN chown -R nginx:nginx /usr/share/static/public
RUN chmod -R 755 /usr/share/static/public

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]