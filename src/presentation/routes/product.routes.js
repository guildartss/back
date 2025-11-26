const { Router } = require('express'); 
const ProductController = require('../controller/product.controller');
const ProductService = require('../../application/use-cases/product.service');
const ProductMockRepository = require('../../infrastructure/repositories/product.mock.repository');
const productRepository = new ProductMockRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);
const router = Router();

router.get('/products', productController.getAll);
router.post('/products', productController.create);
module.exports = router;
