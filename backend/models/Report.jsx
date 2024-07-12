const mongoose=require("mongoose")

const reportSchema=new mongoose.Schema({
    urea:{
        type:String,
        required:true,
    },
    cr:{
        type:String,
        required:true,
    },
    hba1c:{
        type:String,
        required:true,
    },
    chol:{
        type:String,
        required:true,
    },
    tg:{
        type:String,
        required:true,
    },
    hdl:{
        type:String,
        required:true,
    },
    ldl:{
        type:String,
        required:true,
    },
    vldl:{
        type:String,
        required:true,
    },
    bmi:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model("Report",reportSchema);