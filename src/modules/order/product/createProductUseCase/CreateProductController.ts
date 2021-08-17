import { Request, Response } from "express";

import CreateProductService from "../services/product/CreateProductService";

export default class CreateProductController {
  async handle(request: Request, response: Response) {

    const { category_id, name, value, status } = request.body;

    const productService = new CreateProductService();

    const createProduct = await productService.execute(
      {
        category_id,
        name,
        value,
        status
      }
    )
    return response.status(201).json(createProduct);
  }
}
