const Like = require('../../models/Like')
const Post = require('../../models/Post')

exports.likeRemove = async (req, res) => {
    try {
        const { post, like } = req.body
       
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like},)

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}})
            
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
            message: "post unlike unSuccessful"
        })
    }
}