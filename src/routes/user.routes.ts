import { Request, Response } from "express";
import { Router } from "express";
import { getUser, loginUser, logoutUser, registerUser,logoutAll } from "../controller/auth.controller";

const userRouter = Router();


// Authentication routes

// @method get 
// Route /api/auth/user
userRouter.get("/user", getUser);

// @method Post 
// Route /api/auth/login

userRouter.post("/login", loginUser);


// @method Post 
// Route /api/auth/register
userRouter.post("/register", registerUser);

// @method Post 
// Route /api/auth/logout
userRouter.post("/logout", logoutUser);

// @method Post 
// Route /api/auth/logoutall
userRouter.post("/logoutall", logoutAll);

export default userRouter;