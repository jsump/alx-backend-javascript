const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const database = 'database.cvs';
        fs.readFile(database, 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('internal Server error');
            } else {
                const students = data.split('\n'.filter((student) => student.trim() !==''));
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(`This is the list of our students: \n${students.join('\n')}`);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Not Found");
    }
});
app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

module.exports = app;