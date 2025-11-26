class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    getAll = async (req, res) => {
        const products = await this.productService.getAll();
        res.status(200).json(products);
    };
    create = async (req, res) => {
        const product = await this.productService.create(req.body);
        res.status(201).json(product);
    };
}
module.exports = ProductController;