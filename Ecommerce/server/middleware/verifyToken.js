import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ msg: "You are not authenticated" });
    }
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ msg: "You are not authenticated" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};
