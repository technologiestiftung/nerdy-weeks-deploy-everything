FROM node:14-slim
ENV NODE_ENV=development
WORKDIR /usr/app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
USER node
EXPOSE 3000
ENV NODE_ENV=production
ENTRYPOINT [ "node" ]
CMD [ "dist/index.js" ]