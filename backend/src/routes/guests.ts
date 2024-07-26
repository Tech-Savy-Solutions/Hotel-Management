// guestRoutes.js

import express from 'express';

const router = express.Router();

import {
    testRoute,
    getAllGuests,
    getGuestById,
    addGuest,
    updateGuest,
    deleteGuest,
} from '../controllers/guest.controller'; // Adjust path as per your project structure

import { ROUTE_PATHS } from '../constants/app.constants'; // Import route paths constant
import { verifyToken } from '../middlewares/auth.middleware';

// Destructure route paths
const { TEST, GET_ALL, GET_BY_ID, ADD, UPDATE, DELETE } = ROUTE_PATHS;

// @route   GET ${GET_ALL}
// @desc    Get all Guests
// @access  Public
router.get(GET_ALL, verifyToken, getAllGuests);

// @route   GET ${GET_BY_ID}
// @desc    Get single Guest by id
// @access  Public
router.get(GET_BY_ID, verifyToken, getGuestById);

// @route   POST ${ADD}
// @desc    Add/save Guest
// @access  Public
router.post(ADD, verifyToken, addGuest);

// @route   PUT ${UPDATE}
// @desc    Update Guest by id
// @access  Public
router.put(UPDATE, verifyToken, updateGuest);

// @route   DELETE ${DELETE}
// @desc    Delete Guest by id
// @access  Public
router.delete(DELETE, verifyToken, deleteGuest);

// @route   GET ${TEST}
// @desc    Tests Guests route
// @access  Public
router.get(TEST, verifyToken, testRoute);

export default router;
