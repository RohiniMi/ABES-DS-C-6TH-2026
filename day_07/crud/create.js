import dbConnect from "../db.js"
const insertMany = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");
        const users = [{ name: "abc1", email: "abc1@gmail.com", password: "123456", gender: "M" },
        { name: "abc2", email: "abc2@gmail.com", password: "123456", gender: "M" },
        { name: "abc2", email: "abc2@gmail.com", password: "123456", gender: "M" }
        ]
        const insertedUsers = await userCollection.insertMany(users);
        console.log("Users has been created successfully", insertedUser.insertedIds);
    } catch (error) {
        console.log("Insertion Error", error.message);
    }
}
insertMany()
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
// insertOne();