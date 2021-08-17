import ICreateProductDTO from "./ICreateProductDTO";

import Product from "../../../../shared/infra/typeorm/entities/Product"

export default interface IProductRepository {
  index(): Promise<Product[]>;
  show(id: number): Promise<Product>;
  create({ category_id, name, value, status }: ICreateProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product | undefined>;
  findById(id: number): Promise<Product>;
}
