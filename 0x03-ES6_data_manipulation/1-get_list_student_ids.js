export default function getListStudentIds(myArray) {
  let newArray = [];

  if (myArray.constructor !== Array) {
    return newArray;
  }

  newArray = myArray.map((element) => element.id);

  return newArray;
}
