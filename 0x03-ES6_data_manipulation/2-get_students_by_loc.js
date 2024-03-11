export default function getStudenByLocation(studentDetails, city) {
  return studentDetails.filter((student) => student.location === city);
}
