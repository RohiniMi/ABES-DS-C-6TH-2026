import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://user:admin@crud.xzqfcqf.mongodb.net/mongooseCrud?appName=crud";

const dbConnect = async()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connection established successfully");
    } catch (error) {
        console.log("Connection Error",error.message); 
    }
}
// dbConnect();
export default dbConnect;