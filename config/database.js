const mongoose = require("mongoose")

require("dotenv").config();

const connectDB =()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("db connected successfully bro")})
    .catch((error)=>{
        console.log("db facing  some errors bro"),
        process.exit(1);
    })
       
}

module.exports = connectDB;