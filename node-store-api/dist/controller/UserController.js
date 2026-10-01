"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../service/UserService");
const userService = new UserService_1.UserService();
class UserController {
    async create(req, res) {
        try {
            const { name, email, password, situationId } = req.body;
            const user = await userService.create({ name, email, password, situationId });
            return res.status(201).json(user);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao criar usuário", error });
        }
    }
    async findAll(req, res) {
        try {
            const users = await userService.findAll();
            return res.status(200).json(users);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao listar usuários", error });
        }
    }
    async findById(req, res) {
        try {
            const id = Number(req.params.id);
            const user = await userService.findById(id);
            if (!user)
                return res.status(404).json({ message: "Usuário não encontrado" });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao buscar usuário", error });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, email, situationId } = req.body;
            const user = await userService.update(id, { name, email, situationId });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao atualizar usuário", error });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await userService.delete(id);
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao remover usuário", error });
        }
    }
}
exports.UserController = UserController;
