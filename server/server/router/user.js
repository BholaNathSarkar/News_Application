import { Router } from "express";
import * as userController from "../controller/user.js";

const userRoute = Router();

userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);
export default userRoute;
