import { inject, injectable } from 'tsyringe';
import ICategoryRepository from '../../repositories/ICategoryRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  description: string;
  sector_id: string;
}
@injectable()
export default class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}
  public async execute({ description, sector_id }: IRequest) {
    const categoryExists = await this.categoryRepository.findByDescription(
      description
    );
    if (categoryExists) throw new BadRequestError('Categoria já existe.');
    const category = await this.categoryRepository.create({
      description,
      sector_id,
    });
    if (!category) throw new Error('Erro ao criar categoria.');
    return category;
  }
}
