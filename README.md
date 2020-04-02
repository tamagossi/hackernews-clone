## HackerNews Clone

This a repo for HackerNews Clone. This repo was boostrapped with standart create-react-app

### Project Dependencies
- **axios** library to make http request
- **eslint** with basic react configuration
- **node.js** version 12.14.1
- **node-sass** library to make scss available in react
- **enzyme** library for testing
- **npm** version 6.13.4
- **redux** library for state management
    - **redux-logger** library for logging state in development
    - **redux-thunk** library for async store
- **tachyons** library for css styling


### Project Development Guide

- frequently run `npm audit fix` and/or `npm update` to ensure that vulnerabilities are taken care of, and the dependencies are upto date
- think _THRICE_ before including a package as it is usually the main factor that force a code rewrite after a year or two

#### Running Project

- You can use `npm install && npm start` to first install the dependecies required in this project and then start the project
- If you want to run it within the container, you can run the script `npm run-script run` (Container using docker)
