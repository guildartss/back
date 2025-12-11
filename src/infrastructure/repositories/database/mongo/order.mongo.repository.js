const OrderRepository = require("../../../../domain/repositories/order.repository.interface.js");
const OrderModel = require("./models/order.model.js");

class OrderMongoRepository extends OrderRepository {

    async create(orderData) {
        return OrderModel.create(orderData);
    }

    async getAll() {
        return OrderModel.find();
    }

    async getById(id) {
        return OrderModel.findById(id);
    }

    async update(id, data) {
        return OrderModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return OrderModel.findByIdAndDelete(id);
    }
}
module.exports = OrderMongoRepository;