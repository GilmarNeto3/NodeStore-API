"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const Product_1 = require("../entity/Product");
class ProductService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Product_1.Product);
    }
    async create(data) {
        const product = this.repository.create(data);
        return this.repository.save(product);
    }
    async findAll({ page = 1, limit = 10 }) {
        const [products, total] = await this.repository.findAndCount({
            relations: ["category", "situation"],
            skip: (page - 1) * limit,
            take: limit,
            order: { id: "DESC" },
        });
        return {
            data: products,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findById(id) {
        return this.repository.findOne({
            where: { id },
            relations: ["category", "situation"],
        });
    }
    async update(id, data) {
        await this.repository.update(id, data);
        return this.findById(id);
    }
    async delete(id) {
        return this.repository.delete(id);
    }
}
exports.ProductService = ProductService;
