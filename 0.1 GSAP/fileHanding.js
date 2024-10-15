const fs = require("fs");
const path = require("path");


function readFile(pathUrl) {
    const stream = fs.createReadStream(pathUrl, "utf-8");
    const writetableStream = fs.createWriteStream(path.join(__dirname, "..", "README.md"));

    stream.on("data", (chunk) => {
        writetableStream.write(chunk);
    })
    stream.on("end", (chunk) => {
        console.log("File has been read and written to README.md");
        writetableStream.end();
    })
    stream.on("error", (err) => {
        console.error("Error reading the file:", err);
    })
}

const pathData = "C:\\Users\\behan\\Downloads\\gsap_learning_path.md";
// readFile(pathData);

