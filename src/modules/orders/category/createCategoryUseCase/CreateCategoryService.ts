import { inject, injectable } from 'tsyringe';
import AppError from '@shared/infra/http/middlewares/errors';
import ICategoryRepository from '@orders/infra/typeorm/repositories/ICategoryRepository';

interface IRequest {
  name: string;
  sector_id: number;
}
@injectable()
export default class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}
  public async execute({ name, sector_id }: IRequest) {
    const categoryExists = await this.categoryRepository.findByName(name);
    if (categoryExists) throw new AppError('Category Already Exists!');
    console.log(name, sector_id);
    const category = await this.categoryRepository.create({ name, sector_id });
    if (!category) throw new AppError('Error to create category!');
    return category;
  }
}
