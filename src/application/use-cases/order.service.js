const Order = require('../../domain/entities/order.entity');
const { notFoundError } = require('../../domain/errors');

class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository; 
    }

    async createOrder(orderData) {
        const orderEntity = new Order(
            null,
            orderData.customerName,
            orderData.items,
            orderData.total
        );
        return this.orderRepository.create(orderEntity);
    }

    async getAllOrder() {
        const order = await this.orderRepository.getAll();
        if (!order) {
            throw notFoundError('Orders not found');
        }
        return order;
    }

    async getOrderById(id) {
        const order = await this.orderRepository.getById(id);
        if (!order) {
            throw notFoundError('Order not found');
        }
        return order;
    }

    async updateOrder(id, orderData) {
        const existingOrder = await this.orderRepository.getById(id);
        if (!existingOrder) {
            throw notFoundError('Order not found');
        }
        const orderEntity = new Order(
            id,
            orderData.customerName,
            orderData.items,
            orderData.total
        );
        return this.orderRepository.update(id, orderEntity);
    }

    async deleteOrder(id) {
        const order = await this.orderRepository.getById(id);
        if (!order) {
            throw notFoundError('Order not found');
        }
        return this.orderRepository.delete(id);
    }
}
module.exports = OrderService;