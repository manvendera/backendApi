const Like = require('../../models/Like')

exports.fetchLike = async (req, res) => {
    try {
        const response = await Like.find()
        res.status(200).json({
            success: true,
            body: response,
            message: "data fetched succesfuly"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal error are found",
            message: "data fetched unsuccesfuly"
        })
    }

}