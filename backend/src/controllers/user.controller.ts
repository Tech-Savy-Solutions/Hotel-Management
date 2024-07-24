import { AnyExpression } from 'mongoose';
import User from '../models/user.model';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET as string;

// @desc    Tests Users route
// @route   GET api/Users/test
// @access  Public
export const testRoute = (req: any, res: any) =>
    res.send('User route testing!');

// @desc    Get all Users
// @route   GET api/Users
// @access  Public
export const getAllUsers = (req: any, res: any) => {
    User.find()
        .then((Users) => res.json(Users))
        .catch((err) =>
            res.status(404).json({ noUsersfound: 'No Users found' })
        );
};

// @desc    Get single User by id
// @route   GET api/Users/:id
// @access  Public
export const getUserById = (req: any, res: any) => {
    User.findById(req.params.id)
        .then((User) => res.json(User))
        .catch((err) => res.status(404).json({ noUserfound: 'No User found' }));
};

// @desc    Add/save User
// @route   POST api/Users
// @access  Public
export const addUser = async (req: Request, res: Response) => {
    try {
        console.log('Request Body:', req.body);

        const { password, ...otherData } = req.body; // Extract password and other user data

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed Password:', hashedPassword);

        // Create a new user with the hashed password
        const newUser = new User({
            ...otherData,
            password: hashedPassword, // Use the hashed password
        });
        console.log('newUser:', newUser);

        // Save the user to the database
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ msg: 'User added successfully', user: newUser });
    } catch (err) {
        console.error('Error adding user:', err);
        res.status(400).json({ error: 'Unable to add this User', err });
    }
};

// @desc    Update User by id
// @route   PUT api/Users/:id
// @access  Public
export const updateUser = (req: any, res: AnyExpression) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((User) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
};

// @desc    Delete User by id
// @route   DELETE api/Users/:id
// @access  Public
export const deleteUser = (req: any, res: any) => {
    User.findByIdAndDelete(req.params.id)
        .then((User) => res.json({ msg: 'User entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such a User' }));
};

export const login = async (req: Request, res: Response) => {
    console.log('TsecretKeyn Express:', secretKey);
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        console.log('User:', user);
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user._id }, secretKey, {
            expiresIn: '1h',
        });
        res.status(200).json({ token, message: 'User logged In' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};
