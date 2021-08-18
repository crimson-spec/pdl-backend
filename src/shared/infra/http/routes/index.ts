import { Router } from "express"

import categoryRouter from "@order/category/infra/http/routes"
import productRouter from "@order/product/infra/http/routes"

const routes = Router();

routes.use("/products", productRouter)
routes.use("/categories", categoryRouter)

/**
 * TODAS AS ROTAS
 */

export default routes;
