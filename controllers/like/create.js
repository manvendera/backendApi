const Like = require('../../models/Like')
const Post = require('../../models/Post')

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body
        const like = new Like({
            post, user
        })
        const savedLike = await like.save()
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes:  savedLike._id } }, { new: true })
            .populate("likes")
            .exec()
        res.status(200).json({
            success: true,
            post:updatedPost,
            message: "Data created Successful"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal error are found",
            message: "Data created unSuccessful"
        })
    }
}