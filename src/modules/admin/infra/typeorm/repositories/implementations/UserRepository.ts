import { getRepository, Repository } from 'typeorm';
import IUserRepository from '@modules/admin/infra/typeorm/repositories/IUserRepository';
import User from '@modules/admin/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/admin/users/dtos/ICreateUserDTO';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);
    return await this.ormRepository.save(user);
  }

  async findByUsername(username: string): Promise<User> {
    return await this.ormRepository.findOne({ username });
  }
}
