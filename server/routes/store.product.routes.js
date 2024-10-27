import express from "express";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import StoreProductController from "../controllers/store.product.controller.js";
import { authJwt } from "../services/auth.services.js";

const router = express.Router();

router.get("/category/:categoryId", asyncHandler(StoreProductController.getStoreProductsByCategory));
router.get("/group-by-product/:productId", asyncHandler(StoreProductController.getStoreProductsByProduct));
router.get("/details/:storeProductId", asyncHandler(StoreProductController.getStoreProduct));
router.get("/all", asyncHandler(StoreProductController.getStoreProducts));

router.post("/create", authJwt, asyncHandler(StoreProductController.createStoreProducts));

export default router;
