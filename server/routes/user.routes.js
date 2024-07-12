import express from 'express';
import passport from 'passport';
import LocalStratege from 'passport-local';
import { isLoggedIn } from '../utils/middleware.utils.js';
import UserModel from '../models/user.model.js';
import UserController from '../controllers/user.controllers.js';

//
import validate from 'express-validation';
import { authLocal } from '../services/auth.services.js';
//

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', authLocal, UserController.login);


export default router;