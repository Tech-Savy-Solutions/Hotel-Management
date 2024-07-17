import Guest from '../models/guest.model.js';

// @desc    Tests Guests route
// @route   GET api/Guests/test
// @access  Public
export const testRoute = (req, res) => res.send('Guest route testing!');

// @desc    Get all Guests
// @route   GET api/Guests
// @access  Public
export const getAllGuests = (req, res) => {
    Guest.find()
        .then((Guests) => res.json(Guests))
        .catch((err) =>
            res.status(404).json({ noGuestsfound: 'No Guest found' })
        );
};

// @desc    Get single Guest by id
// @route   GET api/Guests/:id
// @access  Public
export const getGuestById = (req, res) => {
    Guest.findById(req.params.id)
        .then((Guest) => res.json(Guest))
        .catch((err) =>
            res.status(404).json({ noGuestsfound: 'No Guest found' })
        );
};

// @desc    Add/save Guest
// @route   POST api/Guests
// @access  Public
export const addGuest = (req, res) => {
    Guest.create(req.body)
        .then((Guest) => res.json({ msg: 'Guest added successfully' }))
        .catch((err) => {
            console.log('err', err);

            res.status(400).json({ error: 'Unable to add this Guest', err });
        });
};

// @desc    Update Guest by id
// @route   PUT api/Guests/:id
// @access  Public
export const updateGuest = (req, res) => {
    Guest.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((Guest) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
};

// @desc    Delete Guest by id
// @route   DELETE api/Guests/:id
// @access  Public
export const deleteGuest = (req, res) => {
    Guest.findByIdAndDelete(req.params.id)
        .then((Guest) => res.json({ msg: 'Guest entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such a Guest' }));
};
