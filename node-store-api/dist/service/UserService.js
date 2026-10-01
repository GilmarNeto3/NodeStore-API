"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const data_source_1 = require("../data-source");
const User_1 = require("../entity/User");
class UserService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
    async create(data) {
        const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
        const user = this.repository.create({ ...data, password: hashedPassword });
        const saved = await this.repository.save(user);
        const { password, ...userWithoutPassword } = saved;
        return userWithoutPassword;
    }
    async findAll() {
        const users = await this.repository.find({
            relations: { situation: true },
            order: { id: "ASC" },
        });
        return users.map(({ password, ...rest }) => rest);
    }
    async findById(id) {
        const user = await this.repository.findOne({
            where: { id },
            relations: { situation: true },
        });
        if (!user)
            return null;
        const { password, ...rest } = user;
        return rest;
    }
    async update(id, data) {
        await this.repository.update(id, data);
        return this.findById(id);
    }
    async delete(id) {
        return this.repository.delete(id);
    }
}
exports.UserService = UserService;
