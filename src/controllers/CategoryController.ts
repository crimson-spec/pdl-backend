import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '../services/create/CreateCategoryService';
import DeleteCategoryService from '../services/delete/DeleteCategoryService';
import ListCategoryService from '../services/list/ListCategoryService';

import ShowCategoryService from '../services/show/ShowCategoryService';
import UpdateCategoryService from '../services/update/UpdateCategoryService';

class CategoryController {
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(ShowCategoryService);
    const category = await service.execute(id);
    return response.json(category);
  }
  async index(request: Request, response: Response) {
    const service = container.resolve(ListCategoryService);
    const categories = await service.execute();
    return response.json(categories);
  }

  async create(request: Request, response: Response) {
    const { description, sector_id } = request.body;
    const service = container.resolve(CreateCategoryService);
    const category = await service.execute({ description, sector_id });
    return response.status(201).json(category);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { description, sector_id } = request.body;
    const service = container.resolve(UpdateCategoryService);
    const category = await service.execute({ id, description, sector_id });
    return response.json(category);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(DeleteCategoryService);
    await service.execute(id);
    return response.status(200).send();
  }
}

export default new CategoryController();
