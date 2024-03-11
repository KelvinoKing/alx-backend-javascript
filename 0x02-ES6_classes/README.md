# 0x02. ES6 Classes

## Overview

This project focuses on understanding and implementing ES6 classes in JavaScript. The tasks involve creating and working with classes, inheritance, getters, setters, static methods, and more. The project aims to enhance your proficiency in object-oriented programming and ES6 features.

## Author

Johann Kerbrat  
Engineering Manager at Uber Works

## Project Duration

From Mar 7, 2024, 6:00 AM, to Mar 8, 2024, 6:00 AM

## Auto QA Review

An auto review will be launched at the deadline.

## Project Evaluation

- Auto QA review: 16.0/33 mandatory & 1.5/3 optional
- Overall Score: 72.72%
  - Mandatory: 48.48%
  - Optional: 50.0%
- Calculation: 48.48% + (48.48% * 50.0%) == 72.72%

## Learning Objectives

By the end of this project, you should be able to explain to anyone, without the help of Google:

- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Requirements

- All files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file, at the root of the project folder, is mandatory
- Code should use the .js extension
- Code tested using Jest and the command `npm run test`
- Code verified against lint using ESLint
- Code needs to pass all tests and lint. Verify the entire project running `npm run full-test`

## Setup

1. Install NodeJS 12.11.x
   - Run the following commands in your home directory:

     ```bash
     curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
     sudo bash nodesource_setup.sh
     sudo apt install nodejs -y
     nodejs -v
     npm -v
     ```

2. Install Jest, Babel, and ESLint
   - In your project directory, run:

     ```bash
     npm install
     ```

3. Configuration Files

   - **package.json**

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
         "@babel/preset-env": "^7.6.0",
         "@babel/node": "^7.8.0",
         "eslint": "^6.4.0",
         "eslint-config-airbnb-base": "^14.0.0",
         "eslint-plugin-import": "^2.18.2",
         "eslint-plugin-jest": "^22.17.0",
         "jest": "^24.9.0"
       }
     }
     ```

   - **babel.config.js**

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

   - **.eslintrc.js**

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
         'max-classes-per-file': 'off',
         'no-underscore-dangle': 'off',
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

   - **Don't forget to run `$ npm install` when you have the `package.json`.**

## Tasks

### 0. You used to attend a place like this at some point

- Implement a class named `ClassRoom`:

  ```javascript
  // Prototype
  export default class ClassRoom {
    constructor(maxStudentsSize) {
      this._maxStudentsSize = maxStudentsSize;
    }
  }
  ```

  Example usage:

  ```javascript
  import ClassRoom from "./0-classroom.js";

  const room = new ClassRoom(10);
  console.log(room._maxStudentsSize); // Output: 10
  ```

  - Directory: `0x02-ES6_classes`
  - File: `0-classroom.js`

### 1. Let's make some classrooms

- Import the `ClassRoom` class from `0-classroom.js`.
- Implement a function named `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

  ```javascript
  // Example usage
  import initializeRooms from './1-make_classrooms.js';

  console.log(initializeRooms());
  ```

  Output:

  ```javascript
  [
    ClassRoom { _maxStudentsSize: 19 },
    ClassRoom { _maxStudentsSize: 20 },
    ClassRoom { _maxStudentsSize: 34 }
  ]
  ```

  - Directory: `0x02-ES6_classes`
  - File: `1-make_classrooms.js`

### 2. A Course, Getters, and Setters

- Implement a class named `HolbertonCourse`:

  ```javascript
  // Example usage
  import HolbertonCourse from "./2-hbtn_course.js";

  const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
  console.log(c1.name); // Output: ES6
  c1.name = "Python 101";
  console.log(c1);
  ```

  Output:

  ```javascript
  HolbertonCourse {
    _name: 'Python 101',
    _length: 1,
    _students: [ 'Bob', 'Jane' ]
  }
  ```

  - Directory: `0x02-ES6_classes`
  - File: `2-hbtn_course.js`

### 3. Methods, static methods, computed methods names..... MONEY



- Implement a class named `Currency`:

  ```javascript
  // Example usage
  import Currency from "./3-currency.js";

  const dollar = new Currency('$', 'Dollars');
  console.log(dollar.displayFullCurrency()); // Output: Dollars ($)
  ```

  - Directory: `0x02-ES6_classes`
  - File: `3-currency.js`

### 4. Pricing

