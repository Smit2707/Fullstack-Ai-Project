const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chat"
    },
    content: {
        required: true,
        type: String
    },
    role: {
        type: String,
        enum: ["user", "ai", "model"],
        default: "user"
    }
}, {
    timestamps: true
});

const messageModel = mongoose.model("messages", messageSchema);

module.exports = messageModel;