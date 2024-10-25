import express from "express";
import ReviewController from "../controllers/review.controllers.js";
import { authJwt } from "../services/auth.services.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";

const router = express.Router();

router.get("/:storeProductId/all", asyncHandler(ReviewController.getReviews));
router.post("/:storeProductId", authJwt, asyncHandler(ReviewController.createReview));

router.put("/:id/feedback", authJwt, ReviewController.createFeedBack);
router.delete("/:id", ReviewController.deleteReview);
export default router;