- Import the class `Currency` from `3-currency.js`.
- Implement a class named `Pricing`:

  ```javascript
  // Example usage
  import Pricing from './4-pricing.js';
  import Currency from './3-currency.js';

  const p = new Pricing(100, new Currency("EUR", "Euro"))
  console.log(p.displayFullPrice()); // Output: 100 Euro (EUR)
  ```

  - Directory: `0x02-ES6_classes`
  - File: `4-pricing.js`

### 5. A Building

- Implement a class named `Building`:

  ```javascript
  // Example usage
  import Building from './5-building.js';

  const b = new Building(100);
  console.log(b);

  class TestBuilding extends Building {}

  try {
    new TestBuilding(200)
  } catch(err) {
    console.log(err); // Output: Error: Class extending Building must override evacuationWarningMessage
  }
  ```

  - Directory: `0x02-ES6_classes`
  - File: `5-building.js`

### 6. Inheritance

- Import `Building` from `5-building.js`.
- Implement a class named `SkyHighBuilding` that extends from `Building`:

  ```javascript
  // Example usage
  import SkyHighBuilding from './6-sky_high.js';

  const building = new SkyHighBuilding(140, 60);
  console.log(building.sqft); // Output: 140
  console.log(building.floors); // Output: 60
  console.log(building.evacuationWarningMessage()); // Output: Evacuate slowly the 60 floors
  ```

  - Directory: `0x02-ES6_classes`
  - File: `6-sky_high.js`

### 7. Airport

- Implement a class named `Airport`:

  ```javascript
  // Example usage
  import Airport from "./7-airport.js";

  const airportSF = new Airport('San Francisco Airport', 'SFO');
  console.log(airportSF.toString()); // Output: Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
  ```

  - Directory: `0x02-ES6_classes`
  - File: `7-airport.js`

### 8. Primitive - Holberton Class

- Implement a class named `HolbertonClass`:

  ```javascript
  // Example usage
  import HolbertonClass from "./8-hbtn_class.js";

  const hc = new HolbertonClass(12, "Mezzanine")
  console.log(Number(hc)); // Output: 12
  console.log(String(hc)); // Output: Mezzanine
  ```

  - Directory: `0x02-ES6_classes`
  - File: `8-hbtn_class.js`

### 9. Hoisting

- Fix the code and make it work:

  ```javascript
  // Example usage
  import listOfStudents from "./9-hoisting.js";

  console.log(listOfStudents);

  const listPrinted = listOfStudents.map(
      student => student.fullStudentDescription
  );

  console.log(listPrinted)
  ```

  Output:

  ```javascript
  [
    StudentHolberton {
      _firstName: 'Guillaume',
      _lastName: 'Salva',
      _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
    },
    // ... (other students)
  ]
  [
    'Guillaume Salva - 2020 - San Francisco',
    // ... (other student descriptions)
  ]
  ```

  - Directory: `0x02-ES6_classes`
  - File: `9-hoisting.js`

### 10. Vroom

- Implement a class named `Car`:

  ```javascript
  // Example usage
  import Car from "./10-car.js";

  class TestCar extends Car {}

  const tc1 = new TestCar("Nissan", "Turbo", "Pink");
  const tc2 = tc1.cloneCar();

  console.log(tc1);
  console.log(tc1 instanceof TestCar);

  console.log(tc2);
  console.log(tc2 instanceof TestCar);

  console.log(tc1 == tc2);
  ```

  Output:

  ```javascript
  TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
  true
  TestCar { _brand: undefined, _motor: undefined, _color: undefined }
  true
  false
  ```

  - Directory: `0x02-ES6_classes`
  - File: `10-car.js`

### 11. EVCar (Advanced)

- Import `Car` from `10-car.js`.
- Implement a class named `EVCar` that extends the `Car` class:

  ```javascript
  // Example usage
  import EVCar from './100-evcar.js';

  const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
  console.log(ec1);

  const ec2 = ec1.cloneCar();
  console.log(ec2);
  ```

  Output:

  ```javascript
  EVCar {
    _brand: 'Tesla',
    _motor: 'Turbo',
    _color: 'Red',
    _range: '250'
  }
  Car { _brand: undefined, _motor: undefined, _color: undefined }
  ```

  - Directory: `0x02-ES6_classes`
  - File: `100-evcar.js`

## Copyright

© 2024 ALX, All rights reserved.
