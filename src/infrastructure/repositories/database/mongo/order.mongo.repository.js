const OrderRepository = require("../../../../domain/repositories/order.repository.interface.js");
const OrderModel = require("./models/order.model.js");
const Order = require("../../../../domain/entities/order.entity.js");

class OrderMongoRepository extends OrderRepository {
    async create(orderEntity) {
        const newOrder = new OrderModel({
            userId: orderEntity.userId,
            products: orderEntity.products,
            totalAmount: orderEntity.totalAmount,
            status: orderEntity.status
        });
        const savedOrder = await newOrder.save();
        return new Order(savedOrder._id.toString(), savedOrder.userId, savedOrder.products, savedOrder.totalAmount, savedOrder.status);
    }

    async getAll() {
        const orders = await OrderModel.find();
        return orders.map(order => new Order(order._id.toString(), order.userId, order.products, order.totalAmount, order.status));
    }

    async getById(id) {
        const order = await OrderModel.findById(id);
        if (!order) return null;
        return new Order(order._id.toString(), order.userId, order.products, order.totalAmount, order.status);
    }

    async update(id, orderEntity) {
        const updatedOrder = await OrderModel.findByIdAndUpdate(id, {
            userId: orderEntity.userId,
            products: orderEntity.products,
            totalAmount: orderEntity.totalAmount,
            status: orderEntity.status
        }, { new: true });
        if (!updatedOrder) return null;
        return new Order(updatedOrder._id.toString(), updatedOrder.userId, updatedOrder.products, updatedOrder.totalAmount, updatedOrder.status);
    }

    async delete(id) {
        await OrderModel.findByIdAndDelete(id);
    }
}
module.exports = OrderMongoRepository;