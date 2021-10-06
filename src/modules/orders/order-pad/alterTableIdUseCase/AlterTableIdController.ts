import { Request, Response } from "express";
import { container } from "tsyringe";
import AlterTableIdService from "@orders/order-pad/alterTableIdUseCase/AlterTableIdService";

export default class AlterTableIdController {
  async handle(request: Request, response: Response) {
    const { table_id, in_use } = request.body;
    const { id } = request.params;
    const alterTableIdService = container.resolve(AlterTableIdService);
    await alterTableIdService.execute({
      id: Number(id),
      table_id,
      in_use
    });
    return response.status(200);

  }
}
