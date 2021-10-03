import { Request, Response } from "express";
import { container } from "tsyringe";
import IndexProductService from "modules/orders/product/customProductUseCase/index/IndexProductService";

export default class IndexProductController {
  async handle(request: Request, response: Response) {
    const productService = container.resolve(IndexProductService);

    const indexProducts = await productService.execute();

    return response.status(200).json(indexProducts);
  }
}
