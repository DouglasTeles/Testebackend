const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    nameCategory: {
        type:'String',
        required: true
    }

})
module.exports = mongoose.model('Category', Schema)