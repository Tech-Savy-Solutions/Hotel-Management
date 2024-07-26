import express from 'express';

const router = express.Router();

import {
    testRoute,
    getAllReports,
    getReportById,
    addReport,
    updateReport,
    deleteReport,
} from '../controllers/report.controller'; // Adjust path as per your project structure

import { ROUTE_PATHS } from '../constants/app.constants';
import { verifyToken } from '../middlewares/auth.middleware';

const { TEST, GET_ALL, GET_BY_ID, ADD, UPDATE, DELETE } = ROUTE_PATHS;

// @route   GET api/reports/test
// @desc    Tests Reservation route
// @access  Public
router.get(TEST, verifyToken, testRoute);

// @route   GET api/reports
// @desc    Get all reports
// @access  Public
router.get(GET_ALL, verifyToken, getAllReports);

// @route   GET api/reports/:id
// @desc    Get single Reservation by id
// @access  Public
router.get(GET_BY_ID, verifyToken, getReportById);

// @route   POST api/reports
// @desc    Add/save Reservation
// @access  Public
router.post(ADD, verifyToken, addReport);

// @route   PUT api/reports/:id
// @desc    Update Reservation by id
// @access  Public
router.put(UPDATE, verifyToken, updateReport);

// @route   DELETE api/reports/:id
// @desc    Delete Reservation by id
// @access  Public
router.delete(DELETE, verifyToken, deleteReport);

export default router;
