"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSituationService = void 0;
const data_source_1 = require("../data-source");
const ProductSituation_1 = require("../entity/ProductSituation");
class ProductSituationService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(ProductSituation_1.ProductSituation);
    }
    async create(data) {
        const situation = this.repository.create(data);
        return this.repository.save(situation);
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
exports.ProductSituationService = ProductSituationService;
