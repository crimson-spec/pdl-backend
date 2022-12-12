import { getRepository, Repository } from 'typeorm';
import ICreateCategoryDTO from '../../dtos/create/ICreateCategoryDTO';
import IUpdateCategoryDTO from '../../dtos/update/IUpdateCategoryDTO';
import Category from '../../models/Category';
import ICategoryRepository from '../ICategoryRepository';

export default class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;
  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async findByDescription(name: string): Promise<Category | undefined> {
    return await this.ormRepository.findOne(name);
  }

  async findById(id: string): Promise<Category> {
    return await this.ormRepository.findOne({ id });
  }
  async show(id: string): Promise<Category> {
    return await this.ormRepository.findOne({ id });
  }
  async update({
    id,
    description,
    sector_id,
  }: IUpdateCategoryDTO): Promise<Category> {
    return await this.ormRepository.save({
      id,
      description,
      sector_id,
    });
  }

  async index(): Promise<Category[]> {
    return await this.ormRepository.find({
      relations: ['sector'],
    });
  }

  async create({
    description,
    sector_id,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({ description, sector_id });
    return await this.ormRepository.save(category);
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.ormRepository
      .createQueryBuilder('categories')
      .delete()
      .from(Category)
      .where('id = :id', { id })
      .execute();

    return deleted.affected > 0;
  }
}
