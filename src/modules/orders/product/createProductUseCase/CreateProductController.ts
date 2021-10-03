import { Request, Response } from "express";

import CreateProductService from "modules/orders/product/createProductUseCase/CreateProductService";
import { container } from "tsyringe";

export default class CreateProductController {
  async handle(request: Request, response: Response) {

    const { category_id, name, value, status = true } = request.body;

    const productService = container.resolve(CreateProductService);

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
