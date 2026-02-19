import { readFile, writeFile } from "./readAndWrite.js";
const FILE = "./students.json";
const deletedData = async (id) => {
    const students = await readFile(FILE);
    if (students.length === 0) return;

    const student = students.filter((stu) => stu.id === id);
    if (student.length === 0) return;

    const updatedData = students.filter((student) =>student.id !== id)

    const response = await writeFile(FILE, JSON.stringify(updatedData, null, 2));
    console.log(response.status);
}
deletedData(3);