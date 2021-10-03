import ICreateTableDTO from "@orders/table/dtos/ICreateTableDTO";
import Table from "@orders/infra/typeorm/entities/Table";

export default interface ITableRepository{
  create(data: ICreateTableDTO): Promise<Table>;
}
