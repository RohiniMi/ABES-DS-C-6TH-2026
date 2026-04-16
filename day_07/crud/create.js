import dbConnect from "../db.js"
const deleteMany = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");
        const deleteUser = await userCollection.deleteMany(
            { email: "abc1@gmail.com" });
        console.log(deleteUser.deletedCount);
    } catch (error) {
        console.log("Updation Error", error.message);
    }
}
deleteMany()
const deleteOne = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");
        const deleteUser = await userCollection.deleteOne(
            { email: "abc2@gmail.com" });
        console.log(deleteUser.deletedCount);
    } catch (error) {
        console.log("Updation Error", error.message);
    }
}
// deleteOne()

const updateOne = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");
        const updateUser = await userCollection.updateOne(
            { email: "abc2@gmail.com" },
            { $set: { password: "123456@abcde" } });
        console.log(updateUser.modifiedCount);
    } catch (error) {
        console.log("Updation Error", error.message);
    }
}
// updateOne()
const findOne = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");
        const user = await userCollection.findOne({ email: "abc2@gmail.com" })
        console.log(user);
    } catch (error) {
        console.log("Find Error", error.message);
    }
}
// findOne();
const findUsers = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");
        const users = await userCollection.find().toArray();
        console.log(users);
    } catch (error) {
        console.log("Unable to read users", error.message);
    }
}
// findUsers()


const insertMany = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");
        const users = [{ name: "abc1", email: "abc1@gmail.com", password: "123456", gender: "M" },
        { name: "abc2", email: "abc2@gmail.com", password: "123456", gender: "M" },
        { name: "abc3", email: "abc3@gmail.com", password: "123456", gender: "M" }
        ]
        const insertedUsers = await userCollection.insertMany(users);
        console.log("Users has been created successfully", insertedUsers.insertedIds);
    } catch (error) {
        console.log("Insertion Error", error.message);
    }
}
// insertMany()
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
const updatemany = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");
        const user = await userCollection.updateMany({ email: "abc2@gmail.com" },{$set:{gender:"male"}})
        console.log(user.modifiedCount);
    } catch (error) {
        console.log("Find Error", error.message);
    }    
}
// updatemany()