import Pos from '../models/pos.model';

// @desc    Tests Pos route
// @route   GET api/Pos/test
// @access  Public
export const testRoute = (req: any, res: any) => res.send('Pos route testing!');

// @desc    Get all Pos
// @route   GET api/Pos
// @access  Public
export const getAllPos = (req: any, res: any) => {
    Pos.find()
        .then((Pos) => res.json(Pos))
        .catch((err) => res.status(404).json({ noPosfound: 'No Pos found' }));
};

// @desc    Get single Pos by id
// @route   GET api/Pos/:id
// @access  Public
export const getPosById = (req: any, res: any) => {
    Pos.findById(req.params.id)
        .then((Pos) => res.json(Pos))
        .catch((err) => res.status(404).json({ noPosfound: 'No Pos found' }));
};

// @desc    Add/save Pos
// @route   POST api/Pos
// @access  Public
export const addPos = (req: any, res: any) => {
    Pos.create(req.body)
        .then((Pos) => res.json({ msg: 'Pos added successfully' }))
        .catch((err) => {
            console.log('err', err);

            res.status(400).json({ error: 'Unable to add this Pos', err });
        });
};

// @desc    Update Pos by id
// @route   PUT api/Pos/:id
// @access  Public
export const updatePos = (req: any, res: any) => {
    Pos.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((Pos) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
};

// @desc    Delete Pos by id
// @route   DELETE api/Pos/:id
// @access  Public
export const deletePos = (req: any, res: any) => {
    Pos.findByIdAndDelete(req.params.id)
        .then((Pos) => res.json({ msg: 'Pos entry deleted successfully' }))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ error: 'No such a Pos' });
        });
};
