import { readFile } from "../utils/readFile.js";
import { writeFile } from "../utils/writeFile.js";
const FILE = "../users.json";

const register = async (users, userDetails) => {
    const updatedData = [...users, userDetails];
    const response = await writeFile(FILE, updatedData);
    console.log(response.message);
    return;
}
const userRegistration = async (userDetails) => {
    const { name, email, password, gender } = userDetails;

    if (!name || !email || !password || !gender) {
        console.log("All field are required.");
        return;
    }

    const users = await readFile(FILE);
    if (users.length === 0) {
        register(users, userDetails);
    }

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
        console.log("user is already registered");
        return;
    }
    register(users, userDetails);
}
userRegistration({
    "email": "rohannen9@dfgnnbkjalbum.net",
    "password": "bK3*_jY/\"Ndydt",
    "gender": "Female"
});