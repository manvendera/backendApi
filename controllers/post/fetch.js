const Post = require('../../models/Post')

exports.fetchPost = async (req, res) => {
    try {
      
        const fetchData = await Post.find().populate("likes").populate("comments").exec()
        res.status(200).json({
            success: true,
            body: fetchData,
            message: "fetched Data is successful"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            body: error,
            message: "fetched Data is  doesn't successful"
        })
    }

}