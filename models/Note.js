const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [24, 'Title cannot be more than 24 characters'],
    },
    description: {
        type: String,
        required: true,
        maxlength: [244, 'This cannot be more than 244 characters'],
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);