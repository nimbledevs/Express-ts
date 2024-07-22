import { Request,Response } from "express";

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
const  loginUser= (req:Request, res:Response) => {
    try {
        res.status(200).json({message:"hello from register api"});
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