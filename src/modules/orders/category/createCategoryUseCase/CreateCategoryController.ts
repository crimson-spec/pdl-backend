import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCategoryService from "@orders/category/createCategoryUseCase/CreateCategoryService";

export default class CreateCategoryController{
  public async handle(request: Request, response: Response)
  {
    const {name} = request.body;
    const createCategoryService = container.resolve(CreateCategoryService);
    const category = await createCategoryService.execute(name);
    response.status(200).json(category)
  }
}
