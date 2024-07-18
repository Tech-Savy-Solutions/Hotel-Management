import express from 'express';

const router = express.Router();

import {
    testRoute,
    getAllPos,
    getPosById,
    addPos,
    updatePos,
    deletePos,
} from '../controllers/pos.controller';

// @route   GET api/books/test
// @desc    Tests books route
// @access  Public
router.get('/test', testRoute);

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', getAllPos);

// @route   GET api/books/:id
// @desc    Get single book by id
// @access  Public
router.get('/:id', getPosById);

// @route   POST api/books
// @desc    Add/save book
// @access  Public
router.post('/', addPos);

// @route   PUT api/books/:id
// @desc    Update book by id
// @access  Public
router.put('/:id', updatePos);

// @route   DELETE api/books/:id
// @desc    Delete book by id
// @access  Public
router.delete('/:id', deletePos);

export default router;
