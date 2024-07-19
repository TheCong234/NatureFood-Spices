import express from 'express';
import ProductModel from '../models/product.model.js';
import ReviewModel from '../models/review.model.js';
import ReviewController from '../controllers/review.controllers.js';
import { authJwt } from '../services/auth.services.js';

const router = express.Router();

router.post('/:productId', authJwt, ReviewController.createReview);

router.put('/:id/feedback', authJwt, ReviewController.createFeedBack);

router.delete('/:id', ReviewController.deleteReview);
export default router;