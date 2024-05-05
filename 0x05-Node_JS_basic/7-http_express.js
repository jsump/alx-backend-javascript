const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  fs.readFile(database, 'utf-8', (error, data) => {
    if (error) {
      res.status(500).send('Internal Server Error');
    } else {
      const lines = data.split('\n');
      const headers = lines[0].split(',').map((header) => header.trim());
      const studentsData = lines.slice(1);

      const fieldIndexMap = {
        CS: [],
        SWE: [],
      };

      studentsData.forEach((student) => {
        const fields = student.split(',');
        if (fields.length === headers.length) {
          const field = fields[headers.indexOf('field')].trim();
          const firstName = fields[headers.indexOf('firstname')].trim();

          if (field in fieldIndexMap) {
            fieldIndexMap[field].push(firstName);
          }
        }
      });

      let response = 'This is the list of our students\n';
      response += `Number of students: ${studentsData.length}\n`;

      Object.entries(fieldIndexMap).forEach(([field, students]) => {
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });
      res.setHeader('Content-Type', 'text/plain');
      res.send(response);
    }
  });
});


// Start the server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
