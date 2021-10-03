import { container } from "tsyringe";

import ProductRepository from "@orders/infra/typeorm/repositories/implementations/ProductRepository";
import IProductRepository from "@orders/infra/typeorm/repositories/IProductRepository";

import OrderRepository from "@orders/infra/typeorm/repositories/implementations/OrderRepository";
import IOrderRepository from "@orders/infra/typeorm/repositories/IOrderRepository";

import OrderPadRepository from "@orders/infra/typeorm/repositories/implementations/OrderPadRepository";
import IOrderPadRepository from "@orders/infra/typeorm/repositories/IOrderPadRepository";

import OrderProductsRepository from "@orders/infra/typeorm/repositories/implementations/OrderProductsRepository";
import IOrderProductsRepository from "@orders/infra/typeorm/repositories/IOrderProductsRepository";

import TableRepository from "@orders/infra/typeorm/repositories/implementations/TableRepository";
import ITableRepository from "@orders/infra/typeorm/repositories/ITableRepository";

import CategoryRepository from "@orders/infra/typeorm/repositories/implementations/CategoryRepository";
import ICategoryRepository from "@orders/infra/typeorm/repositories/ICategoryRepository";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);

container.registerSingleton<IOrderRepository>(
  "OrderRepository",
  OrderRepository
);

container.registerSingleton<IOrderPadRepository>(
  "OrderPadRepository",
  OrderPadRepository
);

container.registerSingleton<IOrderProductsRepository>(
  "OrderProductsRepository",
  OrderProductsRepository
);

container.registerSingleton<ITableRepository>(
  "TableRepository",
  TableRepository
);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);
