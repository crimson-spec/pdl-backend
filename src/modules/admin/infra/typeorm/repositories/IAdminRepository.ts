import Admin from '@modules/admin/infra/typeorm/entities/Admin';

export default interface IAdminRepository {
  create(user_id: number): Promise<Admin>;
  findByUsername(username: string): Promise<Admin | undefined>;
}
