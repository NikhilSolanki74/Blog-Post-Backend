const express = require("express");
const app= express();

require("dotenv").config();

const PORT = process.env.PORT || 9000
 
// const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());

const blog = require("./routes/blog");

//mount
app.use("/api/version1" , blog);

const connectDB = require("./config/database" )
connectDB();

app.listen(PORT , ()=>{
   console.log(`the server in connected to the port ${PORT}`)
})

app.get("/" , (req,res)=>{
    res.send(`<h1>koi to mil hi jaegi</h1>`)
})