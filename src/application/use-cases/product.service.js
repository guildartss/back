//const ProductRepository = require('../../infrastructure/repositories/product.repository');
const Product = require('../../domain/entities/product.entity');    
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async getAllProducts() {
        return this.productRepository.getAll();
    }
    async getProductByID(id) {
        return this.productRepository.getByID(id);
    }
    async createProduct(productData) {
        const productEntity = new Product(
            null,
            productData.name,
            productData.price,
            productData.description,
            productData.stock,
            productData.category,
            productData.imageUrl
        );
        return this.productRepository.create(productEntity);
    }
    async updateProduct(id, productData) {
        const productEntity = new Product(
            id,
            productData.name,
            productData.price,
            productData.description,
            productData.stock,
            productData.category,
            productData.imageUrl
        );
        return this.productRepository.update(id, productEntity);
    }
    async deleteProduct (id) {
        return this.productRepository.delete(id);
    }
}
module.exports = ProductService;