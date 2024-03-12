export default function getStudentsByLocation(students, city) {
  let newArray = [];

  newArray = students.filter((student) => student.location === city);
  return newArray;
}
