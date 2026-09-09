console.clear();
console.log("Sr.no 1");
const fs = require("fs/promises");
fs.readFile("Javascript/response.txt", "utf-8")
    .then((response) => {
        console.log("Sr.no 2");
        console.log("Response received");
        console.log(response);
    })
    .catch((err) => {
        console.log("Error reading this file:", err.message);
    });

console.log("Sr.no 3");