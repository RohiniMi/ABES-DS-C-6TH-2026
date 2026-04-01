import { readFile } from "../utils/readFile.js";
import { writeFile } from "../utils/writeFile.js";

export const changePassword = async (userDetails, FILE) => {
    const { email, password } = userDetails;
    if (!email || !password)
        return { message: "All field are required" };
    const users = await readFile(FILE);
    if (users.length === 0)
        return { message: "User is not existing" };
    const existingUser =
        users.filter((user) => user.email === userDetails.email);
    console.log(existingUser);

    if (existingUser.length === 0) return { message: "User is not existing" };

    const updatedUsers = users.map(
        (user) => user.email === email ? { ...user, ...userDetails } : user);
    // console.log(updatedUsers);
    const response = await writeFile(FILE,updatedUsers);
    return response;
}
// changePassword({ email: "rohannen9@dfgnnbkjalbum.net", password: "12345" }, "../users.json");