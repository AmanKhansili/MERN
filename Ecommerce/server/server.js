import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import ConnectDB from "./db/db.js";
import router from "./routes/user.route.js";

const app = express();
ConnectDB();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

//error handel
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.use("/api/user", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
