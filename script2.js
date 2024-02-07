const fs = require('fs');

// Read the content of file.txt asynchronously
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    // Log the content to verify it's read correctly
    console.log(data);
});
