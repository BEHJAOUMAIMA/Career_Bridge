FROM node:20.11.1 as angular
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build --prod

FROM nginx:latest
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=angular /app/dist/career-bridge /usr/share/nginx/html
