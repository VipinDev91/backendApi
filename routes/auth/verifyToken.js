const jwt = require("jsonwebtoken")
authToken=function auth(req,res,next){
    token=req.headers['x-access-token'];
    jwt.verify(token,process.env.SECRET_KEY,function(err,result){
         if(err){
            res.send({"msg":"token invalid"})
         }
         else
         next();
    });
}
module.exports=authToken