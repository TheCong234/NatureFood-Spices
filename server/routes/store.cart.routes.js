import express from "express";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import { authJwt } from "../services/auth.services.js";
import StoreCartController from "../controllers/store.cart.controller.js";

const router = express.Router();

router.get(
    "/all",
    authJwt,
    asyncHandler(StoreCartController.getStoreCartItems)
);

router.post(
    "/:storeId/add",
    authJwt,
    asyncHandler(StoreCartController.addProductToStoreCart)
);

router.patch(
    "/items/:id/delete",
    authJwt,
    asyncHandler(StoreCartController.deleteStoreCartItem)
);

router.patch(
    "/items/:id/adjustment",
    authJwt,
    asyncHandler(StoreCartController.adjustmentStoreCartItem)
);
export default router;
