import { z } from "zod";


export const LoginSchema = z.object({
    username: z.string(),
    id: z.string(),
    token: z.string(),
    message: z.string(),
});

export const userDetailsSchema = z.object({
    _id: z.string(),
    username: z.string(),
    password: z.string(), // Ensure to handle passwords securely
    email: z.string().email(),
    phoneNumber: z.string(),
    roles: z.array(z.string()),
    createdBy: z.string(),
    updatedBy: z.string(),
    createdAt: z.string(), // Consider using z.date() if working with Date objects
    updatedAt: z.string(), // Consider using z.date() if working with Date objects
    __v: z.number(),
});