const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error(`Cannot load the database: ${error.message}`));
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
          const field = fields[headers.indexOf('field')].trim();
          const firstName = fields[headers.indexOf('firstname')].trim();

          if (field in fieldIndexMap) {
            fieldIndexMap[field].push(firstName);
          }
        });

        resolve(fieldIndexMap);
      }
    });
  });
}

app.get('/students', (req, res) => {
  const dbpath = 'database.csv';
  countStudents(dbpath)
    .then((result) => {
      // Format the response
      let response = 'This is the list of our students\n';
      Object.entries(result).forEach(([field, students]) => {
        response += `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}\n`;
      });
      res.setHeader('Content-Type', 'text/plain');
      res.send(response);
    })
    .catch((error) => {
      res.status(500).send(`Internal Server Error: ${error.message}`);
    });
});

// Start the server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
