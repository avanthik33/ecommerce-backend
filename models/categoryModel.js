const mongoose=require("mongoose")

const categoryModel=new mongoose.Schema({
  categoryName:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    required:true
  }
})

module.exports=mongoose.model("categorys",categoryModel)