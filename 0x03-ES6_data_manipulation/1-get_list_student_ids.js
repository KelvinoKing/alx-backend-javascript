export default function getListStudentIds(myArray) {
  let newArray = [];

  if (!Array.isArray(myArray)) {
    return newArray;
  }

  newArray = myArray.map((element) => element.id);

  return newArray;
}
