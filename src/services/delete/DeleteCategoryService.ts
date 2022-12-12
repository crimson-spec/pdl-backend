import { inject, injectable } from 'tsyringe';
import ICategoryRepository from '../../repositories/ICategoryRepository';
import { NotFoundError } from '../../shared/classes/ApiError';

@injectable()
export default class DeleteCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(id: string) {
    const deleted = await this.categoryRepository.delete(id);
    if (!deleted) throw new NotFoundError('Categoria não existe.');
  }
}
