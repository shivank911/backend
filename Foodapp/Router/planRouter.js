const express=require('express');
const planRouter=express.Router();
const {protectRoute, isAuthorise}=require('../Controllers/authController')
const {createplan,getallplans,updateplan,deleteplan,top3plans}=require('../Controllers/planController');



//admin and res owner 
planRouter.use(isAuthorise(['admin','restrauntOwner']));
planRouter.route('/crudplan')
.post(createplan)

planRouter.route('/crudplan/:id')
.patch(updateplan)
.delete(deleteplan);

//own plan ->logged in hona chaie 
planRouter.use(protectRoute);
planRouter.route("/plan/:id")
.get(getplan)


//basic all plans 
planRouter.route("/allPlans")
.get(getallplans)

//top3 plans 
planRouter.route("/top3")
.get(top3plans);
