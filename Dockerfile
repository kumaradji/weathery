FROM node:16-alpine

WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из текущего каталога в /app внутри контейнера
COPY . .

ENV REACT_APP_OPENWEATHER_API_KEY=ffd35bef4b2502a86a950620325c3764

# Билдим приложение в production режиме
RUN npm run build

# Используем порт по умолчанию для webpack dev server
EXPOSE 8080

# Запускаем скрипт dev, который запускает webpack dev server
CMD ["npm", "run", "dev"]