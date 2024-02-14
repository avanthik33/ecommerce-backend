const mongoose=require("mongoose")

const orderModel=new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,ref:"users",
    required:true
  },
  orderDate:{
    type:Date,default:Date.now,
    required:true
  },
  totalAmount:{
    type:Number,
    required:true
  },
  orderStatus:{
    type:Boolean,
    default:false,
    required:true
  },
  shippingAddress:{
    type:String,
    required:true
  }
})
module.exports=mongoose.model("orders",orderModel)