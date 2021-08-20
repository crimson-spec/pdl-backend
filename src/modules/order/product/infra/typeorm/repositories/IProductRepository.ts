import ICreateProductDTO from "@order/product/dtos/ICreateProductDTO";
import IUpdateProductDTO from "@order/product/dtos/IUpdateProductDTO";

import Product from "@order/product/infra/typeorm/entities/Product"
import { DeleteResult } from "typeorm";

export default interface IProductRepository {
  index(): Promise<Product[]>;
  show(id: number): Promise<Product>;
  create({ category_id, name, value, status }: ICreateProductDTO): Promise<Product>;
  update({ category_id, name, value, status }: IUpdateProductDTO): Promise<Product>;
  delete(id: number): Promise<DeleteResult>;
  findByName(name: string): Promise<Product | undefined>;
  findById(id: number): Promise<Product>;
}
