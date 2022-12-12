import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSectorService from '../services/create/CreateSectorService';
import DeleteSectorService from '../services/delete/DeleteSectorService';
import ListSectorService from '../services/list/ListSectorService';
import ShowSectorService from '../services/show/ShowSectorService';
import UpdateSectorService from '../services/update/UpdateSectorService';

class SectorController {
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(ShowSectorService);
    const sector = await service.execute(id);
    return response.status(200).json(sector);
  }
  async index(request: Request, response: Response) {
    const query = request.query;
    const service = container.resolve(ListSectorService);
    const sectors = await service.execute(query);
    return response.json(sectors);
  }

  async create(request: Request, response: Response) {
    const { description } = request.body;
    const service = container.resolve(CreateSectorService);
    const sector = await service.execute({ description });
    return response.status(201).json(sector);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { description } = request.body;
    const service = container.resolve(UpdateSectorService);
    const sector = await service.execute({ id, description });
    return response.status(200).json(sector);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(DeleteSectorService);
    await service.execute(id);
    return response.status(200).send();
  }
}

export default new SectorController();
