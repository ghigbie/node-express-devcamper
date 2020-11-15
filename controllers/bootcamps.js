const Colors = require('colors');
const Bootcamp = require('../models/Bootcamp');

// @desc  Get all bootcamps
// @route  GET /api/vi/bootcamp
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, message: 'Show all bootcamps' });
}


// @desc  Get single bootcamp
// @route  GET /api/vi/bootcamp/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: `Display bootcamp ${req.params.id}` });
}

// @desc   Create new bootcamp
// @route  POST /api/vi/bootcamp/
// @access Private
exports.createBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({ 
            success: true, 
            data: bootcamp,
        });
    }catch (err){
        res.status(400).json({success: false});
    }
}

// @desc   Update bootcamp 
// @route  PUT /api/vi/bootcamp/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: `Update bootcamp ${req.params.id}` });
}

// @desc   Delete  bootcamp 
// @route  DELETE /api/vi/bootcamp/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: `Deletebootcamp ${req.params.id}` });
}