const mongoose=require("mongoose")

const orderItem=new mongoose.Schema({
  orderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"orders",
    required:true
  },
  productId:{
    type:mongoose.Schema.Types.ObjectId,ref:"products",
    required:true
  },
  quantity:{
    type:Number,
    required:true
  },
  pricePerUnit:{
    type:Number,
    required:true
  }
})
module.exports=mongoose.model("orderItems",orderItem)