import express from "express";
import auth from "../middlewares/auth.middleware.js";
const AuthRouter = express.Router();

//@route  GET api/auth
//@desc   Test Rooute
//@access Public
AuthRouter.get("/", auth, (req, res, next) => res.send("auth route"));

export default AuthRouter;
