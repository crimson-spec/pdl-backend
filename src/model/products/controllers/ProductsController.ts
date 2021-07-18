import { Request, Response } from "express";

import ShowProductService from "../services/product/ShowProductService";
import IndexProductService from "../services/product/IndexProductsService";
import CreateProductService from "../services/product/CreateProductService";

export default class ProductsController {
  public async store(request: Request, response: Response) {

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

  public async index(request: Request, response: Response) {

    const productService = new IndexProductService();

    const indexProducts = await productService.execute();

    return response.status(200).json(indexProducts);
  }

  public async show(request: Request, response: Response) {

    const { id } = request.body;

    const productService = new ShowProductService();

    const showProduct = await productService.execute(id);

    return response.status(200).json(showProduct);
  }
}
