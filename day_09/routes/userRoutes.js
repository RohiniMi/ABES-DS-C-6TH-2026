import express from "express";
const router = express.Router();
//router-level middleware
router.use((req, res, next) => {
    console.log("Router-Level middleware triggered");
    next();
})
router.get("/users", (req, res) => {

    // res.status(200).json({ message: "users" });
})
router.get("/users/profile", (req, res) => {
    res.status(200).json({ message: "user profile" });
})

router.get("/", (req, res) => {
    res.status(200).json({ message: "home" });
})
export default router;