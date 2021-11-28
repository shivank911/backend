const express=require('express');
let app=express();
const reviewRouter=express.Router();
const {protectRoute}=require("../Controllers/authController");
const{getAllReviews,top3reviews,getPlanReviews,createReview,updateReview,deleteReview}=require("../Controllers/reviewController");
reviewRouter.route('/all')
.get(getAllReviews)

reviewRouter.route('/top3')
.get(top3reviews);

reviewRouter.route('/:id')
.get(getPlanReviews);

app.use(protectRoute);
reviewRouter.route('/crud/plan')
.post(createReview)

reviewRouter.route('/crud/:id')
.patch(updateReview)
.delete(deleteReview);

module.exports=reviewRouter;

