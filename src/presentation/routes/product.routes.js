const { Router } = require('express');
const ProductController = require('../controller/product.controller');
const ProductService = require('../../application/use-cases/product.service');
//const ProductMockRepository = require('../../infrastructure/repositories/product.mock.repository');
//const productRepository = new ProductMockRepository();
const ProductMongoRepository = require('../../infrastructure/repositories/database/mongo/product.mongo.repository');
const productRepository = new ProductMongoRepository();

const productService = new ProductService(productRepository);
const productController = new ProductController(productService);
const router = Router();

router.get('/', productController.getAll);
router.get('/:id', productController.getByID);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
module.exports = router;
