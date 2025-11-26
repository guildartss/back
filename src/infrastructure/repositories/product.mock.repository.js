class ProductMockRepository {
    constructor() { this.products = []; }
    async getAll() { return this.products; }
    async create(productData) {
        const newProduct = { ...productData, id: Date.now() };
        this.products.push(newProduct);
        return newProduct;
    }
}
module.exports = ProductMockRepository;