export const errorHandler = (err, req, res, next) => {
    res.status(500 || err.status).json({ message: err.message || "Internal error" });
};