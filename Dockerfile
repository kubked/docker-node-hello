FROM mhart/alpine-node:4.7

COPY . /app
RUN cd /app && npm install
EXPOSE 3000
CMD ["npm", "start"]