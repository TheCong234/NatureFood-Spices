import express from "express";
import UserController from "../controllers/user.controllers.js";
import { authLocal, authJwt } from "../services/auth.services.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";

import { storage } from "../config/cloudinary.config.js";
import multer from "multer";
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/all", UserController.getAll);
router.get("/info", authJwt, UserController.getCurrentUser);
router.get("/:id", UserController.getUserById);

router.post("/register", UserController.register);
router.post("/login", authLocal, UserController.login);

router.post(
    "/verify-email/otp",
    authJwt,
    asyncHandler(UserController.sendOtpToEmail)
);

router.put("/info", authJwt, UserController.updateUser);
router.put(
    "/image",
    authJwt,
    upload.single("image"),
    UserController.updateUserImage
);
router.put("/change-password/:email", UserController.changePassword);
export default router;
