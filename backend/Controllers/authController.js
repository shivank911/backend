let express=require('express');
const usermodel=require('../Model/userModel');
let jwt=require('jsonwebtoken');
const { functionsIn } = require('lodash');
const { findOne } = require('../Model/userModel');
const { use } = require('../Router/userRouter');
let JWT_KEY=require("../secrets");


module.exports.signup=async function signup(req,res){
   try{
    let dataobj=req.body;
    let user=await usermodel.create(dataobj);
    if(user){
        res.json({
            message:"user signed up",
            data:user,
        })
    }
    else{
        res.json({
            message:"error while signup",
        })
    }
}
   catch(err){
       res.json({
           message:err.message,
       })
   }
}
//login user
module.exports.login=async function login(req,res){
    try{
        let data=req.body;
        if(data.email){
            let user=await usermodel.findOne({email:data.email});
            if(user){
                if(user.password==data.password){
                    let uid=user['_id'];
                    let token=jwt.sign({payload:uid},JWT_KEY);
                    res.cookie('Login',token);
                    return res.json({
                        message:'user has logged in successfully',
                        userDetails:data,
                    })
                }
                else{
                    res.json({
                        message:"wrong credentials",
                    })
                }
            }
            else{
                res.json({
                    message:"email not found",
                })
            }
        }
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}

//isauthorise to check the authority of user

module.exports.isAuthorise=function isAuthorise(roles){
    return function(req,res,next){
        if(roles.includes(req.role)==true){
            next();
        }
        else{
            res.status(401).json({
                message:"user not allowed",
            })
        }
    }
}


//protect route 
module.exports.protectRoute=async function protectRoute(req,res,next){
   try{
    let token;
    if(req.Cookies.Login){
        console.log(req.Cookies.Login);
        token=req.cookies.Login;
        let payload=jwt.verify(token,JWT_KEY);
        if(payload){
            let user=await usermodel.findById(payload.payload);
            req.role=user.role;
            req.id=user.id;
            next();
        }
        else{
            res.json({
                message:"user not verified",
            })
        }
    }
    else{
        if(req.get("User-Agent").includes("Mozilla")==true){
            return req.redirect("/login");
        }
        //postman
        res.json({
            message:"please login",
        })
    }
   }
   catch(err){
       res.json(
           {
               message:err.message,
           }
       )
   }
}


module.exports.forgetpassword=async function forgetpassword(req,res){
    let {email}=req.body;
    try{
        const user=await usermodel.findOne({email:email});
        if(user){
            const resetToken=user.createResetToken();
            let reserTokenLink=`${req.protocol}://${req.get('host')}//resetpassword/${resetToken}`;
        //send email to user using nodemailer
        }
        else{
            res.json({
                message:"please register first",
            })
        }
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}
//reset password
module.exports.resetpassword=async function resetpassword(req,res){
   try{
    let token=req.params.token;
    let {password,confirnPassword}=req.body;
    const user=await usermodel.findOne({resetToken:token});
    if(user){
        user.resetPassword(password,confirmPassword);
        await user.save();
        res.json({
            message:"password change successful,please login again",
        })
    }
    else{
        res.json({
            message:"user not found",
        })
    }
   }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}


//logout
module.exports.logout=function logout(req,res){
    res.cookie('Login',' ',{maxAge:1});
    res.json({
        message:"user loged out successfully",
    })
}