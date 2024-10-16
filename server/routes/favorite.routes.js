import express from "express";
import { authJwt } from "../services/auth.services.js";
import FavoriteController from "../controllers/favorite.controllers.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";

const router = express.Router();

router.get(
    "/product",
    authJwt,
    asyncHandler(FavoriteController.getFavoriteProducts)
);
router.get("/", authJwt, FavoriteController.getAll);

router.patch(
    "/product/add/:id",
    authJwt,
    asyncHandler(FavoriteController.addFavoriteProduct)
);

router.patch(
    "/product/remove/:id",
    authJwt,
    asyncHandler(FavoriteController.removeFavoriteProduct)
);

export default router;
