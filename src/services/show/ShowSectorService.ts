import { inject, injectable } from 'tsyringe';
import ISectorRepository from '../../repositories/ISectorRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

@injectable()
export default class ShowSectorService {
  constructor(
    @inject('SectorRepository')
    private sectorRepository: ISectorRepository
  ) {}

  async execute(id: string) {
    const sector = await this.sectorRepository.show(id);
    if (!sector) throw new BadRequestError('Setor não encontrado.');

    return sector;
  }
}
