import e from 'express';
import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('database.csv')
      .then((data) => {
        const fields = Object.keys(data).sort((a, b) =>
          a.localeCompare(b, undefined, { sensitivity: 'base' })
        );
        let message = 'This is the list of our students\n';

        fields.forEach((field) => {
          const students = data[field];
          const numStudents = students.length;
          const studentList = students.join(', ');
          message += `Number of students in ${field}: ${numStudents}. List: ${studentList}`;
        });

        response.status(200).send(message);
      })
      .catch((error) => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major && ['CS', 'SWE'].includes(major.toUpperCase())) {
      readDatabase('database.csv')
        .then((data) => {
          const students = data[major.toUpperCase()];
          const studentList = students.join(', ');
          const message = `List: ${studentList}`;
          response.status(200).send(message);
        })
        .catch((error) => {
          response.status(500).send('Cannot load the database');
        });
    } else {
      response.status(500).send('Major parameter must be a CS or SWE');
    }
  }
}

export default StudentsController;
