const express=require('express');
const reviewRouter=express.Router();
const {protectRoute}=require("../Controllers/authController");

reviewRouter.route('/all')
.get(getAllReviews)

reviewRouter.route('/top3')
.get(top3Routes);

reviewRouter.route('/:id')
.get(getPlanReviews)

reviewRouter.route('/crud/:plan')
.post(createrReview)
.patch(updateReview)
.delete(deleteReview);

module.exports=reviewRouter;

