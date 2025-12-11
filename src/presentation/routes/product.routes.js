const { Router } = require('express');
const ProductController = require('../controller/product.controller');
const ProductService = require('../../application/use-cases/product.service');
//const ProductMockRepository = require('../../infrastructure/repositories/product.mock.repository');
//const productRepository = new ProductMockRepository();
const ProductMongoRepository = require('../../infrastructure/repositories/database/mongo/product.mongo.repository');
const authenticateToken = require('../middlewares/auth.middleware');
const isAdmin = require('../middlewares/admin.middleware');

const productRepository = new ProductMongoRepository();

const productService = new ProductService(productRepository);
const productController = new ProductController(productService);
const router = Router();

router.get('/', productController.getAll);
router.get('/:id', productController.getByID);
router.post('/', [authenticateToken, isAdmin], productController.create);
router.put('/:id', [authenticateToken, isAdmin], productController.update);
router.delete('/:id', [authenticateToken, isAdmin], productController.delete);
module.exports = router;
