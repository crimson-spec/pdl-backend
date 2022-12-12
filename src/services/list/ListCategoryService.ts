import { inject, injectable } from 'tsyringe';
import ICategoryRepository from '../../repositories/ICategoryRepository';

@injectable()
export default class ListCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}
  public async execute() {
    const categories = await this.categoryRepository.index();
    if (!categories) throw new Error('Erro ao listar categorias.');
    return categories;
  }
}
