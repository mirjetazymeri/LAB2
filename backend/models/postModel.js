const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    countInStock: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);