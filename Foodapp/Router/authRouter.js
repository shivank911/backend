let express=require('express');
const authRouter=express.Router();
const usermodel=require('../Model/userModel')
authRouter
.route('/signup')
.get(getSignup)
.post(postSignup);


authRouter
.route('/login')
.post(loginUser);

async function loginUser(req,res){
    try{
    let data=req.body;
    let user=await usermodel.findOne({usrname:data.usrname});
    if(user){
        if(user.password==data.password){
            return res.json({
                message:'user has logged in',
                userDetails:data
            })
        }else{
            return res.json({
                message:"wrong creditinials"
            })
        }
    }
    else{
        return res.json({
            message:"user Not found"
        }) 
    }}
    catch(err){
        return res.json({
            message:err.message
        })
    }
}
function getSignup(req,res){
    res.sendFile("/views/signup.html",{root:__dirname});
}
async function postSignup(req,res){
    let obj=req.body;
    let user=await usermodel.create(obj);
    //console.log('backend',user);
    res.json({
        message:"user signed up",
        data:user,
    })
}

module.exports=authRouter;