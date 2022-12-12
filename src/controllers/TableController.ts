import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTableService from '../services/create/CreateTableService';
import DeleteTableService from '../services/delete/DeleteTableService';
import ListTableService from '../services/list/ListTableService';
import ShowTableService from '../services/show/ShowTableService';
import UpdateTableService from '../services/update/UpdateTableService';

class TableController {
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(ShowTableService);
    const table = await service.execute(id);
    return response.status(200).json(table);
  }

  async index(request: Request, response: Response) {
    const service = container.resolve(ListTableService);
    const tables = await service.execute();
    return response.json(tables);
  }

  async create(request: Request, response: Response) {
    const { description, status } = request.body;
    const service = container.resolve(CreateTableService);
    const table = await service.execute({ description, status });
    return response.status(201).json(table);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { description } = request.body;
    const service = container.resolve(UpdateTableService);
    const table = await service.execute({ id, description });
    return response.status(200).json(table);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(DeleteTableService);
    await service.execute(id);
    return response.status(200).send();
  }
}

export default new TableController();
