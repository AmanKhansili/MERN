import Joi from "joi";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Pre-Database Validation before inserted in database
const userSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
});

const registerUser = async (req, res) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json(error.details);
  }

  const { name, email, password } = req.body;

  // Check if user is already exist
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    // Create JWT(JsonWebToken)
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { registerUser };
