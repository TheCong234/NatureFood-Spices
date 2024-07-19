import express from 'express';
import { isLoggedIn } from '../utils/middleware.utils.js';
import UserController from '../controllers/user.controllers.js';
import { storage } from '../config/cloudinary.config.js';
import multer from 'multer';
const upload = multer({storage: storage});
//
import validate from 'express-validation';
import { authLocal, authJwt } from '../services/auth.services.js';
//

const router = express.Router();


router.get('/all', UserController.getAll);
router.get('/:id', UserController.getUserById);

router.post('/register', UserController.register);
router.post('/login', authLocal, UserController.login);

router.put('/info',authJwt, UserController.updateUser);
router.put('/image', authJwt, upload.single('image'), UserController.updateUserImage);
router.put('/change-password/:email', UserController.changePassword);

export default router;