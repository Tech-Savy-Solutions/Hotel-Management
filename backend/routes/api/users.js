import express from 'express';
const router = express.Router();

import {
    testRoute,
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
} from '../../controllers/UserController.js';

// @route   GET api/Users/test
// @desc    Tests Users route
// @access  Public
router.get('/test', testRoute);

// @route   GET api/Users
// @desc    Get all Users
// @access  Public
router.get('/', getAllUsers);

// @route   GET api/Users/:id
// @desc    Get single User by id
// @access  Public
router.get('/:id', getUserById);

// @route   POST api/Users
// @desc    Add/save User
// @access  Public
router.post('/', addUser);

// @route   PUT api/Users/:id
// @desc    Update User by id
// @access  Public
router.put('/:id', updateUser);

// @route   DELETE api/Users/:id
// @desc    Delete User by id
// @access  Public
router.delete('/:id', deleteUser);

export default router;
