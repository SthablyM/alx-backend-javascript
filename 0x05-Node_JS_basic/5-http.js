const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const databaseFile = process.argv[2];

        if (!databaseFile) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Database file not provided!');
            return;
        }

        const filePath = path.resolve(databaseFile);

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Cannot load the database: ${err.message}`);
                return;
            }

            const lines = data.trim().split('\n');
            const students = {};

            lines.forEach((line, index) => {
                if (index === 0 || line.trim() === '') return; // Skip the header or empty lines
                const [name, field] = line.split(',');
                if (!students[field]) students[field] = [];
                students[field].push(name);
            });

            const allStudents = Object.values(students).flat();
            const response = [
                'This is the list of our students',
                `Number of students: ${allStudents.length}`,
            ];

            for (const [field, names] of Object.entries(students)) {
                response.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(response.join('\n'));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

module.exports = app;

const PORT = 1246;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
