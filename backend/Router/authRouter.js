let express=require('express');
const authRouter=express.Router();
const usermodel=require('../Model/userModel');
let jwt=require('jsonwebtoken');
let JWT_KEY=require("../secrets");
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
    if(data.usrname){
    let user=await usermodel.findOne({usrname:data.usrname});
    if(user){
        if(user.password==data.password){
            let uid=user['_id'];//uid ya payload
            let token=jwt.sign({payload:uid},JWT_KEY);
            res.cookie('Login',token);
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
    }
}
    else{
        return res.json({
            message:"invalid user"
        })
    } 
    }
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