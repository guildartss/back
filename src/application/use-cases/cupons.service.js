const Coupon = require("../../domain/entities/cupons.entity");
const { NotFoundError } = require("../../domain/errors");

class CuponsService {
    constructor(cuponsRepository) {
        this.cuponsRepository = cuponsRepository;
    }
async createCupon(cuponsData) {
    const cuponEntity = new Coupon({
        id: null,
        code: cuponsData.code,
        type: cuponsData.type,
        value: cuponsData.value,
        minPurchaseAmount: cuponsData.minPurchaseAmount,
        expireDate: cuponsData.expireDate,
        active: cuponsData.active
    });
    return this.cuponsRepository.create(cuponEntity);
}
async getAllCupons() {
    const cupons = await this.cuponsRepository.getAll();
    if (!cupons) {
        throw new NotFoundError('Cupons not found');
    }
    return cupons;
}
async getCuponById(id) {
    const cupon = await this.cuponsRepository.getById(id);
    if (!cupon) {
        throw new NotFoundError('Cupon not found');
    }
    return cupon;
}
async updateCupon(id, cuponsData) {
    const cuponEntity = new Coupon({
        id: id,
        code: cuponsData.code,
        type: cuponsData.type,
        value: cuponsData.value,
        minPurchaseAmount: cuponsData.minPurchaseAmount,
        expireDate: cuponsData.expireDate,
        active: cuponsData.active
    });
    return this.cuponsRepository.update(id, cuponEntity);
}
async deleteCupon(id) {
    const cupon = await this.cuponsRepository.getById(id);
    if (!cupon) {
        throw new NotFoundError('Cupon not found');
    }
    return this.cuponsRepository.delete(id);
}
}
module.exports = CuponsService;
