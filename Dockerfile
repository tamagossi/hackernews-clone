#base image
FROM node

#set working directory
RUN mkdir /usr/src/app

#copy all file in current directory to docker
COPY . /usr/src/app

WORKDIR /usr/src/app

# add `./usr/src/app/node_modules/.bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

#install and cache app dependencies
RUN npm install

#start app
CMD ["npm", "install"]

#docker build -t <setyourtaghere> .
#docker run -it -p 3000:3000 <tagname>