"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSituation = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
@(0, typeorm_1.Entity)("product_situations")
class ProductSituation {
    @(0, typeorm_1.PrimaryGeneratedColumn)()
    id;
    @(0, typeorm_1.Column)({ type: "varchar", length: 255 })
    name;
    @(0, typeorm_1.OneToMany)(() => Product_1.Product, (product) => product.situation)
    products;
    @(0, typeorm_1.CreateDateColumn)()
    createdAt;
    @(0, typeorm_1.UpdateDateColumn)()
    updatedAt;
}
exports.ProductSituation = ProductSituation;
//# sourceMappingURL=ProductSituation.js.map