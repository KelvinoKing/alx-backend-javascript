export default function cleanSet(set, startString) {
  let result = '';

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      const cleanedValue = value.slice(startString.length);
      result += `${cleanedValue}-`;
    }
  });

  // Remove the trailing '-' if there are values in the result string
  if (result.length > 0) {
    result = result.slice(0, -1);
  }

  return result;
}
