import express from "express";
import { authJwt } from "../services/auth.services.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import OrderController from "../controllers/order.controller.js";

const router = express.Router();

router.get("/my-orders", authJwt, asyncHandler(OrderController.getMyOrders));

router.post("/new", authJwt, asyncHandler(OrderController.createOrders));

router.patch(
    "/:id/update/:status",
    authJwt,
    asyncHandler(OrderController.updateOrder)
);

export default router;
