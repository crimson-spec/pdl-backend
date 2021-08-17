import { Request, Response } from "express";


export default class ShowProductController {
  async handle(request: Request, response: Response) {

    const { id } = request.body;

    const productService = new ShowProductService();

    const showProduct = await productService.execute(id);

    return response.status(200).json(showProduct);
  }
}
