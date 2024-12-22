import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import ConnectDB from "./db/db.js";
import router from "./routes/user.route.js";

const app = express();
ConnectDB();
app.use(cors());

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
