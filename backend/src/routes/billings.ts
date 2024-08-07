import express from 'express';

const router = express.Router();

import {
    testRoute,
    getAllBillings,
    getBillingById,
    addBilling,
    updateBilling,
    deleteBilling,
} from '../controllers/billing.controller'; // Adjust path as per your project structure

import { ROUTE_PATHS } from '../constants/app.constants';
import { verifyToken } from '../middlewares/auth.middleware';

const { TEST, GET_ALL, GET_BY_ID, ADD, UPDATE, DELETE } = ROUTE_PATHS;

// @route   GET api/billings/test
// @desc    Tests Billing route
// @access  Public
router.get(TEST, verifyToken, testRoute);

// @route   GET api/billings
// @desc    Get all Billings
// @access  Public
router.get(GET_ALL, verifyToken, getAllBillings);

// @route   GET api/billings/:id
// @desc    Get single Billing by id
// @access  Public
router.get(GET_BY_ID, verifyToken, getBillingById);

// @route   POST api/billings
// @desc    Add/save Billing
// @access  Public
router.post(ADD, verifyToken, addBilling);

// @route   PUT api/billings/:id
// @desc    Update Billing by id
// @access  Public
router.put(UPDATE, verifyToken, updateBilling);

// @route   DELETE api/billings/:id
// @desc    Delete Billing by id
// @access  Public
router.delete(DELETE, verifyToken, deleteBilling);

export default router;
