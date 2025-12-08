const ProductRepository = require('../../../../domain/repositories/product.repository.interface');
const ProductModel = require('./models/product.model');
const Product = require('../../../../domain/entities/product.entity');

class ProductMongoRepository extends ProductRepository {
  async getAll() {
    const products = await ProductModel.find();
    return products.map(p => new Product(p._id.toString(), p.name, p.price, p.description, p.stock, p.category, p.imageUrl));
  }
  async getByID(id) {
    const product = await ProductModel.findById(id);
    if(!product) return null;
    return new Product(product._id.toString(), product.name, product.price, product.description, product.stock, product.category, product.imageUrl);
  }
  async create(productEntity) {
    const newProduct = new ProductModel({
      name: productEntity.name,
      price: productEntity.price,
      description: productEntity.description,
      stock: productEntity.stock,
      category: productEntity.category,
      imageUrl: productEntity.imageUrl  
    });
    const savedProduct = await newProduct.save();
    return new Product(savedProduct._id.toString(), savedProduct.name, savedProduct.price, savedProduct.description, savedProduct.stock, savedProduct.category, savedProduct.imageUrl);
  }
  async update(id, productEntity) {
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, {
      name: productEntity.name,
      price: productEntity.price,
      description: productEntity.description,
      stock: productEntity.stock,
      category: productEntity.category,
      imageUrl: productEntity.imageUrl  
    }, { new: true });
    if (!updatedProduct) return null;
    return new Product(updatedProduct._id.toString(), updatedProduct.name, updatedProduct.price, updatedProduct.description, updatedProduct.stock, updatedProduct.category, updatedProduct.imageUrl);
  }
  async delete(id) {
    await ProductModel.findByIdAndDelete(id);
  }
}

module.exports = ProductMongoRepository;