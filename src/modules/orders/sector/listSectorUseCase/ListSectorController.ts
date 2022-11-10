import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListSectorService from './ListSectorService';

export default class ListSectorController {
  async handle(request: Request, response: Response) {
    const query = request.query;
    const service = container.resolve(ListSectorService);
    const sectors = await service.execute(query);
    return response.json(sectors);
  }
}
