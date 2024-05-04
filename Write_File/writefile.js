const fs = require('fs');

// Data to be written to the file
const data = 'Hello, world!';

// File path where you want to write the data
const filePath = 'writefile.txt';

// Write the data to the file asynchronously
fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  
  console.log('Data has been written to --> ', filePath);
});
