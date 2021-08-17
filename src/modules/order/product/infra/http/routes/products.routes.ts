import { Router } from "express";

import IndexProductController from "../../../customProductUseCase/index/IndexProductController";

const productsController = new ProductsController();

const productsRoutes = Router();

productsRoutes.get("/", IndexProductController.handle)
productsRoutes.get("/:id", productsController.show)
productsRoutes.post("/", productsController.store)

export default productsRoutes;
