const Coupon = require("../../domain/entities/cupons.entity");
const { notFoundError } = require("../../domain/errors");

class CuponsService {
    constructor(cuponsRepository) {
        this.cuponsRepository = cuponsRepository;
    }
async createCupon(cuponsData) {
    const cuponEntity = new Coupon(
        null,
        cuponsData.code,
        cuponsData.type,
        cuponsData.value,
        cuponsData.minPurchaseAmount,
        cuponsData.expireDate,
        cuponsData.active
    );
    return this.cuponsRepository.create(cuponEntity);
}
async getAllCupons() {
    const cupons = await this.cuponsRepository.getAll();
    if (!cupons) {
        throw notFoundError('Cupons not found');
    }
    return cupons;
}
async getCuponById(id) {
    const cupon = await this.cuponsRepository.getById(id);
    if (!cupon) {
        throw notFoundError('Cupon not found');
    }
    return cupon;
}
async updateCupon(id, cuponsData) {
    const cuponEntity = new Coupon(
        id,
        cuponsData.code,
        cuponsData.type,
        cuponsData.value,
        cuponsData.minPurchaseAmount,
        cuponsData.expireDate,
        cuponsData.active
    );
    return this.cuponsRepository.update(id, cuponEntity);
}
async deleteCupon(id) {
    const cupon = await this.cuponsRepository.getById(id);
    if (!cupon) {
        throw notFoundError('Cupon not found');
    }
    return this.cuponsRepository.delete(id);
}
}
module.exports = CuponsService;
