import { Router } from "express";

import ProductsController from "../controllers/ProductsController";

const productsController = new ProductsController();

const productsRoutes = Router();

productsRoutes.get("/", productsController.index)
productsRoutes.get("/:id", productsController.show)
productsRoutes.post("/", productsController.store)

export default productsRoutes;
