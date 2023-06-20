import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import session from "express-session";
const app = express();
mongoose.connect(
  "mongodb+srv://samleefinance:testtesttest@cluster0.znlmijx.mongodb.net/tuiter?retryWrites=true&w=majority"
);
// mongoose.connect("mongodb://127.0.0.1:27017/tuiter");
app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
const port = process.env.PORT || 4000;

HelloController(app);
UserController(app);
TuitsController(app);
AuthController(app);
app.listen(port);
