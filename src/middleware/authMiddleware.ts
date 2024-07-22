import jwt from 'jsonwebtoken';
import { Request,Response,NextFunction } from 'express';

  // Custom Request type
  type MyRequest = Request & {
    user: any;
  };

export const auth = (
    req: Request,
    res: Response,
    next: NextFunction
  ): any => {
    let token = req.headers.authorization || "";
    if (!token) {
      res.status(401).json({ error: "Access Denied / Unauthorized request" });
    }
    try {
      token = token.split(" ")[1]; // Bearer token format
  
      if(token === null || !token){
          res.status(401).json({ error: "Access Denied / Unauthorized request" });
      }
  
      const verifiedUser = jwt.verify(token, process.env.JWT_SECRET as string);
      // Add the following line to add the 'user' property to the Request object
      (req as any).user = verifiedUser;
      next;
    } catch (error) {
      res.status(401).json({ error: "Invalid token" })
    }
  }
  
  
