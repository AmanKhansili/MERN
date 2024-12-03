dotenv.config();
import express from "express";
import dotenv from "dotenv";
import { connectDb } from "../Project01/config/db.js";
import UserRouter from "./routes/user.routes.js";
import ProfileRouter from "./routes/profile.routes.js";
import AuthRouter from "./routes/auth.routes.js";
import PostsRouter from "./routes/posts.routes.js";

connectDb(); // Connect Database

const app = express();
app.use(express.json()); //Parse incoming JSON data

// Define Routes
app.use("/api/users", UserRouter);
app.use("/api/profile", ProfileRouter);
app.use("/api/posts", PostsRouter);
app.use("/api/auth", AuthRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("server is successfully running on ", PORT);
});
