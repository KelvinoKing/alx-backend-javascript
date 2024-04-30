// Using the database database.csv (provided in project description),
// create a function countStudents in the file 3-read_file_async.js
// Create a function named countStudents. It should accept a path in
// argument (same as in 2-read_file.js)
// The script should attempt to read the database file asynchronously
// The function should return a Promise
// If the database is not available, it should throw an error with the
// text Cannot load the database
// If the database is available, it should log the following message to
// the console Number of students: NUMBER_OF_STUDENTS
// It should log the number of students in each field, and the list with
// the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// CSV file can contain empty lines (at the end) - and they are not a valid student!

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const students = lines.slice(1).filter((line) => line).map((line) => line.split(','));
        const numberOfStudents = students.length;
        console.log(`Number of students: ${numberOfStudents}`);

        const fields = {};
        students.forEach((student) => {
          const field = student[3];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]);
        });

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
