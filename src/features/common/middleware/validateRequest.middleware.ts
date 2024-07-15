import { NextFunction, Request, Response } from 'express';
import * as validator from 'express-validator';

export default function validateRequestMiddleware(req: Request, res: Response, next: NextFunction) {
    const errors = validator.validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}