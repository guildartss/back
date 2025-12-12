class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }

    getAll = async (req, res) => {
        const orders = await this.orderService.getAll();
        res.status(200).json(orders);
    };
    getByID = async (req, res) => {
        const {id} = req.params;
        const order = await this.orderService.getById(id);
        if (order){
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    }
    create = async (req, res) => {
        const order = await this.orderService.create(req.body);
        res.status(201).json(order);
    }
    update = async (req, res) => {
        const {id} = req.params;
        const order = await this.orderService.update(id, req.body);
        if (order){
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    }
    delete = async (req, res) => {
        const  {id} = req.params;
        await this.orderService.delete(id);
        res.status(204).send();
    }
}
module.exports = OrderController;