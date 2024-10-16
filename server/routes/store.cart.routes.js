import express from "express";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import { authJwt } from "../services/auth.services.js";
import StoreCartController from "../controllers/store.cart.controller.js";

const router = express.Router();

router.post(
    "/:storeId/add",
    authJwt,
    asyncHandler(StoreCartController.addProductToStoreCart)
);

export default router;
