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

// @route   GET api/Roles/test
// @desc    Tests Roles route
// @access  Public
router.get('/test', testRoute);

// @route   GET api/Roles
// @desc    Get all Roles
// @access  Public
router.get('/', getAllRoles);

// @route   GET api/Roles/:id
// @desc    Get single Role by id
// @access  Public
router.get('/:id', getRoleById);

// @route   POST api/Roles
// @desc    Add/save Role
// @access  Public
router.post('/', addRole);

// @route   PUT api/Roles/:id
// @desc    Update Role by id
// @access  Public
router.put('/:id', updateRole);

// @route   DELETE api/Roles/:id
// @desc    Delete Role by id
// @access  Public
router.delete('/:id', deleteRole);

export default router;
