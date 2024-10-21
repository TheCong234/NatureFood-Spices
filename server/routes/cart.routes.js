import express from "express";
import CartController from "../controllers/cart.controllers.js";
import { authJwt } from "../services/auth.services.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";

const router = express.Router();
router.get("/all", authJwt, asyncHandler(CartController.getCartItems));

router.post("/", authJwt, asyncHandler(CartController.createCartItem));
export default router;
