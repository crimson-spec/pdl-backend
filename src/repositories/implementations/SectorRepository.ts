import { getRepository, Repository } from 'typeorm';
import ICreateSectorDTO from '../../dtos/create/ICreateSectorDTO';
import IUpdateSectorDTO from '../../dtos/update/IUpdateSectorDTO';
import Sector from '../../models/Sector';
import ISectorRepository from '../ISectorRepository';
// import { Pagination, PaginationOptionsInterface } from '@shared/pagination';

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

  async findByDescription(description: string) {
    return await this.ormRepository.findOne({ description });
  }

  async findById(id: string) {
    return await this.ormRepository.findOne({ id });
  }

  async show(id: string) {
    return await this.ormRepository.findOne({ id });
  }

  async index(): Promise<Sector[]> {
    return await this.ormRepository.find();
  }

  async create({ description }: ICreateSectorDTO): Promise<Sector> {
    const sector = this.ormRepository.create({ description });
    return await this.ormRepository.save(sector);
  }

  async update({ id, description }: IUpdateSectorDTO): Promise<Sector> {
    return this.ormRepository.save({ id, description });
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.ormRepository
      .createQueryBuilder('sectors')
      .delete()
      .from(Sector)
      .where('id = :id', { id })
      .execute();

    return deleted.affected > 0;
  }
}
