import { inject, injectable } from "tsyringe";
import AppError from "@shared/infra/http/middlewares/errors";
import ICategoryRepository from "@orders/infra/typeorm/repositories/ICategoryRepository";


@injectable()
export default class CreateCategoryService{
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ){}
  public async execute(name: string)
  {
    const categoryExists = await this.categoryRepository.findByName(name);
    if(categoryExists) throw new AppError("Category Already Exists!");
    const category = await this.categoryRepository.create(name);
    if(!category) throw new AppError("Error to create category!");
    return category;
  }
}
