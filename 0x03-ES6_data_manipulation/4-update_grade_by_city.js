export default function updateStudentGradeByCity(studentDetails, city, newGrades) {
  return studentDetails
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObject ? gradeObject.grade  : 'N/A'
      };
    });
}
