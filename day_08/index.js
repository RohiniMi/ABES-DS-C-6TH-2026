import express from "express";
import { changePass, createUser, findUser,deleteUser } from "./controller/crud.js";
import { apiError } from "./middleware/apiError.js";

const app = express();
const PORT = 8800;
app.use(express.json());

app.post("/register", createUser);
app.get("/users/:email",findUser)
app.put("/users/:email",changePass)
app.delete("/users/:email",deleteUser);

app.use(apiError)

app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))