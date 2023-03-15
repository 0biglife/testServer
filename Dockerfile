# base image 구축
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

# 파일 실행 시작 위치 지정 : 첫번째 dot은 Dockerfile과 동일한 위계를 뜻함
COPY . /app

RUN npm install --force


RUN npm run build

# RUN npm run start:dev

# 노출하고픈 포트 번호 작성
EXPOSE 3000

CMD [ "node", "dist/main.js" ]
# CMD [ "ecosystem.dev.config.js", "--env", "production"]
# CMD [ "ecosystem.config.js", "--env", "production", "npm run start:dev"]

# 1. 이미지 생성 ----> docker build .
#    이름 지정  -----> docker build -t <dockerName> . 

# 2. image 기반 container 실행 방법 ---->   docker run 'image id' 

# 2.5 + localhost port connect ---->   docker run -p (local port):(expose port) 'image id'