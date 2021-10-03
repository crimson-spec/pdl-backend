import { inject, injectable } from "tsyringe";
import AppError from "@shared/infra/http/middlewares/errors";
import ICategoryRepository from "@orders/infra/typeorm/repositories/ICategoryRepository";


@injectable()
export default class ListCategoryService{
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ){}
  public async execute()
  {
    const categories = await this.categoryRepository.index();
    if(!categories) throw new AppError("Error to list categories!");
    return categories;
  }
}
