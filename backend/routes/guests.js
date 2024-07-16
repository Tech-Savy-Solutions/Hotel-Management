import express from 'express';
const router = express.Router();

import {
    testRoute,
    getAllGuests,
    getGuestById,
    addGuest,
    updateGuest,
    deleteGuest,
} from '../controllers/guest.controller.js';

// @route   GET api/Guests/test
// @desc    Tests Guests route
// @access  Public
router.get('/test', testRoute);

// @route   GET api/Guests
// @desc    Get all Guests
// @access  Public
router.get('/', getAllGuests);

// @route   GET api/Guests/:id
// @desc    Get single Guest by id
// @access  Public
router.get('/:id', getGuestById);

// @route   POST api/Guests
// @desc    Add/save Guest
// @access  Public
router.post('/', addGuest);

// @route   PUT api/Guests/:id
// @desc    Update Guest by id
// @access  Public
router.put('/:id', updateGuest);

// @route   DELETE api/Guests/:id
// @desc    Delete Guest by id
// @access  Public
router.delete('/:id', deleteGuest);

export default router;
