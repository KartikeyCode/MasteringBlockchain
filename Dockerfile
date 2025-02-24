FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

# Build Stage
FROM base as builder
WORKDIR /app
COPY . . 
RUN npm ci && npm run build

# Production Stage
FROM base as production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/public ./public

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

CMD ["npm", "start"]

# Dev Stage
FROM base as dev
ENV NODE_ENV=development
WORKDIR /app
COPY . . 
RUN npm install
CMD ["npm", "run", "dev"]
