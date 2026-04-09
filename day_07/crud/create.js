import dbConnect from "../db.js"
const insertOne = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");
        const user = { name: "abc", email: "abc@gmail.com", password: "123456", gender: "M" };
        const insertedUser = await userCollection.insertOne(user);
        console.log("User has been created successfully", insertedUser.insertedId);
    } catch (error) {
        console.log("Insertion Error", error.message);
    }
}
insertOne();