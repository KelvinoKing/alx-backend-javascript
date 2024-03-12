export default function getListStudentIds(myArray) {
  if (myArray.constructor !== Array) {
    return [];
  }

  const newArray = myArray.map((element) => element.id);

  return newArray;
}
