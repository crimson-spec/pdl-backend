import { inject, injectable } from 'tsyringe';
import ISectorRepository from '@orders/infra/typeorm/repositories/ISectorRepository';
import QueryString from 'qs';

@injectable()
export default class ListSectorService {
  constructor(
    @inject('SectorRepository')
    private sectorRepository: ISectorRepository
  ) {}
  public async execute(query: any) {
    const limit = query.per_page ?? 10;
    const page = query.page ?? 0;
    // const sectors = await this.sectorRepository.index({ limit, page });
    const sectors = await this.sectorRepository.index();
    return sectors;
  }
}
