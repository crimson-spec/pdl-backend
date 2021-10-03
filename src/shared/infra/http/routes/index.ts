import { Router } from "express";

import categoryRouter from "@orders/infra/http/routes/category.routes";
import productRouter from "@orders/infra/http/routes/product.routes";
import orderRouter from "@orders/infra/http/routes/order.routes";

const routes = Router();

routes.use("/products", productRouter);
routes.use("/categories", categoryRouter);
routes.use("/orders", orderRouter);

/**
 * TODAS AS ROTAS
 */

export default routes;
