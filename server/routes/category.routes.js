import express from 'express';
const router = express.Router();
import CategoryController from '../controllers/category.controllers.js';
import { storage } from '../config/cloudinary.config.js';
import multer from 'multer';
const upload = multer({storage: storage});


router.get('/all', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getCategoryById);

router.post('/', upload.single('image'), CategoryController.createCategory);

router.put('/:id/image', upload.single('image'), CategoryController.updateImageCategory);
router.put('/:id', CategoryController.updateCategory);
export default router;