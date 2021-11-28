const usermodel=require('../Model/userModel');
module.exports.getUser=async function getuser(req,res){
    console.log("get successful");
    let {id}=res.parms.id;
    console.log(id);
    let user=await usermodel.find({_id:id});
    if(user){
        return res.json(user);
    }
    else{
        return res.json({
            message:"user not found",
        })
    }
};
// module.exports.postUser=function postUser(req,res){
//     //console.log(req.body);
//     users=req.body;
//     res.json({
//         message:"data recieved successfully",
//         user:req.body,
//     });
// }
module.exports.updateUser=async function updateUser(req,res){
    try{
        console.log(req.body);
    let datatobeupdated=req.body;
    let id=req.params.id;
    let user=await usermodel.findById(id);
    if(user){
        let keys=[];
        for(let key in datatobeupdated){
            keys.push(key);
        }
        for(let i=0;i<keys.length;i++){
            user[keys[i]]=datatobeupdated[keys[i]];
        }
        const updatedData=await user.save();
        res.json({
            message:"user updated successfully",
            data:user,
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

    // let datatobeupdated=req.body;
    // for(key in datatobeupdated){
    //     users[key]=datatobeupdated[key];
    // }
    // res.json({
    //     message:"updated successfully"
    // })
}
module.exports.deleteUser=async function deleteUser(req,res){
    try{
        let id=req.params.id;
    let user=await usermodel.findByIdAndDelete(id);
    res.json({
        message:"data has been deleted"
    })
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}
module.exports.getAllUser=async function getAllUser(req,res){
    try{
        let user=await usermodel.find();
    if(user){
        res.json({
            message:"users retrieved ",
            data:user,
        })
    }
    else{
        res.json({
            message:"error",
        })
    }
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}
// function setCookies(req,res){
//     //res.setHeader('Set-Cookie','isLoggedIn=true')
//     res.cookie('isLoggedIn',true,{maxAge:1000*60*60*24,secure:true,httpOnly:true});
//     res.cookie('isprime',true,{maxAge:1000*60*60*24,secure:true,httpOnly:true});
//     res.send('cookies has been set');
// }
// function getCookies(req,res){
//     let cookie=req.cookies.IL;
//     console.log(cookie);
//     res.send('cookies received');
// }
