class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async getAll() {
        return this.productRepository.getAll();
    }
    async create(productData) {
        return this.productRepository.create(productData);
    }
}
module.exports = ProductService;