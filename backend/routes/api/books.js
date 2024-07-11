import express from 'express';
const router = express.Router();

import {
    testRoute,
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
} from '../../controllers/bookController.js';

// @route   GET api/books/test
// @desc    Tests books route
// @access  Public
router.get('/test', testRoute);

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', getAllBooks);

// @route   GET api/books/:id
// @desc    Get single book by id
// @access  Public
router.get('/:id', getBookById);

// @route   POST api/books
// @desc    Add/save book
// @access  Public
router.post('/', addBook);

// @route   PUT api/books/:id
// @desc    Update book by id
// @access  Public
router.put('/:id', updateBook);

// @route   DELETE api/books/:id
// @desc    Delete book by id
// @access  Public
router.delete('/:id', deleteBook);

export default router;
