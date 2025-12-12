const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },

    items: [{
        productId: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true }
    }],

    total: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);