import { container } from "tsyringe";
import { Request, Response } from "express";

import DeleteProductService from "modules/orders/product/deleteProductUseCase/DeleteProductService";

export default class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const productService = container.resolve(DeleteProductService);

    await productService.execute(id);

    return response.status(200).send();
  }
}
