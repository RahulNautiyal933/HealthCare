const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        enum:["Male","Female","Others"],
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    report:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Report",
    }]
})

module.exports=mongoose.model("User",userSchema)