# 1단계 - Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# 2단계 - Production Nginx stage
FROM nginx:alpine

# Vite는 기본적으로 dist에 정적 파일을 만든다
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 커스텀 설정 파일이 있다면 여기에 복사
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]