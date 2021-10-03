import Category from "@orders/infra/typeorm/entities/Category";

export default interface ICategoryRepository{
  index(): Promise<Category[]>;
  create(name: string): Promise<Category>;
  findByName(name:string): Promise<Category | undefined>;
}
