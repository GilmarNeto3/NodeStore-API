"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryService = void 0;
const data_source_1 = require("../data-source");
const ProductCategory_1 = require("../entity/ProductCategory");
class ProductCategoryService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(ProductCategory_1.ProductCategory);
    }
    async create(data) {
        const category = this.repository.create(data);
        return this.repository.save(category);
    }
    async findAll() {
        return this.repository.find({ order: { id: "ASC" } });
    }
    async findById(id) {
        return this.repository.findOneBy({ id });
    }
    async update(id, data) {
        await this.repository.update(id, data);
        return this.findById(id);
    }
    async delete(id) {
        return this.repository.delete(id);
    }
}
exports.ProductCategoryService = ProductCategoryService;
