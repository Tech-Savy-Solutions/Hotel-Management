// src/types/express.d.ts

import 'express-serve-static-core';

declare module 'express-serve-static-core' {
    interface Request {
        userId?: string; // Optional since it won't be set before the middleware runs
    }
}
