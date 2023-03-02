const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    pokemon: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: String
})