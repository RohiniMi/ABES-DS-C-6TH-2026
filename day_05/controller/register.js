import { readFile } from "../utils/readFile.js";
import { writeFile } from "../utils/writeFile.js";
// const FILE = "../users.json";

const register = async (users, userDetails, FILE) => {
    const updatedData = [...users, userDetails];
    const response = await writeFile(FILE, updatedData);
    return response;
}
export const userRegistration = async (userDetails, FILE) => {
    const { name, email, password, gender } = userDetails;

    if (!name || !email || !password || !gender) {
        // console.log("All field are required.");
        return { status: 400, message: "All field are required." };
    }

    const users = await readFile(FILE);
    if (users.length === 0) {
        const response = await register(users, userDetails, FILE);
        return response;
    }

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
        // console.log("user is already registered");
        return { status: 400, message: "user is already registered" };
    }
    const response = await register(users, userDetails, FILE);
    return response;
}
userRegistration({
    "email": "rohannen9@dfgnnbkjalbum.net",
    "password": "bK3*_jY/\"Ndydt",
    "gender": "Female"
});