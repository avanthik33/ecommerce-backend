const mongoose=require("mongoose")

const productModel=new mongoose.Schema(
  {
    productName:{
      type:String,
      required:true
    },
    desc:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      required:true
    },
    quantity:{
      type:Number,
      required:true
    },
    categoryId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"categorys",
      required:true
    }
  }
)

module.exports=mongoose.model("products",productModel)