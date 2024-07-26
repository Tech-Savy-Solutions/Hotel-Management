import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from .env file

declare module 'express-serve-static-core' {
    interface Request {
        userId?: string; // Optional since it won't be set before the middleware runs
    }
}
interface DecodedToken extends JwtPayload {
    userId: string;
}

function isDecodedToken(decoded: any): decoded is DecodedToken {
    return typeof decoded.userId === 'string';
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied' });
    }

    try {
        const secretKey = process.env.JWT_SECRET as string;

        const decoded = jwt.verify(token, secretKey) as JwtPayload;

        // Check if the decoded object has a userId
        if (isDecodedToken(decoded)) {
            req.userId = decoded.userId;
            next();
        } else {
            res.status(401).json({ error: 'Invalid token payload' });
        }
    } catch (error) {
        console.error('JWT verification error:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
}
