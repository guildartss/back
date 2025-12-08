class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    getAll = async (req, res) => {
        const products = await this.productService.getAllProducts();
        res.status(200).json(products);
    };
    getByID = async (req, res) => {
        const {id} = req.params;
        const product = await this.productService.getProductByID(id);
        if (product){
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    create = async (req, res) => {
        const product = await this.productService.createProduct(req.body);
        res.status(201).json(product);
    }
    update = async (req, res) => {
        const {id} = req.params;
        const product = await this.productService.updateProduct(id, req.body);
        if (product){
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    delete = async (req, res) => {
        const  {id} = req.params;
        await this.productService.deleteProduct(id);
        res.status(204).send();
    }
}
module.exports = ProductController;