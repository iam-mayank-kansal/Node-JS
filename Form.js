const http = require("http");
const fs = require("fs");
// const { error } = require("console");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === `/backend` && method === `POST`) {
        let body = [];
        req.on('data', (chunk) => {
            console.log("chunks :-> ", chunk)
            body.push(chunk);
        });
        req.on('end', () => {
            body = Buffer.concat(body).toString();
            console.log("Body :-> ", body);
            console.log();
            const partician = body.split("&");
            console.log("Partician :-> ", partician);
            console.log("");
            const User_Details = {};
            partician.forEach(element => {
                const keyValuePairs = element.split("=");
                console.log("keyvalue Pair :-> ", keyValuePairs);
                let key = keyValuePairs[0];
                let value = keyValuePairs[1];
                User_Details[key] = value;
            });
            console.log("User details :-> ", User_Details);
            let prevData = {};
            try {
                prevData = JSON.parse(fs.readFileSync("database.json", "utf8"));
            }
            catch (error) {
                console.error("Error File is Empty", error)
            }
            const userCount = Object.keys(prevData).length;
            prevData[`user${userCount + 1}`] = User_Details;
            fs.writeFileSync("database.json", JSON.stringify(prevData));
            res.end("database created");
        });
    }
});

server.listen(4000);
