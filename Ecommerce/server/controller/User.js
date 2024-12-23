import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../error.js";
import { User } from "../models/User.model.js";
import { Order } from "../models/Order.model.js";

const UserRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //check if user already existed
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User already existed" });
    }
    //bcrypt Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashPassword,
    });

    await user.save();

    //create jwt token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ msg: "User register successfully", token, user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const UserLogin = () => {};
export { UserRegister, UserLogin };
