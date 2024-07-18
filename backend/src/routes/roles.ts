import express from 'express';

const router = express.Router();

import {
    testRoute,
    getAllRoles,
    getRoleById,
    addRole,
    updateRole,
    deleteRole,
} from '../controllers/role.controller.js';

import { ROUTE_PATHS } from '../constants/app.constants.js';

const { TEST, GET_ALL, GET_BY_ID, ADD, UPDATE, DELETE } = ROUTE_PATHS;

// @route   GET api/Roles/test
// @desc    Tests Roles route
// @access  Public
router.get(TEST, testRoute);

// @route   GET api/Roles
// @desc    Get all Roles
// @access  Public
router.get(GET_ALL, getAllRoles);

// @route   GET api/Roles/:id
// @desc    Get single Role by id
// @access  Public
router.get(GET_BY_ID, getRoleById);

// @route   POST api/Roles
// @desc    Add/save Role
// @access  Public
router.post(ADD, addRole);

// @route   PUT api/Roles/:id
// @desc    Update Role by id
// @access  Public
router.put(UPDATE, updateRole);

// @route   DELETE api/Roles/:id
// @desc    Delete Role by id
// @access  Public
router.delete(DELETE, deleteRole);

export default router;
