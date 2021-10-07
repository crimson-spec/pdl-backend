import { json, Request, Response } from "express";
import { container } from "tsyringe";
import CreateTableService from "@orders/table/createTableUseCase/CreateTableService";

export default class CreateTableController {
    async handle(request: Request, response: Response) {
        const { internal_number, hash_code, in_use } = request.body;
        const createTableService = container.resolve(CreateTableService);
        const table = await createTableService.execute({
            internal_number,
            hash_code,
            in_use
        });
        return response.status(200).json(table);
    }
}
