import ICreateTableDTO from "@orders/table/dtos/ICreateTableDTO";
import IUpdateTableDTO from "@orders/table/dtos/IUpdateTableDTO";
import Table from "@orders/infra/typeorm/entities/Table";

export default interface ITableRepository {
  create(data: ICreateTableDTO): Promise<Table>;
  update(data: IUpdateTableDTO): Promise<Table>;
  findById(id: number): Promise<Table | undefined>;
}
