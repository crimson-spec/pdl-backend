import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ShowProductService from '../services/show/ShowProductService';
import ListProductService from '../services/list/ListProductService';
import CreateProductService from '../services/create/CreateProductService';
import UpdateProductService from '../services/update/UpdateProductService';
import DeleteProductService from '../services/delete/DeleteProductService';

class ProductController {
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(ShowProductService);
    const product = await service.execute(id);
    return response.json(product);
  }
  async index(request: Request, response: Response) {
    const service = container.resolve(ListProductService);
    const products = await service.execute();
    return response.json(products);
  }

  async create(request: Request, response: Response) {
    const file = request.file;
    const { description, category_id, value, quantity, status } = request.body;
    const service = container.resolve(CreateProductService);
    const product = await service.execute({
      description,
      category_id,
      value,
      quantity,
      status,
      image_filename: file?.filename,
    });
    return response.status(201).json(product);
  }

  async update(request: Request, response: Response) {
    const file = request.file;
    const { id } = request.params;
    const { description, category_id, value, quantity, status } = request.body;
    const service = container.resolve(UpdateProductService);
    const product = await service.execute({
      id,
      description,
      category_id,
      value,
      quantity,
      status,
      image_filename: file?.filename,
    });
    return response.json(product);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(DeleteProductService);
    await service.execute(id);
    return response.status(200).send();
  }
}

export default new ProductController();
