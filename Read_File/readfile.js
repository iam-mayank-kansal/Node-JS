const fs = require('fs');

fs.readFile('readfile.txt','utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    console.log('File contents:-->', data);
  });
  
  