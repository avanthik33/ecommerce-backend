const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()

app.use(express.json())
app.use(cors())

app.connect("mongodb+srv://avanthik:avanthik@cluster0.yuxak7x.mongodb.net/ecommerceDb?retryWrites=true&w=majority",{useNewUrlParser:true})


app.listen(3001,()=>{
  console.log("server is running..")
})

