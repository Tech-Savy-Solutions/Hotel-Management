// src/routes/users.ts
import express from 'express';
import {
    testRoute,
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    login,
} from '../controllers/user.controller';
import { verifyToken } from '../middlewares/auth.middleware';
import { ROUTE_PATHS } from '../constants/app.constants';

const router = express.Router();

const { TEST, GET_ALL, GET_BY_ID, ADD, UPDATE, DELETE, LOGIN } = ROUTE_PATHS;

// @route   GET api/Users/test
// @desc    Tests Users route
// @access  Public
router.get(TEST, testRoute);

// @route   GET api/Users
// @desc    Get all Users
// @access  Protected
router.get(GET_ALL, verifyToken, getAllUsers);

// @route   GET api/Users/:id
// @desc    Get single User by id
// @access  Protected
router.get(GET_BY_ID, verifyToken, getUserById);

// @route   POST api/Users
// @desc    Add/save User
// @access  Protected
router.post(ADD, verifyToken, addUser);

// @route   PUT api/Users/:id
// @desc    Update User by id
// @access  Protected
router.put(UPDATE, verifyToken, updateUser);

// @route   DELETE api/Users/:id
// @desc    Delete User by id
// @access  Protected
router.delete(DELETE, verifyToken, deleteUser);

// @route   POST api/Users/login
// @desc    Login User
// @access  Public
router.post(LOGIN, login);

export default router;
