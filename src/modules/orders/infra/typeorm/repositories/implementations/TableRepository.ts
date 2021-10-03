import { getRepository, Repository } from "typeorm";
import ICreateTableDTO from "@orders/table/dtos/ICreateTableDTO";
import Table from "@orders/infra/typeorm/entities/Table";
import ITableRepository from "@orders/infra/typeorm/repositories/ITableRepository";


export default class TableRepository implements ITableRepository{

  private ormRepository: Repository<Table>;
  constructor()
  {
    this.ormRepository = getRepository(Table);
  }
  async create(data: ICreateTableDTO): Promise<Table> {
    const table = this.ormRepository.create(data);
    return await this.ormRepository.save(table);
  }

}
