import { inject, injectable } from 'tsyringe';
import ICategoryRepository from '../../repositories/ICategoryRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  id: string;
  description?: string;
  sector_id?: string;
}
@injectable()
export default class UpdateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}
  public async execute({ id, description, sector_id }: IRequest) {
    const categoryExists = await this.categoryRepository.findById(id);
    if (!categoryExists) throw new BadRequestError('Categoria não existe.');
    const category = await this.categoryRepository.update({
      id,
      description,
      sector_id,
    });
    if (!category) throw new Error('Erro ao atualizar categoria.');
    return category;
  }
}
