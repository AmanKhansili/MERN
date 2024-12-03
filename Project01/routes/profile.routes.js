import express from "express";

const ProfileRouter = express.Router();

//@route  GET api/profile
//@desc   Test Rooute
//@access Public
ProfileRouter.get("/", (req, res, next) => res.send("Profile route"));

export default ProfileRouter;