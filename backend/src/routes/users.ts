import express from 'express';

const router = express.Router();

import {
    testRoute,
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
} from '../controllers/user.controller';

import { ROUTE_PATHS } from '../constants/app.constants';

const { TEST, GET_ALL, GET_BY_ID, ADD, UPDATE, DELETE } = ROUTE_PATHS;
// @route   GET api/Users/test
// @desc    Tests Users route
// @access  Public

router.get(TEST, testRoute);

// @route   GET api/Users
// @desc    Get all Users
// @access  Public
router.get(GET_ALL, getAllUsers);

// @route   GET api/Users/:id
// @desc    Get single User by id
// @access  Public
router.get(GET_BY_ID, getUserById);

// @route   POST api/Users
// @desc    Add/save User
// @access  Public
router.post(ADD, addUser);

// @route   PUT api/Users/:id
// @desc    Update User by id
// @access  Public
router.put(UPDATE, updateUser);

// @route   DELETE api/Users/:id
// @desc    Delete User by id
// @access  Public
router.delete(DELETE, deleteUser);

export default router;
