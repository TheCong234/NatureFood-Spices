import express from "express";
import { authJwt } from "../services/auth.services.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import NotifyController from "../controllers/notify.controller.js";

const router = express.Router();
router.post("/", asyncHandler(NotifyController.createNotify));

export default router;
