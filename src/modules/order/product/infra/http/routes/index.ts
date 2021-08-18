import { Router } from "express";

import IndexProductController from "@order/product/customProductUseCase/index/IndexProductController";
import ShowProductController from "@order/product/customProductUseCase/show/ShowProductController";

import CreateProductController from "@order/product/createProductUseCase/CreateProductController";

const indexProductController = new IndexProductController;
const showProductController = new ShowProductController;
const createProductController = new CreateProductController;

const productRouter = Router();

productRouter.get("/", indexProductController.handle)
productRouter.get("/:id", showProductController.handle)
productRouter.post("/", createProductController.handle)

export default productRouter;
