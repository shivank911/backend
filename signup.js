let express=require('express');
let app=express();

const authRouter=express.Router();
app.use(express.json());
app.use("/auth",authRouter);

authRouter
.route('/signup')
.get(getSignup)
.post(postSignup);



function getSignup(req,res){
    res.sendFile("/views/signup.html",{root:__dirname});
}
function postSignup(req,res){
    let obj=req.body;
    console.log('backend',obj);
    res.json({
        message:"user signed up",
        data:obj,
    })
}

app.listen(3000);