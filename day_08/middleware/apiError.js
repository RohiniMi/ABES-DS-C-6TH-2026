export const apiError = (req, res) => {
    res.status(404).json({ message: "API/Path Error" });
}