FROM node:18

WORKDIR masteringblockchain/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev