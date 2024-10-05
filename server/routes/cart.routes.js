import express from "express";
import CartController from "../controllers/cart.controllers.js";
import { authJwt } from "../services/auth.services.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";

const router = express.Router();

router.get("/items", authJwt, asyncHandler(CartController.getItemsCart));

router.post("/add", authJwt, asyncHandler(CartController.addItem));
router.delete("/:productId", authJwt, asyncHandler(CartController.removeItem));
export default router;
