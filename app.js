const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRouter=require("./routers/userRouter")
const productRouter=require("./routers/productRouter")
const categoryRouter=require("./routers/categoryRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://avanthik:avanthik@cluster0.yuxak7x.mongodb.net/ecommerceDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/category",categoryRouter)

app.listen(3000,()=>{
  console.log("server is running..")
})

