import { Request, Response } from "express";
import { Router } from "express";
import { getUser, loginUser, logoutUser, registerUser,logoutAll } from "../controller/auth.controller";

const authRouter = Router();


// Authentication routes

// @method get 
// Route /api/auth/user
authRouter.get("/user", getUser);

// @method Post 
// Route /api/auth/login

authRouter.post("/login", loginUser);


// @method Post 
// Route /api/auth/register
authRouter.post("/register", registerUser);

// @method Post 
// Route /api/auth/logout
authRouter.post("/logout", logoutUser);

// @method Post 
// Route /api/auth/logoutall
authRouter.post("/logoutall", logoutAll);

export default authRouter;