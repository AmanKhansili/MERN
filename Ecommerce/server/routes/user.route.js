import express from "express";
import { UserRegister } from "../controller/User.js";

const router = express.Router();

router.post("/signup", UserRegister)


export default router;
