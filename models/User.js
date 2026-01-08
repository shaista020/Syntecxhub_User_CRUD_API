const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true
        },
        mail: {
            type: String,
            require: true,
            uniqe: true
        },
        age: {
            type: Number,
            require: true
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);