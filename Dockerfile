FROM node:20-alpine 

RUN addgroup app && adduser -S -G app app 

USER app 

WORKDIR /app 

USER root 

COPY package*.json ./ 

RUN npm install

RUN chown -R app:app .

USER app 

COPY . . 

EXPOSE 3000 

CMD npm run dev 