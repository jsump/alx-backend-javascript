const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    fs.readFile(database, 'utf-8', (error, data) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !=='');
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

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${studentsData.length}\n`);

        Object.entries(fieldIndexMap).forEach(([field, students]) => {
          res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        });

        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
