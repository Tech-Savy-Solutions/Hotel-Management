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

export const GuestsListResponseSchema = z.array(
    z.object({
        _id: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        address: z.string(),
        email: z.string().email(), // Ensure it's a valid email format
        phoneNumber: z.string(), // You could add a more specific regex for phone validation if needed
        createdAt: z.string().datetime(), // Ensures it's a valid ISO date string
        updatedAt: z.string().datetime(), // Ensures it's a valid ISO date string
        __v: z.number(),
    })
) 