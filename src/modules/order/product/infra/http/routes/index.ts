import { Router } from "express";

import IndexProductController from "@order/product/customProductUseCase/index/IndexProductController";
import ShowProductController from "@order/product/customProductUseCase/show/ShowProductController";
import CreateProductController from "@order/product/createProductUseCase/CreateProductController";
import DeleteProductController from "@order/product/deleteProductUseCase/DeleteProductController";

const indexProductController = new IndexProductController;
const showProductController = new ShowProductController;
const createProductController = new CreateProductController;
const deleteProductController = new DeleteProductController;

const productRouter = Router();

productRouter.get("/", indexProductController.handle);
productRouter.get("/:id", showProductController.handle);
productRouter.post("/", createProductController.handle);
productRouter.delete("/:id", deleteProductController.handle);

export default productRouter;
