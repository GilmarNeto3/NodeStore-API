"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSituationController = void 0;
const ProductSituationService_1 = require("../service/ProductSituationService");
const service = new ProductSituationService_1.ProductSituationService();
class ProductSituationController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const situation = await service.create({ name });
            return res.status(201).json(situation);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao criar situação de produto", error });
        }
    }
    async findAll(req, res) {
        try {
            const situations = await service.findAll();
            return res.status(200).json(situations);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao listar situações de produto", error });
        }
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const situation = await service.findById(id);
            if (!situation)
                return res.status(404).json({ message: "Situação não encontrada" });
            return res.status(200).json(situation);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao buscar situação", error });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name } = req.body;
            const situation = await service.update(id, { name });
            return res.status(200).json(situation);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao atualizar situação", error });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await service.delete(id);
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao remover situação", error });
        }
    }
}
exports.ProductSituationController = ProductSituationController;
