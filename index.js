const express=require("express")
const mongoose=require("mongoose")
const  app=express()

const connectDB=()=>{
    return mongoose.conect("mongodb://localhost:27017/evaluationc2data")
}

//create schema

const User=mongoose.Schema({
    

"firstName":{type:String,required:true},
"lastName":{type:String,required:true},
"age ":{type:Number,required:true},
"email" :{type:String,required:true},
"address" :{type:String,required:true},
"gender" :{type:String,required:true},
"createdAt":Number,
"updatedAt":Number
})

const BranchDetail=mongoose.Schema({
    
    "name":{type:String,required:true},
    "address":{type:String,required:true},
    "IFSC":{type:String,required:true},
    "MICR":{type:String,required:true},
    "createdAt":Number,
   "updatedAt":Number
    })

    const MasterAccount=mongoose.Schema({
    
        "balance":{type:Number,required:true},
        "createdAt":{type:Number,required:true},
        "updatedAt":{type:Number,required:true},
        })

const savingsAccount=mongoose.Schema({
"account_number":{type:Number,required:true},
"intrestRate":{type:Number,required:true},
"createdAt":{type:Number,required:true},
"updatedAt":{type:Number,required:true},
})
const FixedAccount=mongoose.Schema({
    "account_number":{type:Number,required:true},
    "balance":{type:Number,required:true},
    "intrestRate":{type:Number,required:true},
"startDate":{type:Date,required:true},
"maturityDate":{type:Date,required:true},
    "createdAt":{type:Number,required:true},
   "updatedAt":{type:Number,required:true},
})

MODEL

const user=mongoose.model("bankuser",User)
app.get("/user",async(req,res)=>{
    const userdata=await user.find().limit(100).lean().exec();
    return res.send(userdata)
})

app.listen(5050,async function(){
    try{ 
        await connectDB();
        console.log("listning at 5000")
    }
    catch(err){
        console.log("error")
    }
    // console.log("listening 5000")
    
})

