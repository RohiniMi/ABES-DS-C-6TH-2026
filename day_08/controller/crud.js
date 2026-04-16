import dbConnect from "../config/db.js";
import User from "../models/User.js";
dbConnect();
export const createUser = async (req, res) => {
    try {
        console.log(req.body);

        const user = req.body;
        await User.create(user);
        console.log(createUser);
        res.status(200).json({ message: "User has been created successfully." })
    } catch (error) {
        res.status(500).json({ message: `Creation Error,${error}` })
    }
}

export const findUser = async (req, res) => {
    try {
        console.log(req.params.email);

        const user = await User.find({ email: req.params.email });
        res.status(200).json({ data: user, message: "successfull" });
    } catch (error) {
        res.status(500).json({ message: `Find Error,${error}` })
    }
}
export const changePass = async (req, res) => {
    try {
        const updatedUser = await User.updateOne({ email: req.params.email }, { $set: req.body });
        updatedUser.modifiedCount !== 0 ? res.status(200).json({ message: "User has been updated successfully" })
            : res.status(404).json({ message: "Password Updation Error" });
    } catch (error) {
        res.status(500).json({ message: `Updation Error,${error}` })
    }
}
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ email: req.params.email });
        console.log(deleteUser);
        
        deleteUser ? res.status(200).json({ message: "User has been deleted successfully" })
            : res.status(404).json({ message: "User is not existing" });
    } catch (error) {
        res.status(500).json({ message: `Deletion Error,${error}` })
    }
}