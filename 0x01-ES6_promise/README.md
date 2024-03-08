# ES6 Promises Project

## Overview
This project focuses on mastering ES6 Promises in JavaScript. By completing the tasks, you will gain a solid understanding of Promises, asynchronous programming, and error handling. The project is designed to be completed within a specified time frame, and an auto review will be launched at the deadline.

## Learning Objectives
Upon completion of this project, you should be able to:

- Explain the concept of Promises and their significance.
- Utilize the `then`, `resolve`, and `catch` methods in Promises.
- Implement the `every` method of the Promise object.
- Understand the usage of the `throw/try` statements.
- Master the `await` operator and asynchronous functions.

## Requirements
- All code should be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files must end with a new line.
- The project must include a `README.md` file at the root of the folder.
- Code should use the `.js` extension.
- Testing will be done using Jest, and linting will be performed using ESLint.
- Functions must be exported.

## Setup
1. Install NodeJS 12.11.x in your home directory:

   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. Verify NodeJS and npm versions:

   ```bash
   nodejs -v
   npm -v
   ```

3. Install Jest, Babel, and ESLint in your project directory:

   ```bash
   npm install
   ```

## Configuration Files
Ensure the following configuration files are included in your project directory:

- `package.json`
- `babel.config.js`
- `utils.js`
- `.eslintrc.js`

## Tasks
### 0. Keep every promise you make and only make promises you can keep
Return a Promise using the prototype function `getResponseFromAPI()`.

```javascript
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
```

Repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
Directory: `0x01-ES6_promise`
File: `0-promise.js`

### 1. Don't make a promise...if you know you can't keep it
Return a promise using the prototype function `getFullResponseFromAPI(success)`.

```javascript
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
```

Repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
Directory: `0x01-ES6_promise`
File: `1-promise.js`

### 2. Catch me if you can!
Use the function prototype `handleResponseFromAPI(promise)` to append three handlers to the function.

```javascript
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
```

Repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
Directory: `0x01-ES6_promise`
File: `2-then.js`

### 3. Handle multiple successful promises
Import `uploadPhoto` and `createUser` from `utils.js` and use the prototype function `handleProfileSignup()` to collectively resolve all promises.

```javascript
import handleProfileSignup from "./3-all";

handleProfileSignup();
```

Repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
Directory: `0x01-ES6_promise`
File: `3-all.js`

### 4. Simple promise
Use the prototype function `signUpUser(firstName, lastName)` to return a resolved promise.

```javascript
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));
```

Repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
Directory: `0x01-ES6_promise`
File: `4-user-promise.js`

### 5. Reject the promises
Write and export a function named `uploadPhoto(filename)` that returns a Promise rejecting with an Error.

```javascript
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));
```

Repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
Directory: `0x01-ES6_promise`
File: `5-photo-reject.js`

### 6. Handle multiple promises
Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`. Write and export a function named `handleProfileSignup` that calls the two functions.

```javascript
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
```

Repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
Directory: `0x01-ES6_promise`
File: `6-final-user.js`

### 7. Load balancer
Write and export a function named `loadBalancer(chinaDownload, USDownload)` that returns the value returned by the promise that resolved first.

```javascript
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

// ... create promises ...

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();
```

Repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
Directory: `0x01-ES6_promise`
File: `7-load_balancer.js`

### 8. Throw error / try catch
Write a function named `divideFunction(numerator, denominator)` that throws an error if the denominator is 0.

```javascript
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));
```

Repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
Directory: `0x01-ES6_promise`
File: `8-try.js`

### 9. Throw an error
Write a function named `guardrail(mathFunction)` that creates an array named `queue`. The function should append values or error messages to the queue.

```javascript
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
```

Repository: [alx-backend-javascript](https://github.com/KelvinoKing/alx-backend-javascript)
