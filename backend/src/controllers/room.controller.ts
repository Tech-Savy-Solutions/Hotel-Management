// Import necessary modules
import Room from '../models/room.model'; // Assuming Room model is defined

// @desc    Tests Room route
// @route   GET api/rooms/test
// @access  Public
export const testRoute = (req:any, res:any) => {
    res.send('Room route testing!');
};

// @desc    Get all Rooms
// @route   GET api/rooms
// @access  Public
export const getAllRooms = (req:any, res:any) => {
    Room.find()
        .then((rooms) => res.json(rooms))
        .catch((err) =>
            res
                .status(404)
                .json({ noRoomsFound: 'No Rooms found' })
        );
};

// @desc    Get single Room by id
// @route   GET api/rooms/:id
// @access  Public
export const getRoomById = (req:any, res:any) => {
    Room.findById(req.params.id)
        .then((room) => {
            if (!room) {
                return res
                    .status(404)
                    .json({ noRoomFound: 'No Room found' });
            }

            res.json(room);
        })
        .catch((err) =>
            res.status(404).json({ noRoomFound: 'No Room found' })
        );
};

// @desc    Add/save Room
// @route   POST api/rooms
// @access  Public
export const addRoom = (req:any, res:any) => {
    Room.create(req.body)
        .then((room) =>
            res.json({ msg: 'Room added successfully', room })
        )
        .catch((err) =>
            res
                .status(400)
                .json({ error: 'Unable to add this Room', err })
        );
};

// @desc    Update Room by id
// @route   PUT api/rooms/:id
// @access  Public
export const updateRoom = (req:any, res:any) => {
    Room.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((room) => {
            if (!room) {
                return res.status(404).json({ error: 'Room not found' });
            }

            res.json({ msg: 'Updated successfully', room });
        })
        .catch((err) =>
            res
                .status(400)
                .json({ error: 'Unable to update the Database', err })
        );
};

// @desc    Delete Room by id
// @route   DELETE api/rooms/:id
// @access  Public
export const deleteRoom = (req:any, res:any) => {
    Room.findByIdAndDelete(req.params.id)
        .then((room) => {
            if (!room) {
                return res.status(404).json({ error: 'Room not found' });
            }

            res.json({ msg: 'Room deleted successfully' });
        })
        .catch((err) =>
            res.status(404).json({ error: 'No such a Room', err })
        );
};
