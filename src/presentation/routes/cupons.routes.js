const { Router } = require('express');
const CuponsController = require('../controller/cupons.controller');
const CuponsService = require('../../application/use-cases/cupons.service');
const CuponsMongoRepository = require('../../infrastructure/repositories/database/mongo/cupons.mongo.repository');
const authenticateToken = require('../middlewares/auth.middleware');
const isAdmin = require('../middlewares/admin.middleware');
const asyncHandler = require('../utils/async.handler');

const cuponsRepository = new CuponsMongoRepository();
const cuponsService = new CuponsService(cuponsRepository);
const cuponsController = new CuponsController(cuponsService);

const router = Router();

router.get('/', asyncHandler(cuponsController.getAll));
router.get('/:id', asyncHandler(cuponsController.getById));
router.post('/', [authenticateToken, isAdmin], asyncHandler(cuponsController.create));
router.put('/:id', [authenticateToken, isAdmin], asyncHandler(cuponsController.update));
router.delete('/:id', [authenticateToken, isAdmin], asyncHandler(cuponsController.delete));

module.exports = router;