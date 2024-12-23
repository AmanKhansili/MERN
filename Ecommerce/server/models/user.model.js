import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
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
          product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: { type: Number, default: 1 },
        },
      ],
      default: [],
    },
    favourites: {
      type: [Schema.Types.ObjectId],
      ref: "Products",
      default: [],
    },
    orders: {
      type: [Schema.Types.ObjectId],
      ref: "Order",
      default: [],
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
