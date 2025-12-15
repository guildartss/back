const Order = require('../../domain/entities/order.entity');
const { NotFoundError } = require('../../domain/errors');

class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository; 
    }

    async create(orderData) {
        const orderEntity = new Order(
            null,
            orderData.customerName,
            orderData.items,
            orderData.total
        );
        return this.orderRepository.create(orderEntity);
    }

    async getAll() {
        const order = await this.orderRepository.getAll();
        if (!order) {
            throw new NotFoundError('Orders not found');
        }
        return order;
    }

    async getById(id) {
        const order = await this.orderRepository.getById(id);
        if (!order) {
            throw new NotFoundError('Order not found');
        }
        return order;
    }

    async update(id, orderData) {
        const existingOrder = await this.orderRepository.getById(id);
        if (!existingOrder) {
            throw new NotFoundError('Order not found');
        }
        const orderEntity = new Order(
            id,
            orderData.customerName,
            orderData.items,
            orderData.total
        );
        return this.orderRepository.update(id, orderEntity);
    }

    async delete(id) {
        const order = await this.orderRepository.getById(id);
        if (!order) {
            throw new NotFoundError('Order not found');
        }
        return this.orderRepository.delete(id);
    }
}
module.exports = OrderService;