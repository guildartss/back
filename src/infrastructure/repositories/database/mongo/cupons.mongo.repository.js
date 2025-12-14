const CuponsRepository = require('../../../../domain/repositories/cupons.repository.interface');
const CuponsModel = require('./models/cupons.model');
const Cupons = require('../../../../domain/entities/cupons.entity');

class CuponsMongoRepository extends CuponsRepository {
    async create(cuponsEntity) {
        const newCupons = new CuponsModel({
            code: cuponsEntity.code,
            type: cuponsEntity.type,
            value: cuponsEntity.value,
            minPurchaseAmount: cuponsEntity.minPurchaseAmount,
            expireDate: cuponsEntity.expireDate,
            active: cuponsEntity.active
        });
        const savedCupons = await newCupons.save();
        return new Cupons(savedCupons._id.toString(), savedCupons.code, savedCupons.type, savedCupons.value, savedCupons.minPurchaseAmount, savedCupons.expireDate, savedCupons.active);
    }
    
    async getAll() {
        const cupons = await CuponsModel.find();
        return cupons.map(c => new Cupons(c._id.toString(), c.code, c.type, c.value, c.minPurchaseAmount, c.expireDate, c.active));
    }
    
    async getById(id) {
        const cupons = await CuponsModel.findById(id);
        if (!cupons) return null;
        return new Cupons(cupons._id.toString(), cupons.code, cupons.type, cupons.value, cupons.minPurchaseAmount, cupons.expireDate, cupons.active);
    }
    
    async update(id, cuponsEntity) {
        const updatedCupons = await CuponsModel.findByIdAndUpdate(id, {
            code: cuponsEntity.code,
            type: cuponsEntity.type,
            value: cuponsEntity.value,
            minPurchaseAmount: cuponsEntity.minPurchaseAmount,
            expireDate: cuponsEntity.expireDate,
            active: cuponsEntity.active
        }, { new: true });
        if (!updatedCupons) return null;
        return new Cupons(updatedCupons._id.toString(), updatedCupons.code, updatedCupons.type, updatedCupons.value, updatedCupons.minPurchaseAmount, updatedCupons.expireDate, updatedCupons.active);
    }
    
    async delete(id) {
        await CuponsModel.findByIdAndDelete(id);
    }
}
module.exports = CuponsMongoRepository;
