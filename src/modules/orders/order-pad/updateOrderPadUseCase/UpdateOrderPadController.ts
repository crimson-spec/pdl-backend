import { Request, Response } from "express";
import { container } from "tsyringe";
import UpdateOrderPadService from "@orders/order-pad/updateOrderPadUseCase/UpdateOrderPadService";

export default class updateOrderPadController {
  async handle(request: Request, response: Response) {
    const { table_id, hash_code, in_use } = request.body;
    const { id } = request.params;
    const updateOrderPadService = container.resolve(UpdateOrderPadService);
    await updateOrderPadService.execute({
      id: Number(id),
      table_id,
      hash_code,
      in_use
    });
    return response.status(200);

  }
}
