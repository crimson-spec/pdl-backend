import { getRepository, Repository } from 'typeorm';
import Sector from '@orders/infra/typeorm/entities/Sector';
import ISectorRepository from '@orders/infra/typeorm/repositories/ISectorRepository';
import ICreateSectorDTO from '@orders/sector/dtos/ICreateSectorDTO';
import { Pagination, PaginationOptionsInterface } from '@shared/pagination';

export default class SectorRepository implements ISectorRepository {
  private ormRepository: Repository<Sector>;
  constructor() {
    this.ormRepository = getRepository(Sector);
  }

  // async index(
  //   options: PaginationOptionsInterface
  // ): Promise<Pagination<Sector>> {
  //   const [results, total] = await this.ormRepository.findAndCount({
  //     take: options.limit,
  //     skip: options.page,
  //   });

  //   return new Pagination<Sector>({
  //     results,
  //     total,
  //   });
  // }
  async index(): Promise<Sector[]> {
    return this.ormRepository.find();
  }

  async create({ name }: ICreateSectorDTO): Promise<Sector> {
    const sector = this.ormRepository.create({ name });
    return await this.ormRepository.save(sector);
  }
}
