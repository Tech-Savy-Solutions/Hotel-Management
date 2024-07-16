import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import books from './routes/books.js';
import users from './routes/users.js';
import roles from './routes/roles.js';
import guests from './routes/guests.js';

// Load environment variables from .env file
dotenv.config();

// Debugging line to ensure environment variables are loaded
console.log('process.env.DB_KEY:', process.env.DB_KEY);

const app = express();

// Connect to the database
connectDB();

app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/books path
app.use('/api/v1/users', users);
app.use('/api/v1/roles', roles);
app.use('/api/v1/guests', guests);


app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
