const comment = require('../../models/Comment')

exports.commentFetch = async (req, res) => {
    try {
        const response = await comment.find({})
        res.status(200).json({
            success: true,
            body: response,
            message: "Data fetched successful"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            data: "internal error are founded",
            message: "Data fetched unsuccessful"
        })
    }
}