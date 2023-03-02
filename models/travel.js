const mongoose = require('mongoose')

const travelSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    // price: {
    //     type: Number,
    //     min: 1
    // },
    type: {
        type: String,
        required: true,
        enum: ['hotels', "airbnb", 'hostels']
    }
})
module.exports = mongoose.model('travel', travelSchema)