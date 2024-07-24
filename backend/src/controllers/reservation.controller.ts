// Import necessary modules
import { AnyBulkWriteOperation } from 'mongodb';
import Reservation from '../models/reservation.model'; // Assuming Reservation model is defined

// @desc    Tests Reservation route
// @route   GET api/reservations/test
// @access  Public
export const testRoute = (req: any, res: any) => {
    res.send('Reservation route testing!');
};

// @desc    Get all Reservations
// @route   GET api/reservations
// @access  Public
export const getAllReservations = (req: any, res: any) => {
    Reservation.find()
        .then((reservations) => res.json(reservations))
        .catch((err) =>
            res
                .status(404)
                .json({ noReservationsFound: 'No Reservations found' })
        );
};

// @desc    Get single Reservation by id
// @route   GET api/reservations/:id
// @access  Public
export const getReservationById = (req: any, res: any) => {
    Reservation.findById(req.params.id)
        .then((reservation) => {
            if (!reservation) {
                return res
                    .status(404)
                    .json({ noReservationFound: 'No Reservation found' });
            }

            res.json(reservation);
        })
        .catch((err) =>
            res.status(404).json({ noReservationFound: 'No Reservation found' })
        );
};

// @desc    Add/save Reservation
// @route   POST api/reservations
// @access  Public
export const addReservation = (req: any, res: any) => {
    Reservation.create(req.body)
        .then((reservation) =>
            res.json({ msg: 'Reservation added successfully', reservation })
        )
        .catch((err) =>
            res
                .status(400)
                .json({ error: 'Unable to add this Reservation', err })
        );
};

// @desc    Update Reservation by id
// @route   PUT api/reservations/:id
// @access  Public
export const updateReservation = (req: any, res: any) => {
    Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((reservation) => {
            if (!reservation) {
                return res.status(404).json({ error: 'Reservation not found' });
            }

            res.json({ msg: 'Updated successfully', reservation });
        })
        .catch((err) =>
            res
                .status(400)
                .json({ error: 'Unable to update the Database', err })
        );
};

// @desc    Delete Reservation by id
// @route   DELETE api/reservations/:id
// @access  Public
export const deleteReservation = (req: any, res: any) => {
    Reservation.findByIdAndDelete(req.params.id)
        .then((reservation) => {
            if (!reservation) {
                return res.status(404).json({ error: 'Reservation not found' });
            }

            res.json({ msg: 'Reservation deleted successfully' });
        })
        .catch((err) =>
            res.status(404).json({ error: 'No such a Reservation', err })
        );
};
