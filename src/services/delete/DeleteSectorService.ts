import { inject, injectable } from 'tsyringe';
import ISectorRepository from '../../repositories/ISectorRepository';
import { NotFoundError } from '../../shared/classes/ApiError';

@injectable()
export default class DeleteSectorService {
  constructor(
    @inject('SectorRepository')
    private sectorRepository: ISectorRepository
  ) {}
  public async execute(id: string) {
    const deleted = await this.sectorRepository.delete(id);
    if (!deleted) throw new NotFoundError('Setor não existe.');
  }
}
