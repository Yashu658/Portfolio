import express from "express";
import dotenv from "dotenv"; 
         

import AuthRouter from "./src/routers/authRouter.js";
import UserRouter from "./src/routers/userRouter.js";
import connectDB from "./src/config/db.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import AdminRouter from "./src/routers/adminRouter.js";
dotenv.config();    
const app = express();


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/admin", AdminRouter);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Working" });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ message });
});

const port = process.env.PORT|| 5000;

app.listen(port, () => {
  console.log("Server Started at", port);
  connectDB();
});