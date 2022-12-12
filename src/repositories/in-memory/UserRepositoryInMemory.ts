import ICreateUserDTO from '../../dtos/create/ICreateUserDTO';
import IUpdateUserDTO from '../../dtos/update/IUpdateUserDTO';
import User from '../../models/User';
import IUserRepository from '../IUserRepository';

export default class UserRepositoryInMemory implements IUserRepository {
  findByUsername(username: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  create(data: ICreateUserDTO): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(data: IUpdateUserDTO): Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  private users: User[] = [];
}
