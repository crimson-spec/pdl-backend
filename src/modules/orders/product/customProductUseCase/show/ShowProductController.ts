import { Request, Response } from "express";
import { container } from "tsyringe";
import ShowProductService from "modules/orders/product/customProductUseCase/show/ShowProductService";


export default class ShowProductController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const productService = container.resolve(ShowProductService)

    const showProduct = await productService.execute(Number(id));

    return response.status(200).json(showProduct);
  }
}
