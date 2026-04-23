import express from "express";
import dbConnect from "./config/db.js";
import LoggedUsersDetails from "./models/loggedUser.js";
import userRoutes from "./routes/userRoutes.js"
import productsRoute from "./routes/productsRoutes.js"
const app = express();
const PORT = 8800;
dbConnect();
app.use(express.json()); //built-in middleware
//application middleware
app.use(async (req, res, next) => {
    try {
        await LoggedUsersDetails.create({
            ip: req.ip,
            url: req.url,
            method: req.method,
            headers: req.headers["user-agent"]
        })
        next();
    } catch (error) {
        console.log("Logger Error", error.message);
    }
})
app.use("/", userRoutes);
app.use("/", productsRoute);
app.use((req, res) => {
    res.status(404).json({ message: "Page NOT Found" })
})
app.listen(PORT, () =>
    console.log(`server is running at http://localhost:${PORT}`));