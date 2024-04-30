const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error(`Cannot load the database: ${error.message}`));
      } else {
        const lines = data.split('\n');
        const headers = lines[0].split(',').map((header) => header.trim());
        const studentsData = lines.slice(1);

        console.log(`Number of students: ${studentsData.length}`);

        const fieldIndexMap = {
          CS: [],
          SWE: [],
        };

        studentsData.forEach((student) => {
          const fields = student.split(',');
          const field = fields[headers.indexOf('field')].trim();
          const firstName = fields[headers.indexOf('firstname')].trim();

          if (field in fieldIndexMap) {
            fieldIndexMap[field].push(firstName);
          }
        });

        Object.entries(fieldIndexMap).forEach(([field, students]) => {
          const uniqueStudents = [...new Set(students)];
          console.log(`Number of students in ${field}: ${uniqueStudents.length}. List: ${uniqueStudents.join(', ')}`);
        });

        resolve(fieldIndexMap);
      }
    });
  });
}

module.exports = countStudents;
