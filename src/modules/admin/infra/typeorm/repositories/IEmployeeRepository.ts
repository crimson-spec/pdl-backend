import Employee from '@modules/admin/infra/typeorm/entities/Employee';

export default interface IEmployeeRepository {
  create(user_id: number): Promise<Employee>;
  //   findByUsername(name: string): Promise<Admin | undefined>;
}
