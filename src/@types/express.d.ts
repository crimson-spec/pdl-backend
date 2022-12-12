// import User from '@modules/admin/infra/typeorm/entities/User';
interface UserAuthenticated {
  id: string;
  permissions: string[];
}

declare namespace Express {
  export interface Request {
    user: UserAuthenticated;
    order_pad_id: string;
  }
}
