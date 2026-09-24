import { Router } from "express";
import { ProductSituationController } from "../controller/ProductSituationController";

const productSituationRoutes = Router();
const controller = new ProductSituationController();

productSituationRoutes.post("/product-situations", (req, res) => controller.create(req, res));
productSituationRoutes.get("/product-situations", (req, res) => controller.findAll(req, res));
productSituationRoutes.get("/product-situations/:id", (req, res) => controller.findById(req, res));
productSituationRoutes.put("/product-situations/:id", (req, res) => controller.update(req, res));
productSituationRoutes.delete("/product-situations/:id", (req, res) => controller.delete(req, res));

export { productSituationRoutes };