console.clear();
const fs = require("fs/promises");

async function readLocalFile() {
    try {
        console.log("begin");
        const response = await fs.readFile("Javascript/response.txt","utf-8");
        console.log("success! File content below: ");
        console.log(response);
    }
    catch (error){
        console.error("error reading the file:",error.message);
    }
    finally {
        console.log("end...");
    }
}
readLocalFile();

console.log("this was last sync code which is displayed here");