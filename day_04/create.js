import { writeFile, readFile } from "./readAndWrite.js";
const FILE = "./students.json";
const student = {
    "first_name": "Germaine",
    "last_name": "Marjot",
    "email": "germainemarjot@gmail.com",
    "gender": "Female"
}
const writeData = async (student) => {
    const students = await readFile(FILE);
    let updatedData = []

    if(students.length===0) updatedData = [{id:1,...student}];
    else  updatedData = [...students, {id:students.length+1 ,...student}]

    const response = await writeFile(FILE, JSON.stringify(updatedData, null, 2));
    console.log(response.status);
}
writeData(student);