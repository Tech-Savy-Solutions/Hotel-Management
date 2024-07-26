import express from 'express';

const router = express.Router();

import {
    testRoute,
    getAllRooms,
    getRoomById,
    addRoom,
    updateRoom,
    deleteRoom,
} from '../controllers/room.controller'; // Adjust path as per your project structure

import { ROUTE_PATHS } from '../constants/app.constants';
import { verifyToken } from '../middlewares/auth.middleware';

const { TEST, GET_ALL, GET_BY_ID, ADD, UPDATE, DELETE } = ROUTE_PATHS;

// @route   GET api/reservations/test
// @desc    Tests Room route
// @access  Public
router.get(TEST, verifyToken, testRoute);

// @route   GET api/reservations
// @desc    Get all Rooms
// @access  Public
router.get(GET_ALL, verifyToken, getAllRooms);

// @route   GET api/reservations/:id
// @desc    Get single Room by id
// @access  Public
router.get(GET_BY_ID, verifyToken, getRoomById);

// @route   POST api/reservations
// @desc    Add/save Room
// @access  Public
router.post(ADD, verifyToken, addRoom);

// @route   PUT api/reservations/:id
// @desc    Update Room by id
// @access  Public
router.put(UPDATE, verifyToken, updateRoom);

// @route   DELETE api/reservations/:id
// @desc    Delete Room by id
// @access  Public
router.delete(DELETE, verifyToken, deleteRoom);

export default router;
