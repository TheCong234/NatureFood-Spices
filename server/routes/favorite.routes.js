import express from "express";
import { authJwt } from "../services/auth.services.js";
import FavoriteController from "../controllers/favorite.controllers.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";

const router = express.Router();

router.get(
    "/store-product/all",
    authJwt,
    asyncHandler(FavoriteController.getFavoriteStoreProducts)
);
router.get(
    "/product",
    authJwt,
    asyncHandler(FavoriteController.getFavoriteProducts)
);

router.post(
    "/store-product/:storeProductId/add",
    authJwt,
    asyncHandler(FavoriteController.addFavoriteStoreProduct)
);

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

router.delete(
    "/store-product/:storeProductId",
    authJwt,
    asyncHandler(FavoriteController.deleteFavoriteStoreProduct)
);

export default router;
