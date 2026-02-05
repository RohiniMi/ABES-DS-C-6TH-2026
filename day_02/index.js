import fs from 'fs';

const writeFileSync = (path, data) => {
    try {
        fs.writeFileSync(path, data);
        console.log("Data has been written successfully");
    } catch (error) {
        console.log("Unable to write");
    }
}
const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, "utf-8");
        console.log(data);
    } catch (error) {
     console.log("Unable to read data");    
    }
}
const appendFileSync = (path, data) => {
    try {
        fs.appendFileSync(path, data);
        console.log("Data has been appended successfully");
    } catch (error) {
        console.log("Unable to append");
    }
}
console.log("Before Write");
writeFileSync("example.txt",
    "This data is written through sync fun:`writeFileSync()`");
console.log("After Write");

console.log("Before Read");
readFileSync("./example.txt");
console.log("After Read");

console.log("before Append");
appendFileSync("./example.txt","this data is appended via sync fun:`appendFileSync()`")
console.log("After append");
