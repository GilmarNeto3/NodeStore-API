import { Request, Response } from "express";
import { UserService } from "../service/UserService";

const userService = new UserService();

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, situationId } = req.body;
      const user = await userService.create({ name, email, password, situationId });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar usuário", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await userService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao listar usuários", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await userService.findById(id);
      if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar usuário", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, email, situationId } = req.body;
      const user = await userService.update(id, { name, email, situationId });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar usuário", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await userService.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Erro ao remover usuário", error });
    }
  }
}