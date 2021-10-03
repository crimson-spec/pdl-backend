import { Request, Response } from "express";
import { container } from "tsyringe";
import ListCategoryService from "@orders/category/listCategoryUseCase/ListCategoryService";

export default class ListCategoryController{
  public async handle(request: Request, response: Response)
  {
    const listCategoryService = container.resolve(ListCategoryService);
    const categories = await listCategoryService.execute();
    response.status(200).json(categories)
  }
}
