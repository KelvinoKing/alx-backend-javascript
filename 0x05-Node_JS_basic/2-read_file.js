// Using the database database.csv (provided in project description),
// create a function countStudents in the file 2-read_file.js
// Create a function named countStudents. It should accept a path in argument
// The script should attempt to read the database file synchronously
// If the database is not available, it should throw an error with the
// text Cannot load the database
// If the database is available, it should log the following message
// to the console Number of students: NUMBER_OF_STUDENTS
// It should log the number of students in each field, and the list with
// the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// CSV file can contain empty lines (at the end) - and they are not a valid student!

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    // Remove first line (header)
    lines.shift();
    const fields = new Map();
    for (const line of lines) {
      const student = line.split(',');
      const field = student[3];
      if (!fields.has(field)) {
        fields.set(field, []);
      }
      fields.get(field).push(student[0]);
    }
    console.log(`Number of students: ${lines.length}`);
    for (const [field, students] of fields) {
      const list = students.join(', ');
      console.log(`Number of students in ${field}: ${students.length}. List: ${list}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
