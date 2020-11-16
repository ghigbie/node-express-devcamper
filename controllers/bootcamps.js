const Colors = require('colors');
const Bootcamp = require('../models/Bootcamp');

// @desc  Get all bootcamps
// @route  GET /api/vi/bootcamp
// @access Public
exports.getBootcamps = async (req, res, next) => {
    try{
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true, 
            count: bootcamps.length,
            data: bootcamps, 
        })
    }catch (err){
        res.status(400).json({success: false});
    }
}


// @desc  Get single bootcamp
// @route  GET /api/vi/bootcamp/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
    console.log(req.params.id);
    try{
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
         return res.status(400).json({success: false}) 
        }
        res.status(200).json({
            success: true, 
            data: bootcamp, 
        });
    }catch (err){
        res.status(400).json({success: false, badID: req.params.id});
    }
        
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
exports.updateBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if(!bootcamp){
            return res.status(400).json({success: false, id: req.params.id})
        }

        res.status(200).json({success: true, data: bootcamp});

    }catch (err){
        res.status(400).json({success: false, id: req.params.id})
    }
}

// @desc   Delete  bootcamp 
// @route  DELETE /api/vi/bootcamp/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamp){
            return res.status(400).json({success: false, id: req.params.id})
        }

        res.status(200).json({success: true, data: {}});

    }catch (err){
        res.status(400).json({success: false, id: {}})
    }
}