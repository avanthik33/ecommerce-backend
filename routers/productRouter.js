const express=require("express")
const productModel=require("../models/productModel")
const router=express.Router()


//view all products
router.post("/viewall",async(req,res)=>{
  let data=await productModel.find().populate("categoryId","categoryName desc -_id")
  res.json({status:"success","productData":data})
})

//create new product
router.post("/create",async(req,res)=>{
  let data=req.body
  let modelObj=new productModel(data)
  await modelObj.save()
  res.json({status:"success"})
})





module.exports=router