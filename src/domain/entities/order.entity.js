class Order {
    constructor({ id, customerName, items, total }) {
        this.id = id;
        this.customerName = customerName;
        this.items = items;
        this.total = total
    }
}
module.exports = Order;