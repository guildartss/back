class CuponsController {
    constructor(cuponsService) {
        this.cuponsService = cuponsService;
    }

    getAll = async (req, res) => {
        const cupons = await this.cuponsService.getAllCupons();
        res.status(200).json(cupons);
    }

    getById = async (req, res) => {
        const { id } = req.params;
        const cupon = await this.cuponsService.getCuponById(id);
        res.status(200).json(cupon);
    }

    create = async (req, res) => {
        const cupon = await this.cuponsService.createCupon(req.body);
        res.status(201).json(cupon);
    }

    update = async (req, res) => {
        const { id } = req.params;
        const cupon = await this.cuponsService.updateCupon(id, req.body);
        res.status(200).json(cupon);
    }

    delete = async (req, res) => {
        const { id } = req.params;
        await this.cuponsService.deleteCupon(id);
        res.status(204).send();
    }
}

module.exports = CuponsController;
