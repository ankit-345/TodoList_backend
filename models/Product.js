const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Item name must be provided']
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema);