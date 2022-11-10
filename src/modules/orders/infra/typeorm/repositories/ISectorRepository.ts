import ICreateSectorDTO from '@orders/sector/dtos/ICreateSectorDTO';
import Sector from '@orders/infra/typeorm/entities/Sector';
import { Pagination, PaginationOptionsInterface } from '@shared/pagination';

export default interface ISectorRepository {
  // index(options: PaginationOptionsInterface): Promise<Pagination<Sector>>;
  index(): Promise<Sector[]>;
  create(data: ICreateSectorDTO): Promise<Sector>;
}
