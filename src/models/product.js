const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    title: {
        type:'String',
        required: true
    },
    description: {
        type:'String',
        required: true
    },
    price: {
        type:'Number',
    },
    category_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref:'Category',
        required: true
    }

})
module.exports = mongoose.model('Product', Schema)