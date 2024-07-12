const express=require("express")
const app=express();

const database=require("./config/database")

const cookieParser=require("cookie-parser");
const cors=require("cors");

require("dotenv").config();
PORT=process.env.PORT || 4000

database.connect();

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

//routes
app.use("/api/v1/auth",)

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is up and running"
    })
})

app.listen(PORT,()=>{
    console.log("App is up and running on PORT", PORT);
})