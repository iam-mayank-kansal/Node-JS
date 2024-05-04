const fs = require(`fs`);
let data = "this file is created by write file sync and data is also entered from there"
fs.writeFileSync("writeFileSync1.txt", data);

// or 

try {
    fs.writeFileSync("writeFileSync2.txt", data);
    console.log("File created successfully");
} catch (err) {
    console.error("The file cannot be created due to an error:", err);
}

