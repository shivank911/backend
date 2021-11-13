let express =require('express');
let app=express();
//ye hamara mini app hai 

app.use(express.json());


let users=[
    {
        id:"1",
        name:"kartik"
    },
    {
        id:"2",
        name:"jasbir",
    },
    {
        id:"3",
        name:"shivank",
    },
];
const userRouter=express.Router();
app.use('/user',userRouter);
userRouter
.route('/')
.get(getuser)
.post(postUser)
.delete(deleteUser)
.patch(patchUser);

userRouter.route('/:id').get(getuserById);

function getuser(req,res){
    console.log("get successful");
    res.send(users);
};
function postUser(req,res){
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data recieved successfully",
        user:req.body,
    });
}
function patchUser(req,res){
    console.log(req.body);
    let datatobeupdated=req.body;
    for(key in datatobeupdated){
        users[key]=datatobeupdated[key];
    }
    res.json({
        message:"updated successfully"
    })
}
function deleteUser(req,res){
    console.log(req.body);
    users={};
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


app.listen(3000);
