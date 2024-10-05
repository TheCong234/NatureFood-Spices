import express from "express";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import StoreProductController from "../controllers/store.product.controller.js";
import { authJwt } from "../services/auth.services.js";

const router = express.Router();

router.get(
    "/category/:category",
    asyncHandler(StoreProductController.getStoreProductsByCategory)
);
router.get("/all", asyncHandler(StoreProductController.getStoreProducts));

router.post(
    "/new",
    authJwt,
    asyncHandler(StoreProductController.createStoreProducts)
);

export default router;
