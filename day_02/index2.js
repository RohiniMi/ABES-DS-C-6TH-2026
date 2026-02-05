import { log } from 'console';
import fs from 'fs/promises';
const writeFile = async(path,data) => {
    try {
        await fs.writeFile(path, data);
        console.log("Data has been written successfully");       
    } catch (error) {
        console.log("unable to write");       
    }
}
const readFile = async(path)=>{
    try {
        const data =await fs.readFile(path,'utf-8');
        console.log(data);       
    } catch (error) {
        console.log("unable to read data");        
    }
}
const appendFile = async(path,data) => {
    try {
        await fs.appendFile(path, data);
        console.log("Data has been appended successfully");       
    } catch (error) {
        console.log("unable to append");       
    }
}
console.log("before write");
writeFile("./example2.txt","This data is written through async fun()");
console.log("After write");

console.log("before read");
readFile("./example2.txt");
console.log("After read");

console.log("before append");
appendFile("./example2.txt","This data is appended through async fun()")
console.log("after append");
