import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { Profile } from "../models/profile.model.js";
const ProfileRouter = express.Router();
import { profile } from "../controllers/profileController.js";

//@route  GET api/profile
//@desc   Get current user profiles
//@access Private
ProfileRouter.get("/me", auth, async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate("user", ["name"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.send(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/profile
//@desc   Get current user profiles
//@access Private

ProfileRouter.post("/", auth, profile);

export default ProfileRouter;
