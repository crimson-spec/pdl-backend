import { inject, injectable } from 'tsyringe';
import ISectorRepository from '../../repositories/ISectorRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  id: string;
  description?: string;
}

@injectable()
export default class UpdateSectorService {
  constructor(
    @inject('SectorRepository')
    private sectorRepository: ISectorRepository
  ) {}
  public async execute({ id, description }: IRequest) {
    const sectorExists = await this.sectorRepository.findById(id);
    if (!sectorExists) throw new BadRequestError('Setor não existe.');
    const sector = await this.sectorRepository.update({ id, description });
    if (!sector) throw new Error('Erro ao atualizar setor.');
    return sector;
  }
}
