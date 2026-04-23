import mongoose from "mongoose";
const loggedUsersDetailsSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    headers: {
        type: String,
        required: true
    },
    timestamps: {
        type: Date,
        default: Date.now()
    }
})
const LoggedUsersDetails = mongoose.model("loggedUsers",loggedUsersDetailsSchema);
export default LoggedUsersDetails;