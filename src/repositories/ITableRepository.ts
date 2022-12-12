import ICreateTableDTO from '../dtos/create/ICreateTableDTO';
import IUpdateTableDTO from '../dtos/update/IUpdateTableDTO';
import Table from '../models/Table';

export default interface ITableRepository {
  findById(id: string): Promise<Table>;
  show(id: string): Promise<Table>;
  index(): Promise<Table[]>;
  create(data: ICreateTableDTO): Promise<Table>;
  update(data: IUpdateTableDTO): Promise<Table>;
  delete(id: string): Promise<boolean>;
}
