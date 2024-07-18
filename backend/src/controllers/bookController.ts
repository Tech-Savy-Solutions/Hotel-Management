import Book from '../models/book';

// @desc    Tests books route
// @route   GET api/books/test
// @access  Public
export const testRoute = (req:any, res:any) => res.send('book route testing!');

// @desc    Get all books
// @route   GET api/books
// @access  Public
export const getAllBooks = (req:any, res:any) => {
    Book.find()
        .then((books) => res.json(books))
        .catch((err) =>
            res.status(404).json({ nobooksfound: 'No Books found' })
        );
};

// @desc    Get single book by id
// @route   GET api/books/:id
// @access  Public
export const getBookById = (req:any, res:any) => {
    Book.findById(req.params.id)
        .then((book) => res.json(book))
        .catch((err) => res.status(404).json({ nobookfound: 'No Book found' }));
};

// @desc    Add/save book
// @route   POST api/books
// @access  Public
export const addBook = (req:any, res:any) => {
    Book.create(req.body)
        .then((book) => res.json({ msg: 'Book added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this book' })
        );
};

// @desc    Update book by id
// @route   PUT api/books/:id
// @access  Public
export const updateBook = (req:any, res:any) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((book) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
};

// @desc    Delete book by id
// @route   DELETE api/books/:id
// @access  Public
export const deleteBook = (req:any, res:any) => {
    Book.findByIdAndDelete(req.params.id)
        .then((book) => res.json({ msg: 'Book entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such a book' }));
};
