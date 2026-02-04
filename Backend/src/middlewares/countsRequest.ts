import { NextFunction, Request, Response } from 'express';

export let requestCount = 0;
export const countsRequest = (req: Request, res: Response, next: NextFunction) => {

    requestCount++;
    next();
}


