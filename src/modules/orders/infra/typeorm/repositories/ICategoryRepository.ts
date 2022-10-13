import ICreateCategoryDTO from '@orders/category/dtos/ICreateCategoryDTO';
import Category from '@orders/infra/typeorm/entities/Category';

export default interface ICategoryRepository {
  index(): Promise<Category[]>;
  create({ name, sector_id }: ICreateCategoryDTO): Promise<Category>;
  findByName(name: string): Promise<Category | undefined>;
}
