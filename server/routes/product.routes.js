import express from 'express';
import ProductController from '../controllers/product.controller.js';
import { storage } from '../config/cloudinary.config.js';
import multer from 'multer';
const upload = multer({storage: storage});
const router = express.Router();

router.get('/category/:idCategory', ProductController.getProductByCategory);
router.get('/:id', ProductController.getProductById);
router.get('/all',ProductController.getAllProduct);


router.post('/',upload.array('images'), ProductController.createProduct);

router.put('/:id/image/:idImage', ProductController.deleteImageProduct);
router.put('/:id/image', upload.array('images'), ProductController.addImagesProduct);
router.put('/:id', ProductController.updateProduct);


router.delete('/:id', ProductController.deleteProduct);
export default router;