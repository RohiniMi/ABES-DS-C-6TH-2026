import { readFile, writeFile } from "./readAndWrite.js";
const FILE = "./students.json";
const updatedData = async (id, data) => {
    const students = await readFile(FILE);
    if (students.length === 0) return;

    const student = students.filter((stu) => stu.id === id);
    if (student.length === 0) return;

    const updatedData = students.map((student) =>
        student.id === id ? { ...student, ...data } : student)

    const response = await writeFile(FILE, JSON.stringify(updatedData, null, 2));
    console.log(response.status);
}
updatedData(4, { first_name: "abcd", last_name: "xyz" });