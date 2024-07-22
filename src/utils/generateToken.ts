import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

const jwt_secret = process.env.JWT_SECRET as string;

// Generate JWT Token

export const generateToken = (id: string): string => {
  return jwt.sign({ id }, jwt_secret, { expiresIn: "1h"})
}

// Verify JWT Token
