import { AnyExpression } from 'mongoose';
import User from '../models/user.model';

// @desc    Tests Users route
// @route   GET api/Users/test
// @access  Public
export const testRoute = (req:any, res:any) => res.send('User route testing!');

// @desc    Get all Users
// @route   GET api/Users
// @access  Public
export const getAllUsers = (req:any, res:any) => {
    User.find()
        .then((Users) => res.json(Users))
        .catch((err) =>
            res.status(404).json({ noUsersfound: 'No Users found' })
        );
};

// @desc    Get single User by id
// @route   GET api/Users/:id
// @access  Public
export const getUserById = (req:any, res:any) => {
    User.findById(req.params.id)
        .then((User) => res.json(User))
        .catch((err) => res.status(404).json({ noUserfound: 'No User found' }));
};

// @desc    Add/save User
// @route   POST api/Users
// @access  Public
export const addUser = (req:any, res:any) => {
    User.create(req.body)
        .then((User) => res.json({ msg: 'User added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this User', err })
        );
};

// @desc    Update User by id
// @route   PUT api/Users/:id
// @access  Public
export const updateUser = (req:any, res:AnyExpression) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((User) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
};

// @desc    Delete User by id
// @route   DELETE api/Users/:id
// @access  Public
export const deleteUser = (req:any, res:any) => {
    User.findByIdAndDelete(req.params.id)
        .then((User) => res.json({ msg: 'User entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such a User' }));
};
