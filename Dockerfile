FROM node:14

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/main.js" ]
# CMD [ "ecosystem.dev.config.js", "--env", "production"]

# 1. docker build . 

# 2. image 기반 container 실행 방법 :  docker run 'image id' 

# 2.5 + localhost port connect : docker run -p 3000:3000 'image id'