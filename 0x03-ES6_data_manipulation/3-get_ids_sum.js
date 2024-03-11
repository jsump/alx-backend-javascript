export default function getStudentIdsSum(studentDetails) {
  return studentDetails.reduce((sum, student) => sum + student.id, 0);
}
