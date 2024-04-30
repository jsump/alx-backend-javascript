const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }
    const headers = lines[0].split(',').map((header) => header.trim());
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fieldIndexMap = {
      CS: [],
      SWE: [],
    };

    students.forEach((student) => {
      const fields = student.split(',');
      const field = fields[headers.indexOf('field')].trim();
      if (field in fieldIndexMap) {
        fieldIndexMap[field].push(fields[headers.indexOf('firstname')].trim());
      }
    });

    Object.entries(fieldIndexMap).forEach(([field, fieldStudents]) => {
      console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
    });
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database')
    }
    console.error(error.message);
  }
}
module.exports = countStudents;
