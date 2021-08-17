import { Request, Response } from "express";

export default class IndexProductController {
  async handle(request: Request, response: Response) {
    const productService = new IndexProductService();

    const indexProducts = await productService.execute();

    return response.status(200).json(indexProducts);
  }
}
