import { Router } from "express"

import CreateCategoryController from "@orders/category/createCategoryUseCase/CreateCategoryController";
import ListCategoryController from "@orders/category/listCategoryUseCase/ListCategoryController";

const listCategoryController = new ListCategoryController();
const createCategoryController = new CreateCategoryController();

const categoryRouter = Router();

categoryRouter.post("/", createCategoryController.handle);
categoryRouter.get("/", listCategoryController.handle);

export default categoryRouter;
