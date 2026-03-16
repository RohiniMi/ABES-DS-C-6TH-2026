import { readFile } from "../utils/readFile.js";
// const FILE = "../users.json";
export const userLogin = async (userDetails,FILE) => {
    const { email, password } = userDetails;

    const users = await readFile(FILE);
    if (users.length === 0) {
        // console.log("user is not registered.");
        return { status: 400, message: "user is not registered." };
    }
    const user = users.filter((u) => u.email === email);
    if (user.length === 0) {
        console.log("user is not registered.");
        return { status: 400, message: "user is not registered." };
    }
    return user[0].password === password ? { status: 200, message: "Login Successfull" } :
        { status: 500, message: "Incorrect password" };
}
// userLogin({ email: "dmilmoe0@addtoany.com", password: "tU4.g@/_nl71i#)" });
// userLogin({ email: "dmilmoe0@addtoany.com", password: "tU4.g@/_nldfklgne71i#)" });
// userLogin({ email: "dmilmoe0@addtodjhgany.com", password: "tU4.g@/_nl71i#)" });