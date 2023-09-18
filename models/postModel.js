const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true
    },
    body:{
        type:string,
        required:true
    },
    like:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Like"
    }],
    comment:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Comment"
    }]


})

module.exports = mogoose.model("Post" , postSchema) 






