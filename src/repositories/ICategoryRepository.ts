import ICreateCategoryDTO from '../dtos/create/ICreateCategoryDTO';
import IUpdateCategoryDTO from '../dtos/update/IUpdateCategoryDTO';
import Category from '../models/Category';

export default interface ICategoryRepository {
  findByDescription(name: string): Promise<Category | undefined>;
  findById(id: string): Promise<Category>;
  show(id: string): Promise<Category>;
  index(): Promise<Category[]>;
  create(data: ICreateCategoryDTO): Promise<Category>;
  update(data: IUpdateCategoryDTO): Promise<Category>;
  delete(id: string): Promise<boolean>;
}
