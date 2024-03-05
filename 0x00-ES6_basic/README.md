# ES6 Basics Project

Welcome to the ES6 Basics Project! By completing this project, you'll gain a deeper understanding of ES6 features and concepts. Here's a guide to help you navigate through the project.

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without relying on external resources:

- **ES6 Introduction:**
  - What ES6 is
  - New features introduced in ES6

- **Variable Declarations:**
  - The difference between a constant (`const`) and a variable (`let`)
  - Block-scoped variables

- **Functions in ES6:**
  - Arrow functions and their parameters
  - Rest and spread function parameters

- **String Manipulation:**
  - String templating in ES6

- **Object Manipulation:**
  - Object creation and properties in ES6

- **Iterators and Loops:**
  - Iterators and `for-of` loops

## Requirements

- **Environment Setup:**
  - NodeJS 12.11.x
  - Ubuntu 18.04 LTS

- **Editors:**
  - Allowed editors: vi, vim, emacs, Visual Studio Code

- **File Structure:**
  - All files should have the `.js` extension
  - Files should end with a new line

- **Testing and Linting:**
  - Jest Testing Framework will be used for testing
  - ESLint will be used with specific rules

## Setup

1. **Install NodeJS 12.11.x:**
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. **Verify NodeJS and npm Installation:**
   ```bash
   nodejs -v
   npm -v
   ```

3. **Install Jest, Babel, and ESLint:**
   In your project directory, use the supplied `package.json`:
   ```bash
   npm install
   ```

4. **Configuration Files:**
   Add the following files to your project directory:
   - `package.json`
   - `babel.config.js`
   - `.eslintrc.js`

5. **Install Project Dependencies:**
   Run the following command in your project terminal:
   ```bash
   npm install
   ```

## Project Configuration

Before diving into the tasks, make sure your project is properly configured with the provided configuration files:

### `package.json`

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

### `babel.config.js`

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `.eslintrc.js`

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

## Project Structure

- **0x00-ES6_basic:**
  - **0-constants.js:**
    - Modify variable instantiation using `const` and `let`

  - **1-block-scoped.js:**
    - Modify variables inside a function to avoid overwriting in conditional blocks

  - **2-arrow.js:**
    - Rewrite a standard function using ES6's arrow syntax

  - **3-default-parameter.js:**
    - Condense a function's internals using default parameter values

  - **4-rest-parameter.js:**
    - Modify a function to return the number of arguments using the rest parameter syntax

  - **5-spread-operator.js:**
    - Concatenate arrays and string characters using spread syntax

  - **6-string-interpolation.js:**
    - Rewrite a function using template literals

  - **7-getBudgetObject.js:**
    - Modify object creation to use shorthand syntax for property values

  - **8-getBudgetCurrentYear.js:**
    - Rewrite a function using computed property names

  - **9-getFullBudget.js:**
    - Use ES6 method properties in an object

  - **10-loops.js:**
    - Rewrite a function using ES6's `for...of` operator

  - **11-createEmployeesObject.js:**
    - Write a function to create an object with department names and employees

  - **12-createReportObject.js:**
    - Write a function to create a report object with methods for department count

## Tasks Execution

Each task comes with a corresponding `main.js` file for execution. Use `npm run dev <filename>` to execute the tasks.

Example:
```bash
npm run dev 0-main.js
```

Feel free to explore and learn! Happy coding!
