# TypeScript Project README

## Project Information

**Title:** 0x04. TypeScript

**Authors:**
- Johann Kerbrat, Engineering Manager at Uber Works

**Weight:** 1

**Start Date:** Mar 13, 2024 6:00 AM

**End Date:** Mar 14, 2024 6:00 AM

**Manual QA Review:** Required (Please request it when the project is completed)

## Learning Objectives

After completing this project, you should be able to explain the following topics without relying on external resources:

1. Basic types in TypeScript
2. Interfaces, Classes, and functions
3. Working with the DOM and TypeScript
4. Generic types
5. Using namespaces
6. Merging declarations
7. Using an ambient namespace to import an external library
8. Basic nominal typing with TypeScript

## Requirements

### Editors
- Allowed editors: vi, vim, emacs, Visual Studio Code
- Ensure all your files end with a new line

### Environment
- All files will be transpiled on Ubuntu 18.04
- TypeScript scripts will be checked with Jest (version 24.9.*)

### Project Structure
- GitHub repository: [alx-backend-javascript](https://github.com/your-username/alx-backend-javascript)
- Directory: 0x04-TypeScript

### File Locations
- **Task 0:**
  - File: `task_0/js/main.ts`
  - Configuration Files: `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`

- **Task 1:**
  - File: `task_1/js/main.ts`
  - Configuration Files: `task_1/package.json`, `task_1/tsconfig.json`, `task_1/webpack.config.js`

- **Task 2:**
  - File: `task_2/js/main.ts`
  - Configuration Files: `task_2/package.json`, `task_2/tsconfig.json`, `task_2/webpack.config.js`

- **Task 3:**
  - Files: `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`
  - Configuration Files: `task_3/package.json`, `task_3/tsconfig.json`, `task_3/webpack.config.js`

- **Task 4:**
  - Files: `task_4/package.json`, `task_4/tsconfig.json`, `task_4/js/subjects/Cpp.ts`, `task_4/js/subjects/Java.ts`, `task_4/js/subjects/React.ts`, `task_4/js/subjects/Subject.ts`, `task_4/js/subjects/Teacher.ts`

- **Task 5:**
  - File: `task_5/js/main.ts`
  - Configuration Files: `task_5/package.json`, `task_5/tsconfig.json`, `task_5/webpack.config.js`

## Tasks

### Task 0: Creating an interface for a student

- Create an interface named `Student` with the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`.
- Create two students and an array named `studentsList` containing the two variables.
- Use Vanilla JavaScript to render a table, appending a new row for each element in the array. Each row should contain the first name of the student and the location.

### Task 1: Let's build a Teacher interface

- Create a directory `task_1` and copy configuration files into it.
- Create a `Teacher` interface with attributes `firstName(string)`, `lastName(string)`, `fullTimeEmployee(boolean)`, `yearsOfExperience(number)`, and `location(string)`.
- Allow adding any attribute to the object without specifying the name.

### Task 2: Extending the Teacher class

- Write an interface named `Directors` that extends `Teacher` and requires an attribute named `numberOfReports(number)`.

### Task 3: Printing teachers

- Write a function `printTeacher` that accepts `firstName` and `lastName` and returns the first letter of the firstName and the full lastName.

### Task 4: Writing a class

- Write a class named `StudentClass` with a constructor accepting `firstName` and `lastName` arguments.
- Implement methods `workOnHomework` and `displayName`. Describe the constructor and class through an interface.

### Task 5: Advanced types Part 1

- Create `DirectorInterface` and `TeacherInterface` with expected methods.
- Implement classes `Director` and `Teacher` for the respective interfaces.
- Create a function `createEmployee` that can return either a `Director` or a `Teacher` instance based on the salary argument.

### Task 6: Creating functions specific to employees

- Write a function `isDirector` that accepts an employee and checks if it is a director.
- Write a function `executeWork` that accepts an employee and calls the appropriate task based on whether the employee is a Director or a Teacher.

### Task 7: String literal types

- Write a String literal type named `Subjects` allowing a variable to have the value Math or History only.
- Write a function named `teachClass` that returns a string based on the input todayClass.

### Task 8: Ambient Namespaces

- Create a directory called `task_3` and copy configuration files into it.
- Build an interface and a type in `interface.ts`.
- Write an ambient file within `task_3/js` named `crud.d.ts` containing type declarations for each crud function. Use types from `interface.ts`.

### Task 9: Namespace & Declaration merging

- Create a new directory `task_4` and copy configuration files into it.
- Write a Teacher interface in a namespace named `Subjects`.
- Write Subject, Cpp, React, and Java classes in the same namespace.
- Implement methods and attributes as specified in the tasks.

### Task 10: Update task_4/js/main.ts

- Export constants `cpp`, `java`, and `react` for corresponding Subjects.
- Create a Teacher object `cTeacher` with `experienceTeachingC = 10`.
- Log information for Cpp, Java, and React subjects using `cTeacher`.

### Task 11: Brand convention & Nominal typing

- Create a directory `task_5` and copy configuration files into it.
- Create interfaces `MajorCredits` and `MinorCredits` with a brand property.
- Write functions `sumMajorCredits` and `sumMinorCredits` that return respective values.

## Configuration Files

### package.json

```json
// Content of package.json
{
  "name": "alx-backend-javascript",
  "version": "1.0.0",
  "description": "TypeScript Project",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack

-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

### tsconfig.json

```json
// Content of tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react",
    "types": ["jest"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### webpack.config.js

```js
// Content of webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'TypeScript Project',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: './dist',
  },
};
```

## Running the Project

1. Install dependencies: `npm install`
2. Run the project: `npm run build`
