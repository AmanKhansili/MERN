import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  // get token from header
  const token = req.header("x-auth-token");

  //Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //varify JWT tokens
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export default auth;
