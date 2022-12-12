import { inject, injectable } from 'tsyringe';
import ICategoryRepository from '../../repositories/ICategoryRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

@injectable()
export default class ShowCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(id: string) {
    const category = await this.categoryRepository.show(id);
    if (!category) throw new BadRequestError('Categoria não encontrada.');

    return category;
  }
}
