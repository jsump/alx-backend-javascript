export default function updateStudentGradeByCity(studentDetails, city, newGrades) {
  return studentDetails.map((student) => {
    if (student.location === city) {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      if (gradeObject) {
        return { ...student, grade: gradeObject.grade };
      }
    }
    return student;
  });
}
