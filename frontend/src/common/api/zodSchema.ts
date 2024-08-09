import { z } from "zod";


export const LoginSchema = z.object({
    username: z.string(),
    id: z.string(),
    token: z.string(),
    message: z.string(),
});