import express from 'express';

const router = express.Router();

import {
    testRoute,
    getAllReservations,
    getReservationById,
    addReservation,
    updateReservation,
    deleteReservation,
} from '../controllers/reservation.controller'; // Adjust path as per your project structure

import { ROUTE_PATHS } from '../constants/app.constants';

const { TEST, GET_ALL, GET_BY_ID, ADD, UPDATE, DELETE } = ROUTE_PATHS;

// @route   GET api/reservations/test
// @desc    Tests Reservation route
// @access  Public
router.get(TEST, testRoute);

// @route   GET api/reservations
// @desc    Get all Reservations
// @access  Public
router.get(GET_ALL, getAllReservations);

// @route   GET api/reservations/:id
// @desc    Get single Reservation by id
// @access  Public
router.get(GET_BY_ID, getReservationById);

// @route   POST api/reservations
// @desc    Add/save Reservation
// @access  Public
router.post(ADD, addReservation);

// @route   PUT api/reservations/:id
// @desc    Update Reservation by id
// @access  Public
router.put(UPDATE, updateReservation);

// @route   DELETE api/reservations/:id
// @desc    Delete Reservation by id
// @access  Public
router.delete(DELETE, deleteReservation);

export default router;
