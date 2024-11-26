const fs = require('fs');

function countStudents(path) {
  try {
   
    const data = fs.readFileSync(path, 'utf-8');
    
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const header = lines.shift();
    if (!header) {
      throw new Error('No data available');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
