import express from "express";
import { UserLogin, UserRegister } from "../controller/User.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

export default router;
