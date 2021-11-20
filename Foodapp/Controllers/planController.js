const planmodel=require('../Model/planModel');

module.exports.createplan=async function createPlan(req,res){
    try{
        let data=req.body;
        let createdPlan=await planmodel.create(data);
        if(createdPlan){
            return res.json({
                message:"plan created successfully",
                data:createdPlan,
            })
        }
    }
    catch(err){
        return res.json({
            message:err.message,
        });
    }
}

module.exports.getallplans=async function getallplans(req,res){
    try{
        let allplans=await planmodel.find();
        if(allplans){
        return res.json({
            message:"plans retrived successfully",
            data:allplans,
        })
    }
    else{
        return res.json({
            message:"plans not found",
        })
    }
    }
    catch(err){
        res.status(500).json({
            message:err.message,
        })
    }
}

module.exports.updateplan=async function updateplan(req,res){
    try{
        let id=req.params.id;
        let datatobeupdated=req.body;
        let plan=await planmodel.findById(id);
        let keys=[];
        for(let key in datatobeupdated){
            keys.push(key);
        }
        if(plan){
            for(let i=0;i<keys.length;i++){
                plan[keys[i]]=datatobeupdated[keys[i]];
            }
            console.log(plan);
            await plan.save();
            return res.json({
                message:"plan updated successfully",
                data:plan,
            })
        }
        else{
            return res.json({
                message:"plan not found",
            })
        }
    }
    catch(err){
        res.json({
            message:err.message,
        });
    }
}

module.exports.deleteplan=async function deleteplan(req,res){
    try{
        let id=req.params.id;
        let plan=await planmodel.findByIdAndDelete(id);
        if(plan){
            return res.json({
                message:"plan deleted successfully",
                data:plan,
            })
        }
        else{
            return res.json({
                message:"plan not found",
            })
        }

    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}

module.exports.top3plans=async function top3plans(req,res){
    try{
        let plans=await planmodel.find().sort({
            ratingsAverage:-1,
        }).limit(3);
        return res.json({
            message:"top 3 plans",
            data:plans,
        })
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}

module.exports.getplan=async function getplan(req,res){
    try{
        let id=req.params.id;
        let plan=await planmodel.findById(id);
        if(plans){
            return res.json({
                message:"plan get successfull",
                data:plan,
            })
        }
        else{
            return res.json({
                message:"plan not found",
            })
        }
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}