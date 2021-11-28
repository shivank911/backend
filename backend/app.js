let express=require('express');
let app=express();
const userModel=require('./Model/userModel')
const planmodel=require('./Model/planModel');
const authRouter=require('./Router/authRouter');
const userRouter=require('./Router/userRouter');
const planRouter=require('./Router/planRouter');
const reviewRouter=require('./Router/reviewRouter');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
app.use(cookieParser());
app.use(express.json());
app.use('/user',userRouter);
app.use('/auth',authRouter);
app.use('/plans',planRouter);
app.use('/reviews',reviewRouter);

app.listen(5000);