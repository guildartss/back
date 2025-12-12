const { Router } = require('express');
const ProductController = require('../controller/product.controller');
const ProductService = require('../../application/use-cases/product.service');
//const ProductMockRepository = require('../../infrastructure/repositories/product.mock.repository');
//const productRepository = new ProductMockRepository();
const ProductMongoRepository = require('../../infrastructure/repositories/database/mongo/product.mongo.repository');
const authenticateToken = require('../middlewares/auth.middleware');
const isAdmin = require('../middlewares/admin.middleware');
const asyncHandler = require('../utils/async.handler');

const productRepository = new ProductMongoRepository();

const productService = new ProductService(productRepository);
const productController = new ProductController(productService);
const router = Router();

router.get('/', asyncHandler(productController.getAll));
router.get('/:id', asyncHandler(productController.getByID));
router.post('/', [authenticateToken, isAdmin], asyncHandler(productController.create));
router.put('/:id', [authenticateToken, isAdmin], asyncHandler(productController.update));
router.delete('/:id', [authenticateToken, isAdmin], asyncHandler(productController.delete));
module.exports = router;
