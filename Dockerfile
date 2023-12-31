FROM node:18-alpine as BASE

WORKDIR /app
COPY package.json package-lock.json ./
RUN apk add --no-cache git \
    && npm install

FROM node:16-alpine AS BUILD

WORKDIR /app
COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN apk add --no-cache git curl
RUN npm run build
RUN cd .next/standalone
RUN npm prune

FROM node:16-alpine AS PRODUCTION

WORKDIR /app

COPY --from=BUILD /app/public ./public
COPY --from=BUILD /app/next.config.js ./

COPY --from=BUILD /app/.next/standalone ./
COPY --from=BUILD /app/.next/static ./.next/static

CMD ["node", "server.js"]



