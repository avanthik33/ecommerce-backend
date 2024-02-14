const express=require("express")
const bcrypt=require("bcryptjs")
const userModel=require("../models/userModel")

const router=express.Router()

//user signup
const hashFunction=async(pass)=>{
  let salt=await bcrypt.genSalt(10)
  return bcrypt.hash(pass,salt)
}
router.post("/signup",async(req,res)=>{
  let data=req.body
  let inputPassword=data.password
  hashFunction(inputPassword).then((hashedPassword)=>{
    data.password=hashedPassword
    let modelObj=new userModel(data)
    modelObj.save()
    res.json({status:"success"})
  })
})

//user signin

router.post("/signin",async(req,res)=>{
  let inputPassword=req.body.password
  let email=req.body.email
  let data=await userModel.findOne({email:email})
  if(!data){
    return(res.json({
      status:"user not found please create account"
    }))
  }
  let dbPassword=data.password
  let match=await bcrypt.compare(inputPassword,dbPassword)
  if(!match){
    return(res.json({
      status:"password is incorrect"
    }))
  }
  res.json({status:"success"})
})

//view all users
router.post("/viewall",async(req,res)=>{
  let data=await userModel.find()
  res.json({status:"success","userData":data})
})


module.exports=router