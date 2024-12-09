import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { User } from "../models/user.model.js";
import authController from "../controllers/authController.js";
const AuthRouter = express.Router();

//@route  GET api/auth
//@desc   Test Rooute
//@access Public
AuthRouter.get("/", auth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
});

AuthRouter.post("/", authController);
export default AuthRouter;
