import express from 'express';
import TagController from '../controllers/tag.controllers.js';


const router = express.Router();

router.get('/all', TagController.getAll);


router.post('/', TagController.createTags);

router.put('/:productId', TagController.addTagsToProduct);
export default router;