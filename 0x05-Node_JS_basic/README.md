# 0x05. NodeJS Basics

## Description

This project covers fundamental concepts of NodeJS and back-end development using JavaScript. It includes exercises and tasks to build basic HTTP servers, handle file operations, work with ExpressJS, and more.

## Learning Objectives

- Execute JavaScript with NodeJS
- Utilize NodeJS modules
- Read files synchronously and asynchronously with NodeJS
- Access command line arguments and environment variables with NodeJS
- Create small HTTP servers using NodeJS and ExpressJS
- Develop advanced routes with ExpressJS
- Use ES6 with NodeJS and Babel-node
- Enhance development workflow with Nodemon

## Resources

Read or watch:

- [Node JS getting started](https://nodejs.dev/learn)
- [Process API doc](https://nodejs.org/dist/latest-v16.x/docs/api/process.html)
- [Child process](https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/hello-world.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

## Requirements

- Editors: vi, vim, emacs, Visual Studio Code
- All files interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- Files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code tested using Jest (`npm run test`) and verified against lint using ESLint (`npm run full-test`)
- Functions/classes must be exported using the format: `module.exports = functionName;`
- Run `npm install` to install dependencies from `package.json`

## Tasks

1. **Executing basic JavaScript with Node JS**
    - Create a function to display a message.
    - File: `0-console.js`

2. **Using Process stdin**
    - Create a program to receive input from the command line.
    - File: `1-stdin.js`

3. **Reading a file synchronously with Node JS**
    - Create a function to count students from a CSV file synchronously.
    - File: `2-read_file.js`

4. **Reading a file asynchronously with Node JS**
    - Create a function to count students from a CSV file asynchronously.
    - File: `3-read_file_async.js`

5. **Create a small HTTP server using Node's HTTP module**
    - Create a basic HTTP server with Node's `http` module.
    - File: `4-http.js`

6. **Create a more complex HTTP server using Node's HTTP module**
    - Enhance the HTTP server to handle different routes.
    - File: `5-http.js`

7. **Create a small HTTP server using Express**
    - Implement a basic HTTP server using Express.
    - File: `6-http_express.js`

8. **Create a more complex HTTP server using Express**
    - Extend the Express server to handle advanced routing and organization.
    - Files: `full_server/utils.js`, `full_server/controllers/AppController.js`, `full_server/controllers/StudentsController.js`, `full_server/routes/index.js`, `full_server/server.js`

## Directory Structure

```
.
├── 0x05-Node_JS_basic
│   ├── 0-console.js
│   ├── 1-stdin.js
│   ├── 2-read_file.js
│   ├── 3-read_file_async.js
│   ├── 4-http.js
│   ├── 5-http.js
│   ├── 6-http_express.js
│   ├── full_server
│   │   ├── controllers
│   │   │   ├── AppController.js
│   │   │   └── StudentsController.js
│   │   ├── routes
│   │   │   └── index.js
│   │   ├── server.js
│   │   └── utils.js
│   ├── .babelrc
│   ├── babel.config.js
│   └── .eslintrc.js
└── package.json
```

## Author

This project is authored by [Kelvin Njoroge].
