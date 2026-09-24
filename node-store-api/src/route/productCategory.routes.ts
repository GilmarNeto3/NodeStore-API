import { Router } from "express";
import { ProductCategoryController } from "../controller/ProductCategoryController";

const productCategoryRoutes = Router();
const controller = new ProductCategoryController();

productCategoryRoutes.post("/product-categories", (req, res) => controller.create(req, res));
productCategoryRoutes.get("/product-categories", (req, res) => controller.findAll(req, res));
productCategoryRoutes.get("/product-categories/:id", (req, res) => controller.findById(req, res));
productCategoryRoutes.put("/product-categories/:id", (req, res) => controller.update(req, res));
productCategoryRoutes.delete("/product-categories/:id", (req, res) => controller.delete(req, res));

export { productCategoryRoutes };