import ICreateUserDTO from '../dtos/create/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/update/IUpdateUserDTO';
import User from '../models/User';

export default interface IUserRepository {
  findByUsername(username: string): Promise<User>;
  findById(id: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<User>;
  update(data: IUpdateUserDTO): Promise<User>;
  delete(id: string): Promise<boolean>;
}
