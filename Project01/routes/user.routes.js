import express from "express";
import { registerUser } from "../controllers/userController.js";

const UserRouter = express.Router();

//@route  POST api/user
//@desc   Register user
//@access Public
//Here i am using joi for validation
UserRouter.post("/", registerUser);
    
export default UserRouter;

