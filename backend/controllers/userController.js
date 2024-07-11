import User from '../models/user.js';

// @desc    Tests Users route
// @route   GET api/Users/test
// @access  Public
export const testRoute = (req, res) => res.send('User route testing!');

// @desc    Get all Users
// @route   GET api/Users
// @access  Public
export const getAllUsers = (req, res) => {
    User.find()
        .then((Users) => res.json(Users))
        .catch((err) =>
            res.status(404).json({ noUsersfound: 'No Users found' })
        );
};

// @desc    Get single User by id
// @route   GET api/Users/:id
// @access  Public
export const getUserById = (req, res) => {
    User.findById(req.params.id)
        .then((User) => res.json(User))
        .catch((err) => res.status(404).json({ noUserfound: 'No User found' }));
};

// @desc    Add/save User
// @route   POST api/Users
// @access  Public
export const addUser = (req, res) => {
    User.create(req.body)
        .then((User) => res.json({ msg: 'User added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this User' })
        );
};

// @desc    Update User by id
// @route   PUT api/Users/:id
// @access  Public
export const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((User) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
};

// @desc    Delete User by id
// @route   DELETE api/Users/:id
// @access  Public
export const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((User) => res.json({ msg: 'User entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such a User' }));
};
