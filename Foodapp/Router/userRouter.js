let express =require('express');
let app=express();
const userRouter=express.Router();
let cookieParser=require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
const usermodel=require('../Model/userModel')

userRouter
.route('/')
.get(getuser)
.post(postUser)
.delete(deleteUser)
.patch(patchUser);

userRouter
.route('/getCookies')
.get(getCookies);


userRouter
.route('/setCookies')
.get(setCookies);

userRouter.route('/:id').get(getuserById);


function getuser(req,res){
    //console.log("get successful");
    //res.send(users);
};
function postUser(req,res){
    //console.log(req.body);
    users=req.body;
    res.json({
        message:"data recieved successfully",
        user:req.body,
    });
}
async function patchUser(req,res){
    console.log(req.body);
    let user=await usermodel.findOneAndUpdate({usrname:"shivank"})
    // let datatobeupdated=req.body;
    // for(key in datatobeupdated){
    //     users[key]=datatobeupdated[key];
    // }
    res.json({
        message:"updated successfully"
    })
}
async function deleteUser(req,res){
    let datatobedeleted=req.body;
    let user=await usermodel.findOneAndDelete(datatobedeleted);
    res.json({
        message:"data has been deleted"
    })
}
function getuserById(req,res){
    console.log(req.params.id);
    let paramsid=req.params.id;
    let obj={}
    for(let i=0;i<users.length;i++){
        if(users[i]['id']==paramsid){
            obj=users[i];
        }
    }
    res.json({
        message:"user id received",
        data:obj,
    })
}
function setCookies(req,res){
    //res.setHeader('Set-Cookie','isLoggedIn=true')
    res.cookie('isLoggedIn',true,{maxAge:1000*60*60*24,secure:true,httpOnly:true});
    res.cookie('isprime',true,{maxAge:1000*60*60*24,secure:true,httpOnly:true});
    res.send('cookies has been set');
}
function getCookies(req,res){
    let cookie=req.cookies.IL;
    console.log(cookie);
    res.send('cookies received');
}
module.exports=userRouter