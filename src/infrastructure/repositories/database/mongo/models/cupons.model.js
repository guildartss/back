const mongoose = require('mongoose');

const cuponSchema = new mongoose.Schema({
    code: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
    minPurchaseAmount: { type: Number, required: true },
    expireDate: { type: Date, required: true },
    active: { type: Boolean, required: true }
});

module.exports = mongoose.model('Cupons', cuponSchema);