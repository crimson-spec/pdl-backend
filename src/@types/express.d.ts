// import User from '@modules/admin/infra/typeorm/entities/User';
interface UserAuthenticated {
  id: number;
  permissions: string[];
}

declare namespace Express {
  export interface Request {
    user: UserAuthenticated;
  }
}
