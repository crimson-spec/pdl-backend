import { Router } from "express"

import userRoutes from "./model/users/routes/user.routes"
import productsRoutes from "./model/products/routes/products.routes"

const routes = Router();

routes.use("/products", productsRoutes)
routes.use("/users", userRoutes)

/**
 * TODAS AS ROTAS
 */

export default routes;
