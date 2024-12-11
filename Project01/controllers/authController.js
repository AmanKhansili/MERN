import joi from "joi";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const authController = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };
    //Genrate JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.status(200).json({ msg: "User login sucess", token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

export default authController;
