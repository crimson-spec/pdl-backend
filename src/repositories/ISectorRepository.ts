// import { Pagination, PaginationOptionsInterface } from '@shared/pagination';

import ICreateSectorDTO from '../dtos/create/ICreateSectorDTO';
import IUpdateSectorDTO from '../dtos/update/IUpdateSectorDTO';
import Sector from '../models/Sector';

export default interface ISectorRepository {
  // index(options: PaginationOptionsInterface): Promise<Pagination<Sector>>;
  findByDescription(description: string): Promise<Sector>;
  findById(id: string): Promise<Sector>;
  show(id: string): Promise<Sector>;
  index(): Promise<Sector[]>;
  create(data: ICreateSectorDTO): Promise<Sector>;
  update(data: IUpdateSectorDTO): Promise<Sector>;
  delete(id: string): Promise<boolean>;
}
