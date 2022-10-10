import { getRepository, Repository } from 'typeorm';
import IEmployeeRepository from '@modules/admin/infra/typeorm/repositories/IEmployeeRepository';
import Employee from '@modules/admin/infra/typeorm/entities/Employee';

export default class EmployeeRepository implements IEmployeeRepository {
  private ormRepository: Repository<Employee>;
  constructor() {
    this.ormRepository = getRepository(Employee);
  }

  async create(user_id: number): Promise<Employee> {
    const employee = this.ormRepository.create({ user_id });
    return await this.ormRepository.save(employee);
  }
}
