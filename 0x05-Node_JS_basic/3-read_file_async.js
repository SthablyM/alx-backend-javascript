const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const header = lines.shift();

      if (!header) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.map((line) => line.split(',')).filter((fields) => fields.length === 4);
      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach(([firstname, lastname, age, field]) => {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const [field, firstnames] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
