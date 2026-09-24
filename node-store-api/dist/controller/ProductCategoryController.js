"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryController = void 0;
const ProductCategoryService_1 = require("../service/ProductCategoryService");
const service = new ProductCategoryService_1.ProductCategoryService();
class ProductCategoryController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const category = await service.create({ name });
            return res.status(201).json(category);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao criar categoria", error });
        }
    }
    async findAll(req, res) {
        try {
            const categories = await service.findAll();
            return res.status(200).json(categories);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao listar categorias", error });
        }
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const category = await service.findById(id);
            if (!category)
                return res.status(404).json({ message: "Categoria não encontrada" });
            return res.status(200).json(category);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao buscar categoria", error });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name } = req.body;
            const category = await service.update(id, { name });
            return res.status(200).json(category);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao atualizar categoria", error });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await service.delete(id);
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao remover categoria", error });
        }
    }
}
exports.ProductCategoryController = ProductCategoryController;
