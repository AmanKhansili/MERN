import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: null,
    },
    cart: {
      type: [
        {
          product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
          quantity: { type: Number, default: 1 },
        },
      ],
      default: [],
    },
    favourites: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Products",
      default: [],
    },
    orders: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Orders",
      default: [],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
