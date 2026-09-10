"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategory = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
@(0, typeorm_1.Entity)("product_categories")
class ProductCategory {
    @(0, typeorm_1.PrimaryGeneratedColumn)()
    id;
    @(0, typeorm_1.Column)({ type: "varchar", length: 255 })
    name;
    @(0, typeorm_1.OneToMany)(() => Product_1.Product, (product) => product.category)
    products;
    @(0, typeorm_1.CreateDateColumn)()
    createdAt;
    @(0, typeorm_1.UpdateDateColumn)()
    updatedAt;
}
exports.ProductCategory = ProductCategory;
//# sourceMappingURL=ProductCategory.js.map