# 0x06. Unittests in JS

## UnitTests

This project focuses on implementing unit tests in JavaScript using Mocha, Chai, and Sinon libraries. It covers various topics such as basic testing with Mocha and Node assertion library, combining descriptions, using Chai assertion library, spies, stubs, hooks, async tests with `done`, skipping tests, basic integration testing, regex integration testing, and deep equality & post integration testing.

## Back-end

This project involves back-end development using Node.js and Express.js to build and test various functionalities.

## JavaScript

The project is primarily written in JavaScript, utilizing ES6 features for modern syntax.

## ES6

ES6 features are leveraged throughout the project for writing clean and efficient JavaScript code.

## NodeJS

Node.js is the runtime environment used for executing JavaScript code server-side.

## ExpressJS

Express.js is utilized for building the web server and handling HTTP requests and responses.

## Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js, making asynchronous testing simple and fun.

## Weight: 1

The weight of this project is 1.

## Project Timeline

- Start Date: Apr 30, 2024, 6:00 AM
- End Date: May 3, 2024, 6:00 AM
- Checker Release Date: May 1, 2024, 12:00 AM
- Auto Review: Will be launched at the deadline

## Resources

Read or watch:
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://dev.to/kwabenberko/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs-4mec)

## Learning Objectives

By the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small Node server

## Requirements

- All code executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Code should use the .js extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

## Tasks

### 0. Basic test with Mocha and Node assertion library

- Install Mocha using npm
- Set up scripts in package.json to quickly run Mocha using npm test
- Use `assert`
- Create a function named `calculateNumber` in a file named `0-calcul.js`
- Write test cases in a file named `0-calcul.test.js`
- Tests should be around the “rounded” part
- Expected output should match specified examples

### 1. Combining descriptions

- Upgrade the function `calculateNumber` from the previous task
- Add a new argument named `type` at the first argument of the function. `type` can be SUM, SUBTRACT, or DIVIDE (string)
- Write test cases in a file named `1-calcul.test.js`
- Usage of `describe` will help to organize test cases
- Expected output should match specified examples

### 2. Basic test using Chai assertion library

- Copy `1-calcul.js` to a new file `2-calcul_chai.js`
- Copy `1-calcul.test.js` to a new file `2-calcul_chai.test.js`
- Rewrite the test suite using `expect` from Chai
- Test coverage should be easier to maintain and understand

### 3. Spies

- Install Sinon using npm
- Create a new file named `utils.js` with a module named `Utils`
- Create a new function named `sendPaymentRequestToApi` in `3-payment.js`
- Write test cases in `3-payment.test.js` using `sinon.spy`
- Verify that the math used in `sendPaymentRequestToApi(100, 20)` is the same as `Utils.calculateNumber('SUM', 100, 20)`

### 4. Stubs

- Create `4-payment.js` and `4-payment.test.js`
- Stub the function `Utils.calculateNumber` to always return the same number 10
- Verify that the stub is being called with specific arguments
- Add a spy to verify that `console.log` is logging the correct message

### 5. Hooks

- Copy code from `4-payment.js` into a new file `5-payment.js`
- Create `5-payment.test.js` with two tests inside the same `describe`
- Verify console output and ensure it's only called once
- Use `beforeEach` and `afterEach` hooks

### 6. Async tests with `done`

- Create `6-payment_token.js` with a function `getPaymentTokenFromAPI`
- Write test cases in `6-payment_token.test.js` using `done` callback to handle async testing

### 7. Skip

- Use `7-skip.test.js` file with a long list of tests
- Make the test suite pass without fixing or removing the failing test
- Ensure you use skipping appropriately when needed

### 8. Basic Integration testing

- Create a folder `8-api` with `package.json`, `api.js`, and `api.test.js`
- Implement API endpoints and test their functionality
- Ensure every test passes without any warning

### 9. Regex integration testing

- Reuse the previous project in `9-api`
- Add a new endpoint: GET /cart/:id with validation for :id as a number
- Write test cases to verify correct status codes for numeric and non-numeric :id

### 10. Deep equality & Post integration testing

- Reuse the previous project in `10-api`
- Add endpoints `/available_payments` and `/login`
- Write test suites for each endpoint, focusing on deep equality and correct response messages

## Repository

- GitHub repository: [alx-backend-javascript](https://github.com/KelvinoKing/alx-backend-javascript)
- Directory: `0x06-unittests_in_js`
