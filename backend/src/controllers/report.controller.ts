import Report from '../models/report.model';

// @desc    Tests Report route
// @route   GET api/Report/test
// @access  Public
export const testRoute = (req: any, res: any) =>
    res.send('Report route testing!');

// @desc    Get all Report
// @route   GET api/Report
// @access  Public
export const getAllReports = (req: any, res: any) => {
    Report.find()
        .then((Report) => res.json(Report))
        .catch((err) =>
            res.status(404).json({ noReportfound: 'No Report found' })
        );
};

// @desc    Get single Report by id
// @route   GET api/Report/:id
// @access  Public
export const getReportById = (req: any, res: any) => {
    Report.findById(req.params.id)
        .then((Report) => res.json(Report))
        .catch((err) =>
            res.status(404).json({ noReportfound: 'No Report found' })
        );
};

// @desc    Add/save Report
// @route   ReportT api/Report
// @access  Public
export const addReport = (req: any, res: any) => {
    Report.create(req.body)
        .then((Report) => res.json({ msg: 'Report added successfully' }))
        .catch((err) => {
            console.log('err', err);

            res.status(400).json({ error: 'Unable to add this Report', err });
        });
};

// @desc    Update Report by id
// @route   PUT api/Report/:id
// @access  Public
export const updateReport = (req: any, res: any) => {
    Report.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((Report) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
};

// @desc    Delete Report by id
// @route   DELETE api/Report/:id
// @access  Public
export const deleteReport = (req: any, res: any) => {
    Report.findByIdAndDelete(req.params.id)
        .then((Report) =>
            res.json({ msg: 'Report entry deleted successfully' })
        )
        .catch((err) => {
            console.error(err);
            res.status(404).json({ error: 'No such a Report' });
        });
};
