import { Request,Response } from "express";
import { User } from "../models/user.model";
import { generateToken } from "../utils/generateToken";
import { IUser } from "../types/user.interface";
import bcrypt from 'bcryptjs';
// get user  controller

const getUser= (req:Request, res:Response) => {
    try {
      
        res.status(200).json({message:"hello from login api"});
    } catch (error:any) {
        res.status(error.status).json({error: error.message});
    }
}
// Register  controller

const registerUser= (req:Request, res:Response) => {
    try {
        res.status(200).json({message:"hello from login api"});
    } catch (error:any) {
        res.status(error.status).json({error: error.message});
    }
}


// login controller
const  loginUser= async(req:Request, res:Response) => {
    try {
        const {username,email,password} = req.body;
        if(!username || !password || !email){
            return res.status(400).json({error: "All fields are required"});
        }

        // check email and password

        const user=bcrypt.compare(password);

        if(!user){
            return res.status(401).json({error: "Invalid email or password"});
        }
       
        // token generate

        res.json({token:generateToken(user)});

    } catch (error:any) {
        res.status(error.status).json({error: error.message});
    }
}

// Logout controller

const logoutUser= (req:Request, res:Response) => {
    try {
        res.status(200).json({message:"hello from logout api"});
    } catch (error:any) {
        res.status(error.status).json({error: error.message});
    }
}

// Logout from all devices controller

const logoutAll= (req:Request, res:Response) => {
    try {
        res.status(200).json({message:"hello from logout from all devices api"});
    } catch (error:any) {
        res.status(error.status).json({error: error.message});
    }
}

export {getUser,registerUser,loginUser,logoutAll,logoutUser}
