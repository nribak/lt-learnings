import {NextFunction, Request, Response} from "express";
import colors from "colors/safe";

export const loggerMiddleware = ((req: Request, res: Response, next: NextFunction) => {
    console.log(colors.green(req.method) + ':', colors.bgGreen(req.url));
    next();
});

export const authMiddleware = ((req: Request, res: Response, next: NextFunction) => {
    const privateKey = process.env.API_KEY;
   const {authorization} = req.headers;
   if(authorization === privateKey)
       next();
   else
       res.sendStatus(401);
});
