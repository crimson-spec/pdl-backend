import { inject, injectable } from 'tsyringe';
import ISectorRepository from '../../repositories/ISectorRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  description: string;
}
@injectable()
export default class CreateSectorService {
  constructor(
    @inject('SectorRepository')
    private sectorRepository: ISectorRepository
  ) {}
  public async execute({ description }: IRequest) {
    const sectorExists = await this.sectorRepository.findByDescription(
      description
    );
    if (sectorExists) throw new BadRequestError('Setor já existe.');
    const sector = await this.sectorRepository.create({ description });
    if (!sector) throw new Error('Erro ao criar setor.');
    return sector;
  }
}
