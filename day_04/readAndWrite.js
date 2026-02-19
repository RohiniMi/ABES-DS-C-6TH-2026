import fs from "fs/promises";

export const readFile = async (FILE) => {
    try {
        const data = await fs.readFile(FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.log("unable to read data.");
    }
}
export const writeFile = async (FILE, data) => {
    let status = 0;
    let message = "";
    try {
        await fs.writeFile(FILE, data);
        message = "Data has been written successfully";
        status = 200;
    } catch (error) {
        message = "unable to write";
        status = 500;
    }
    return { status, message };
}