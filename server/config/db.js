const mongoose = require("mongoose");



async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(" sucessufully connected to db");
    }
    catch(err){
        console.error(err);
        console.log("DB connection failed")
    }
    

}

module.exports ={
    connectDB
}