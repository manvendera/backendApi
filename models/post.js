// import mongoose
const mongoose = require('mongoose')
// route handler
const postSchema = new mongoose.Schema(
    {

        title: {
            type: String,
            required: true,
            maxLength: 50
        },
        body: {
            type: String,
            required: true,
            maxLength: 250
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like"
        }],
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }],

    }
)
// export

module.exports = mongoose.model('Post', postSchema)