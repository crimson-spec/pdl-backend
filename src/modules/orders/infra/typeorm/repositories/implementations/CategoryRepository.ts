import { getRepository, Repository } from 'typeorm';
import Category from '@orders/infra/typeorm/entities/Category';
import ICategoryRepository from '@orders/infra/typeorm/repositories/ICategoryRepository';
import ICreateCategoryDTO from '@orders/category/dtos/ICreateCategoryDTO';

export default class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;
  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async index(): Promise<Category[]> {
    return await this.ormRepository.find();
  }

  async create({ name, sector_id }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({ name, sector_id });
    return await this.ormRepository.save(category);
  }

  async findByName(name: string): Promise<Category | undefined> {
    return await this.ormRepository.findOne(name);
  }
}
