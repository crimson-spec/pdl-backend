import { getRepository, Repository } from 'typeorm';
import ICreateTableDTO from '../../dtos/create/ICreateTableDTO';
import IUpdateTableDTO from '../../dtos/update/IUpdateTableDTO';
import Table from '../../models/Table';
import ITableRepository from '../ITableRepository';

export default class TableRepository implements ITableRepository {
  private ormRepository: Repository<Table>;
  constructor() {
    this.ormRepository = getRepository(Table);
  }

  async findById(id: string): Promise<Table | undefined> {
    return await this.ormRepository.findOne(id);
  }

  async show(id: string): Promise<Table> {
    return await this.ormRepository.findOne({ id });
  }

  async index(): Promise<Table[]> {
    return await this.ormRepository.find();
  }

  async create({ description, status }: ICreateTableDTO): Promise<Table> {
    const table = this.ormRepository.create({ description, status });
    return await this.ormRepository.save(table);
  }

  async update({ id, description, status }: IUpdateTableDTO): Promise<Table> {
    return await this.ormRepository.save({ id, description, status });
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.ormRepository
      .createQueryBuilder('tables')
      .delete()
      .from(Table)
      .where('id = :id', { id })
      .execute();

    return deleted.affected > 0;
  }
}
