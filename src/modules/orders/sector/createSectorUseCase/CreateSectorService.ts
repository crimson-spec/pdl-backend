import { inject, injectable } from 'tsyringe';
import AppError from '@shared/infra/http/middlewares/errors';
import ISectorRepository from '@orders/infra/typeorm/repositories/ISectorRepository';

interface IRequest {
  name: string;
}
@injectable()
export default class CreateSectorService {
  constructor(
    @inject('SectorRepository')
    private sectorRepository: ISectorRepository
  ) {}
  public async execute({ name }: IRequest) {
    const sector = await this.sectorRepository.create({ name });
    if (!sector) throw new AppError('Error to create sector!');
    return sector;
  }
}
