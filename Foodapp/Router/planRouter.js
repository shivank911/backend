const express=require('express');
const planRouter=express.Router();
const app=express();
const {protectRoute, isAuthorise}=require('../Controllers/authController')
const {createplan,getallplans,updateplan,deleteplan,top3plans,getplan}=require('../Controllers/planController');


//basic all plans 
planRouter.route("/allPlans")
.get(getallplans)
//top3 plans 
planRouter.route("/top3")
.get(top3plans);

//admin and res owner 
app.use(isAuthorise(['admin','resowner']));
planRouter.route('/crudplan')
.post(createplan)



//own plan ->logged in hona chaie 
app.use(protectRoute);
planRouter.route("/plan/:id")
.get(getplan)

planRouter.route('/crudplan/:id')
.patch(updateplan)
.delete(deleteplan);





module.exports=planRouter;
