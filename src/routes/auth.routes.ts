import { Request, Response } from "express";
import { Router } from "express";
import { getUser, loginUser, logoutUser, registerUser,logoutAll } from "../controller/auth.controller";

const router = Router();


// Authentication routes

// @method get 
// Route /api/auth/user
router.get("/auth/user", getUser);

// @method Post 
// Route /api/auth/login

router.post("/auth/login", loginUser);


// @method Post 
// Route /api/auth/register
router.post("/auth/register", registerUser);

// @method Post 
// Route /api/auth/logout
router.post("/auth/logout", logoutUser);

// @method Post 
// Route /api/auth/logoutall
router.post("/auth/logoutall", logoutAll);
