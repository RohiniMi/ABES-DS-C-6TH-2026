import { readFile } from "./readAndWrite.js";
const FILE = "./students.json";
const readData = async() => {
   const studentsData = await readFile(FILE);
   console.log(studentsData); 
}
readData();