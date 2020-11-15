const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        unique: true,
        trim: true,
        maxlength: [75, `Name cannot be more than ${this.maxlength} characters`]
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        unique: true,
        trim: true,
        maxlength: [75, `Name cannot be more than ${this.maxlength} characters`]
    }

})