import { MongoClient } from "mongodb";
const MONGO_URI = "mongodb+srv://user:admin@crud.hhlnaog.mongodb.net/?appName=crud";
const DB_NAME = "users";

const client = new MongoClient(MONGO_URI);
const dbConnect = async () => {
    try {
        await client.connect();
        console.log("DB is connected successfully");
        return client.db(DB_NAME);
    } catch (error) {
        console.log("DB connection Error", error.message);
    }
}
dbConnect();

