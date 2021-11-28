module.exports.protectRoute=function protectRoute(req,res,next){
    if(req.cookies.Login){
        console.log(req.cookies);
        let isVerified=jwt.verify(req.cookies.Login,JWT_KEY);
        if(isVerified)
        next();
        else{
            return res.json({
                message:"usern not verified",
            })
        }
    }
    else{
        return res.json({
            message:"operation not allowed",
        })
    }
}