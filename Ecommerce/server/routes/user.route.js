import express from "express";
import {
  addToCart,
  addToFavorites,
  getAllcatItems,
  getAllOrders,
  getUserFavorites,
  placeOrder,
  removeFromCart,
  removeFromFavorites,
  UserLogin,
  UserRegister,
} from "../controller/User.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

//cart
router.get("/cart", getAllcatItems);
router.post("/cart", addToCart);
router.patch("/cart", removeFromCart);

//order
router.get("/order", getAllOrders);
router.post("/order", placeOrder);

//favourites
router.get("/favorite", getUserFavorites);
router.post("/favorite", addToFavorites);
router.patch("/favorite", removeFromFavorites);

export default router;
