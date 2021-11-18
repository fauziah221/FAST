const mongoose = require('mongoose');

const ExerciseSchema = mongoose.Schema({
    exersice: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    Duration: {
        type: Number,
    },
    Details: {
        type: String
    }
});

module.exports = mongoose.model('ExercisePost', ExerciseSchema)