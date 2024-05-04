const fs = require('fs');

try {
    const data = fs.readFileSync("readFileSync.txt", "utf8");
    console.log("The content in file --> ", data);
}
catch (err) {
    console.error("error in showing file due to --> ", err);
}
