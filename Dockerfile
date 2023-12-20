FROM node:16-alpine

WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем только необходимые файлы для билда
COPY . .

RUN ls -al
RUN pwd
RUN npm run build 2>&1 | tee build.log

# Устанавливаем serve
RUN npm install -g serve

# Используем порт по умолчанию для serve
EXPOSE 5000

# Запускаем serve для обслуживания статических файлов
CMD ["serve", "-s", "build"]
