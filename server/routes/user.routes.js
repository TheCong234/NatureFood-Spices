import express from 'express';
const router = express.Router();

router.get('/', CategoryController.getCategories);

router.get('/new', CategoryController.renderAdd);

router.get('/:id', CategoryController.renderEdit);

router.post('/new', upload.single('image'), CategoryController.creatCategory);

router.put('/:id', upload.single('image'), CategoryController.update);

router.delete('/:id', CategoryController.delete);

export default router;