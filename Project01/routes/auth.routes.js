import express from "express";

const AuthRouter = express.Router();

//@route  GET api/auth
//@desc   Test Rooute
//@access Public
AuthRouter.get("/", (req, res, next) => res.send("auth route"));

export default AuthRouter;
