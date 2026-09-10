"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const ProductCategory_1 = require("./ProductCategory");
const ProductSituation_1 = require("./ProductSituation");
@(0, typeorm_1.Entity)("products")
class Product {
    @(0, typeorm_1.PrimaryGeneratedColumn)()
    id;
    @(0, typeorm_1.Column)({ type: "varchar", length: 255 })
    name;
    @(0, typeorm_1.ManyToOne)(() => ProductCategory_1.ProductCategory, (category) => category.products)
    @(0, typeorm_1.JoinColumn)({ name: "productCategoryId" })
    category;
    @(0, typeorm_1.Column)()
    productCategoryId;
    @(0, typeorm_1.ManyToOne)(() => ProductSituation_1.ProductSituation, (situation) => situation.products)
    @(0, typeorm_1.JoinColumn)({ name: "productSituationId" })
    situation;
    @(0, typeorm_1.Column)()
    productSituationId;
    @(0, typeorm_1.CreateDateColumn)()
    createdAt;
    @(0, typeorm_1.UpdateDateColumn)()
    updatedAt;
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map