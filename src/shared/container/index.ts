import { container } from "tsyringe";

import ProductRepository from "@order/product/infra/typeorm/repositories/implementations/ProductRepository";
import IProductRepository from "@order/product/infra/typeorm/repositories/IProductRepository";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);
