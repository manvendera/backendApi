const mongoose = require('mongoose');
require('dotenv').config()
const API = process.env.DATABASE_URL
const dbConnect = async () => {
    try {
        mongoose.connect(API)
            .then(() => { console.log("database successfuly connected") })
            .catch((error) => {
                console.log("database can't connected successfuly");
                console.log(error);
                process.exit(1)
            })
    } catch (error) {
        console.log(error);
    }

}
module.exports = dbConnect