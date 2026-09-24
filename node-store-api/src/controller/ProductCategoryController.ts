import { Request, Response } from "express";
import { ProductCategoryService } from "../service/ProductCategoryService";

const service = new ProductCategoryService();

export class ProductCategoryController {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const category = await service.create({ name });
      return res.status(201).json(category);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar categoria", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const categories = await service.findAll();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao listar categorias", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const category = await service.findById(id);
      if (!category) return res.status(404).json({ message: "Categoria não encontrada" });
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar categoria", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name } = req.body;
      const category = await service.update(id, { name });
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar categoria", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await service.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Erro ao remover categoria", error });
    }
  }
}