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
import { verifyToken } from '../middlewares/auth.middleware';

// @route   GET api/books/test
// @desc    Tests books route
// @access  Public
router.get('/test', verifyToken, testRoute);

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', verifyToken, getAllPos);

// @route   GET api/books/:id
// @desc    Get single book by id
// @access  Public
router.get('/:id', verifyToken, getPosById);

// @route   POST api/books
// @desc    Add/save book
// @access  Public
router.post('/', verifyToken, addPos);

// @route   PUT api/books/:id
// @desc    Update book by id
// @access  Public
router.put('/:id', verifyToken, updatePos);

// @route   DELETE api/books/:id
// @desc    Delete book by id
// @access  Public
router.delete('/:id', verifyToken, deletePos);

export default router;
