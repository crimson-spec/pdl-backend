import { getRepository, Repository } from 'typeorm';
import IAdminRepository from '@modules/admin/infra/typeorm/repositories/IAdminRepository';
import Admin from '@modules/admin/infra/typeorm/entities/Admin';

export default class AdminRepository implements IAdminRepository {
  private ormRepository: Repository<Admin>;
  constructor() {
    this.ormRepository = getRepository(Admin);
  }
  async findByUsername(username: string): Promise<Admin> {
    return await this.ormRepository
      .createQueryBuilder('admin')
      .innerJoinAndSelect('admin.user', 'user')
      .where('user.username = :username', { username })
      .getOne();
  }

  async create(user_id: number): Promise<Admin> {
    const admin = this.ormRepository.create({ user_id });
    return await this.ormRepository.save(admin);
  }
}
