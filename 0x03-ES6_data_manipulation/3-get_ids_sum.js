export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const sumIds = students.reduce(
    (sum, student) => sum + student.id,
    initialValue,
  );

  return sumIds;
}
