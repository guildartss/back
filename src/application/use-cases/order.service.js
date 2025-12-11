const Order = require('../../domain/entities/order.entity');

class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async create(orderData) {
        const orderEntity = new Order({
            id: null,
            customerName: orderData.customerName,
            items: orderData.items,
            total: orderData.total
        });
        return this.orderRepository.create(orderEntity);
    }

    async getAll() {
        return this.orderRepository.getAll();
    }

    async getById(id) {
        return this.orderRepository.getById(id);
    }

    async update(id, data) {
        const orderEntity = new Order({
            id,
            customerName: data.customerName,
            items: data.items,
            total: data.total
        });
        return this.orderRepository.update(id, orderEntity);
    }

    async delete(id) {
        return this.orderRepository.delete(id);
    }
}
module.exports = OrderService;