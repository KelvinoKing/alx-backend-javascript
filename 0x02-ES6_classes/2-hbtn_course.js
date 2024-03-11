export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateArray(students, 'students');
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateString(value, 'name');
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateNumber(value, 'length');
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._validateArray(value, 'students');
  }

  // Helper function for validating string
  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string.`);
    }
    return value;
  }

  // Helper function for validating number
  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number.`);
    }
    return value;
  }

  // Helper function for validating array
  _validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array.`);
    }
    return value;
  }
}
