const { Router } = require('express');
const UserController = require('../controller/user.controller');
const UserService = require('../../application/use-cases/user.service');
const UserMongoRepository = require('../../infrastructure/repositories/database/mongo/user.mongo.repository');
const RoleMongoRepository = require('../../infrastructure/repositories/database/mongo/role.mongo.repository');
const asyncHandler = require('../utils/async.handler');
const authenticateToken = require('../middlewares/auth.middleware');
const isAdmin = require('../middlewares/admin.middleware');

const userRepository = new UserMongoRepository();
const roleRepository = new RoleMongoRepository();
const userService = new UserService(userRepository, roleRepository);
const userController = new UserController(userService);

const router = Router();
router.get('/', asyncHandler(userController.getAll));
router.get('/:id', asyncHandler(userController.getById));
router.post('/', [authenticateToken, isAdmin], asyncHandler(userController.create));
router.put('/:id', [authenticateToken, isAdmin], asyncHandler(userController.update));
router.delete('/:id', [authenticateToken, isAdmin], asyncHandler(userController.delete));

module.exports = router;
