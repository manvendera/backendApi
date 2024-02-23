// import model
const Post = require('../../models/Post')
const Comment = require('../../models/Comment')

exports.commentPost = async (req, res) => {
    try {
        // fetch data
        const { post, user, body } = req.body
        // create a comment object
        const comments = new Comment({
            post, user, body
        })

        // save the new comment into the database
        const savedComment = await comments.save()
 
        //find the post by id,add the new comment to its comment arry
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })

            // populate the comments array with comment document
            .populate("comments")
            .exec()
        res.status(200).json({
            post: updatedPost,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal error are founded",
            message: "Data created Successfully"
        })
    }
}