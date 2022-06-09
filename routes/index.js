require('dotenv').config();
const express=require('express');
const router=express.Router();
const jwt=require("jsonwebtoken");
const authToken=require("./auth/verifyToken")
router.post("/registration",function(req,res){
   token=jwt.sign({data:req.body.username},process.env.SECRET_KEY,{expiresIn:"30m"});
   res.send({"name":req.body.username,"token":token});
    
});
router.post("/login",authToken,function(req,res){
    if(req.body.username=="vipin" && req.body.password=="vipin"){
        res.send({message:"successfully login"});
    }
    else
    res.send({"message":"credential are not matched"});
    
});
router.get("*",function(req,res){
    res.send({"message":"Page not found"})
})
module.exports=router;
    