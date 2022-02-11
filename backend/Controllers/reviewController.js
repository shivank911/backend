const { findByIdAndDelete } = require('../Model/planModel');
const planmodel = require('../Model/planModel');
const reviewmodel=require('../Model/reviewModel');
const reviewRouter = require('../Router/reviewRouter');

module.exports.getAllReviews=async function getAllReviews(req,res){
    try{
        let review=await reviewmodel.find();
        if(review){
            return res.json({
                message:"reviews recieved successful",
                data:review,
            })
        }
        else{
            return res.json({
                message:"no revies found",
            })
        }
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}

module.exports.top3reviews=async function top3reviews(req,res){
    try{
        let reviews=await reviewmodel.find().sort({
            rating:-1,
        }).limit(3);
        if(reviews){
            return res.json({
                message:"top 3 reviews successful",
                data:reviews
            })
        }
        else{
            return res.json({
                message:"reviw not found"
            })
        }
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}


module.exports.getPlanReviews=async function getPlanReviews(req,res){
    try{
    let id=req.params.id;
    let reviews=await reviewmodel.findById(id);
    if(reviews)
    return res.json({
        data:reviews,
        message:'reviews retrieved for a particular plan successful'
    });
    else{
        return res.json({
            message:'review not found',
        })
    }
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}

module.exports.createReview=async function(req,res){
  try {
      let id=req.params.id;
      let plan=await planmodel.findById(id);
      let review=await reviewmodel.create(req.body);
      plan.ratingsAverage=(plan.ratingsAverage+req.body.rating)/2;
      await review.save();
      res.json({
          message:"review created successfully",
          data:review,
      })
  } catch (error) {
      res.json({
          message:error.message,
      })
  }
}

module.exports.updateReview=async function updateReview(req,res){
    try{
        let id=req.params.id;
        let datatobeupdated=req.body;
        let keys=[]
        for(let key in datatobeupdated){
            keys.push(key);
        }
        let review=await reviewmodel.findById(id);
        for(let i=0;i<keys.length;i++){
            review[keys[i]]=datatobeupdated[keys[i]];
        }
        await review.save();
        return res.json({
            message:'plan updated successfull',
            data:review,
        });
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}

module.exports.deleteReview=async function deleteReview(req,res){
    try{
        let id=req.params.id;
        let review=await findByIdAndDelete(id);
        res.json({
            message:"delete successful",
            data:review,
        })
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
}
