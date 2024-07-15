import role from '../models/role.js';

// @desc    Tests roles route
// @route   GET api/roles/test
// @access  Public
export const testRoute = (req, res) => res.send('role route testing!');

// @desc    Get all roles
// @route   GET api/roles
// @access  Public
export const getAllRoles = (req, res) => {
    role.find()
        .then((roles) => res.json(roles))
        .catch((err) =>
            res.status(404).json({ norolesfound: 'No roles found' })
        );
};

// @desc    Get single role by id
// @route   GET api/roles/:id
// @access  Public
export const getRoleById = (req, res) => {
    role.findById(req.params.id)
        .then((role) => res.json(role))
        .catch((err) => res.status(404).json({ norolefound: 'No role found' }));
};

// @desc    Add/save role
// @route   POST api/roles
// @access  Public
export const addRole = (req, res) => {
    role.create(req.body)
        .then((role) => res.json({ msg: 'role added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this role', err })
        );
};

// @desc    Update role by id
// @route   PUT api/roles/:id
// @access  Public
export const updateRole = (req, res) => {
    role.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((role) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
};

// @desc    Delete role by id
// @route   DELETE api/roles/:id
// @access  Public
export const deleteRole = (req, res) => {
    role.findByIdAndDelete(req.params.id)
        .then((role) => res.json({ msg: 'role entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such a role' }));
};
