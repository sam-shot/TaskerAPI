import express from "express";
import * as auth from "../controller/auth.controller.js"
const authRouter = express.Router();

authRouter.get("/login",auth.login);


export default authRouter;