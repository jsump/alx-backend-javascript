export default function getListStudentIds(studentDetails) {
  if (!Array.isArray(studentDetails)) {
    return [];
  }
  return studentDetails.map((student) => student.id);
}
