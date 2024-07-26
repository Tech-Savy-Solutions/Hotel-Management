// Import necessary modules
import Billing from '../models/billing.model'; // Assuming Billing model is defined

// @desc    Tests Billing route
// @route   GET api/billings/test
// @access  Public
export const testRoute = (req: any, res: any) => {
    res.send('Billing route testing!');
};

// @desc    Get all Billings
// @route   GET api/billings
// @access  Public
export const getAllBillings = (req: any, res: any) => {
    Billing.find()
        .then((billings) => res.json(billings))
        .catch((err) =>
            res.status(404).json({ noBillingsFound: 'No Billings found' })
        );
};

// @desc    Get single Billing by id
// @route   GET api/billings/:id
// @access  Public
export const getBillingById = (req: any, res: any) => {
    Billing.findById(req.params.id)
        .then((billing) => {
            if (!billing) {
                return res
                    .status(404)
                    .json({ noBillingFound: 'No Billing found' });
            }

            res.json(billing);
        })
        .catch((err) =>
            res.status(404).json({ noBillingFound: 'No Billing found' })
        );
};

// @desc    Add/save Billing
// @route   POST api/billings
// @access  Public
export const addBilling = (req: any, res: any) => {
    Billing.create(req.body)
        .then((billing) =>
            res.json({ msg: 'Billing added successfully', billing })
        )
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this Billing', err })
        );
};

// @desc    Update Billing by id
// @route   PUT api/billings/:id
// @access  Public
export const updateBilling = (req: any, res: any) => {
    Billing.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((billing) => {
            if (!billing) {
                return res.status(404).json({ error: 'Billing not found' });
            }

            res.json({ msg: 'Updated successfully', billing });
        })
        .catch((err) =>
            res
                .status(400)
                .json({ error: 'Unable to update the Database', err })
        );
};

// @desc    Delete Billing by id
// @route   DELETE api/billings/:id
// @access  Public
export const deleteBilling = (req: any, res: any) => {
    Billing.findByIdAndDelete(req.params.id)
        .then((billing) => {
            if (!billing) {
                return res.status(404).json({ error: 'Billing not found' });
            }

            res.json({ msg: 'Billing deleted successfully' });
        })
        .catch((err) =>
            res.status(404).json({ error: 'No such a Billing', err })
        );
};
