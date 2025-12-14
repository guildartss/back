const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
  mark: { type: String, required: true },
  stock: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  imageUrl: { type: String, default: 'no-image.jpg' },
}, { timestamps: true }); //timestamps para hacer el crud
module.exports = mongoose.model('Product', productSchema) ;