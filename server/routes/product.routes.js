import express from 'express';
import ProductController from '../controllers/product.controllers.js';
import ReviewController from '../controllers/review.controllers.js';
import { storage } from '../config/cloudinary.config.js';
import multer from 'multer';
const upload = multer({storage: storage});
const router = express.Router();

router.get('/category/:idCategory', ProductController.getProductByCategory);
router.get('/:id', ProductController.getProductById);
router.get('/all',ProductController.getAllProduct);


router.post('/:id/review', ReviewController.createReview);
router.post('/',upload.array('images'), ProductController.createProduct);


router.put('/:id/image/:idImage', ProductController.deleteImageProduct);
router.put('/:id/image', upload.array('images'), ProductController.addImagesProduct);
router.put('/:id', ProductController.updateProduct);


router.delete('/:id', ProductController.deleteProduct);
export default router;