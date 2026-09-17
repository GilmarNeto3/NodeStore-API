import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";

const productService = new ProductService();

export class ProductController {
  async create(req: Request, res: Response) {
    try {
      const { name, productCategoryId, productSituationId } = req.body;
      const product = await productService.create({ name, productCategoryId, productSituationId });
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar produto", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const result = await productService.findAll({ page, limit });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao listar produtos", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const product = await productService.findById(id);

      if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar produto", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, productCategoryId, productSituationId } = req.body;
      const product = await productService.update(id, { name, productCategoryId, productSituationId });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar produto", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await productService.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Erro ao remover produto", error });
    }
  }
}