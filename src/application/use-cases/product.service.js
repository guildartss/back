//const ProductRepository = require('../../infrastructure/repositories/product.repository');
const Product = require('../../domain/entities/product.entity');    
const { notFoundError } = require('../../domain/errors');

class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async getAllProducts() {
        return this.productRepository.getAll();
    }
    async getProductById(id) {
        const product = await this.productRepository.getById(id);
        if (!product) {
            throw new notFoundError(`product with id ${id} not found`);
        }
        return product;
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
        const existingProduct = await this.productRepository.getById(id);
        if (!existingProduct) {
            throw new notFoundError(`product with id ${id} not found`);
        }
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
        const product = await this.productRepository.getById(id);
        if (!product) {
            throw new notFoundError(`product with id ${id} not found`);
        }
        return this.productRepository.delete(id);
    }
}
module.exports = ProductService;