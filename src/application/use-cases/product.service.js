class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async getAllProducts() {
        return this.productRepository.getAll();
    }
    async getProduct(productData) {
        return this.productRepository.create(productData);
    }
}
module.exports = ProductService;