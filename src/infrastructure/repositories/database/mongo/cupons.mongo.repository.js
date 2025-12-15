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
        return new Cupons({
            id: savedCupons._id.toString(),
            code: savedCupons.code,
            type: savedCupons.type,
            value: savedCupons.value,
            minPurchaseAmount: savedCupons.minPurchaseAmount,
            expireDate: savedCupons.expireDate,
            active: savedCupons.active
        });
    }
    
    async getAll() {
        const cupons = await CuponsModel.find();
        return cupons.map(c => new Cupons({
            id: c._id.toString(),
            code: c.code,
            type: c.type,
            value: c.value,
            minPurchaseAmount: c.minPurchaseAmount,
            expireDate: c.expireDate,
            active: c.active
        }));
    }
    
    async getById(id) {
        const cupons = await CuponsModel.findById(id);
        if (!cupons) return null;
        return new Cupons({
            id: cupons._id.toString(),
            code: cupons.code,
            type: cupons.type,
            value: cupons.value,
            minPurchaseAmount: cupons.minPurchaseAmount,
            expireDate: cupons.expireDate,
            active: cupons.active
        });
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
        return new Cupons({
            id: updatedCupons._id.toString(),
            code: updatedCupons.code,
            type: updatedCupons.type,
            value: updatedCupons.value,
            minPurchaseAmount: updatedCupons.minPurchaseAmount,
            expireDate: updatedCupons.expireDate,
            active: updatedCupons.active
        });
    }
    
    async delete(id) {
        await CuponsModel.findByIdAndDelete(id);
    }
}
module.exports = CuponsMongoRepository;
