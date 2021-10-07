import { json, Request, Response } from "express";
import { container } from "tsyringe";
import UpdateTableService from "@orders/table/updateTableUseCase/UpdateTableService";

export default class UpdateTableController {
    async handle(request: Request, response: Response) {
        const { internal_number, hash_code, in_use } = request.body;
        const { id } = request.params;
        const createTableService = container.resolve(UpdateTableService);
        const table = await createTableService.execute({
            id: Number(id),
            internal_number,
            hash_code,
            in_use
        });
        return response.status(200).json(table);
    }
}
