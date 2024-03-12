# 0x03. ES6 Data Manipulation

## Introduction
This repository contains solutions to a series of JavaScript tasks focused on ES6 data manipulation. The project covers various topics, including arrays, typed arrays, set and map data structures, and more. The tasks are designed to enhance your understanding of ES6 features and improve your proficiency in data manipulation.

## Project Information

- **Author:** Johann Kerbrat, Engineering Manager at Uber Works
- **Weight:** 1
- **Project Start:** Mar 11, 2024 6:00 AM
- **Project End:** Mar 13, 2024 6:00 AM
- **Checker Released:** Mar 11, 2024 6:00 PM
- **Auto Review Deadline:** Mar 13, 2024 6:00 AM

## Learning Objectives
Upon completion of this project, you should be able to:

- Use map, filter, and reduce on arrays
- Work with typed arrays
- Understand the Set, Map, and WeakMap data structures

## Resources
Before starting the project, make sure to review the following:

- [Array](#)
- [Typed Array](#)
- [Set Data Structure](#)
- [Map Data Structure](#)
- [WeakMap](#)

## Requirements

- All files must be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code files should use the `.js` extension
- Code will be tested using Jest (`npm run test`)
- Code will be verified against lint using ESLint (`npm run full-test`)
- All functions must be exported

## Setup
1. Install NodeJS 12.11.x:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```
2. Verify NodeJS and npm installation:
   ```bash
   nodejs -v
   npm -v
   ```
3. Install Jest, Babel, and ESLint:
   In your project directory, run:
   ```bash
   npm install
   ```

4. Configuration Files:
   Add the following files to your project directory:
   - `package.json`
   - `babel.config.js`
   - `.eslintrc.js`
   
   Don't forget to run:
   ```bash
   npm install
   ```

## Task Overview

### 0. Basic List of Objects

- Create a function `getListStudents` that returns an array of objects with attributes: id (Number), firstName (String), and location (String).

### 1. More Mapping

- Create a function `getListStudentIds` that returns an array of ids from a list of objects.

### 2. Filter

- Create a function `getStudentsByLocation` that returns an array of objects located in a specific city.

### 3. Reduce

- Create a function `getStudentIdsSum` that returns the sum of all student ids.

### 4. Combine

- Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

### 5. Typed Arrays

- Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

### 6. Set Data Structure

- Create a function `setFromArray` that returns a Set from an array.

### 7. More Set Data Structure

- Create a function `hasValuesFromArray` that returns a boolean if all elements in the array exist within the set.

### 8. Clean Set

- Create a function `cleanSet` that returns a string of all set values starting with a specific string.

### 9. Map Data Structure

- Create a function `groceriesList` that returns a map of groceries with specified items and quantities.

### 10. More Map Data Structure

- Create a function `updateUniqueItems` that updates a map for all items with an initial quantity of 1.

## Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd 0x03-ES6_data_manipulation
   ```

2. Navigate to the task directory (e.g., `cd 0-get_list_students`).

3. Run the task using:
   ```bash
   npm run dev <main-file.js>
   ```

4. Test the code using:
   ```bash
   npm run test
   ```

## Conclusion

Explore and enjoy enhancing your skills in ES6 data manipulation! If you encounter any issues or have questions, feel free to reach out.

**Copyright © 2024 ALX, All rights reserved.**
