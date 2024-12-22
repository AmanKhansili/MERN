import express from "express";

const router = express.Router();

router.get("/profile", (req, res) => {
  res.status(200).json({ msg: "Welcome in Profile page" });
});
router.get("/register", (req, res) => {
  res.status(200).json({ msg: "Welcome in register page" });
});

export default router;
