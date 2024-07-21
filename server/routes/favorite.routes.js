import express from 'express';
import { authJwt } from '../services/auth.services.js';
import FavoriteController from '../controllers/favorite.controllers.js';
const router = express.Router();

router.get('/', authJwt, FavoriteController.getAll);

router.post('/:id', authJwt, FavoriteController.modifyFavorite);

export default router;