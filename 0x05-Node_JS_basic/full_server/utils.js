import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.split('\n');
        const headers = lines[0].split(',').map((header) => header.trim());
        const studentsData = lines.slice(1);

        const fieldIndexMap = {};

        studentsData.forEach((student) => {
          const fields = student.split(',');
          const field = fields[headers.indexOf('field')].trim();
          const firstName = fields[headers.indexOf('firstname')].trim();

          if (!(field in fieldIndexMap)) {
            fieldIndexMap[field] = [];
          }

          fieldIndexMap[field].push(firstName);
        });

        resolve(fieldIndexMap);
      }
    });
  });
}
