import express from "express";
import CartController from "../controllers/cart.controllers.js";
import { authJwt } from "../services/auth.services.js";

const router = express.Router();

router.post("/modify", authJwt, CartController.addItem);
router.delete("/:productId", authJwt, CartController.deleteItem);
export default router;
