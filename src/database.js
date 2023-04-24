const mongoose = require('mongoose')

const {DBUSER,DBPASSWORD,DBNAME} = process.env

const MONGODB_URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.6e8zntc.mongodb.net/${DBNAME}`

connection = async()=>{
    try {
        const response = await mongoose.connect(MONGODB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("Database is connected")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection