FROM node:18
# working dir

WORKDIR /usr/src/app

#  Copy package json files
COPY package*.json ./
 
 # install fils 
 RUN npm install
 
 # copy files to working dir
 COPY . .

# Expose API port

EXPOSE 5000
CMD ["node", "backend/server.js"]
