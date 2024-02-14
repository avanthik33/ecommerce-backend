const express=require("express")
const categoryModel=require("../models/categoryModel")
const router=express.Router()

//view all category
router.post("/viewall",async(req,res)=>{
  let data=await categoryModel.find()
  res.json({status:"success","categoryData":data})
})


//create new category
router.post("/create",async(req,res)=>{
  let data=req.body
  let modelobj1=new categoryModel(data)
  await modelobj1.save()
  res.json({status:"success"})
})


module.exports=router