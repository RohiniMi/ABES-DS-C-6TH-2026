import express from "express";
const router = express.Router();

router.get("/products", (req, res) => {
    res.status(200).json({ message: "products" });
})
router.get("/products/men", (req, res) => {
    res.status(200).json({ message: "men products" });
})
router.get("/products/women", (req, res) => {
    res.status(200).json({ message: "women products" });
});
router.get("/products/kids", (req, res) => {
    res.status(200).json({ message: "kidsproducts" });
})
export default router;