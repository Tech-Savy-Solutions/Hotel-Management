import express from 'express';

import connectDB from './config/db';

import dotenv from 'dotenv';

import cors from 'cors';

import bodyParser from 'body-parser';

import users from './routes/users';

import roles from './routes/roles';

import guests from './routes/guests';

import rooms from './routes/rooms';

import reservations from './routes/reservations';
import { BASE_PATH, END_POINTS } from './constants/app.constants';

// Load environment variables from .env file
dotenv.config();

// Debugging line to ensure environment variables are loaded

const app = express();

// Connect to the database

app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/books path
app.use(`${BASE_PATH}/${END_POINTS.USERS}`, users);
app.use(`${BASE_PATH}/${END_POINTS.ROLES}`, roles);
app.use(`${BASE_PATH}/${END_POINTS.GUESTS}`, guests);
app.use(`${BASE_PATH}/${END_POINTS.RESERVATIONS}`, reservations);
app.use(`${BASE_PATH}/${END_POINTS.ROOMS}`, rooms);

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

connectDB().then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
);
