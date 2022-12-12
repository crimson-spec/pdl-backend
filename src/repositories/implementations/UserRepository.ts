import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../../dtos/create/ICreateUserDTO';
import IUpdateUserDTO from '../../dtos/update/IUpdateUserDTO';
import User from '../../models/User';
import IUserRepository from '../IUserRepository';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }

  async findById(id: string): Promise<User> {
    return await this.ormRepository.findOne({ id });
  }

  async findByUsername(username: string): Promise<User> {
    return await this.ormRepository.findOne({ username });
  }

  async create({
    name,
    username,
    password,
    is_admin,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      username,
      password,
      is_admin,
    });
    return await this.ormRepository.save(user);
  }

  async update({
    id,
    name,
    username,
    is_admin,
  }: IUpdateUserDTO): Promise<User> {
    return await this.ormRepository.save({ id, name, username, is_admin });
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.ormRepository
      .createQueryBuilder('users')
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();

    return deleted.affected > 0;
  }
}
