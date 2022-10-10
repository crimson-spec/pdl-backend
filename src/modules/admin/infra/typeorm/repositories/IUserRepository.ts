import User from '@modules/admin/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/admin/users/dtos/ICreateUserDTO';

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByUsername(name: string): Promise<User | undefined>;
}
