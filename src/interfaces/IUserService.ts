import { FindOneOptions } from 'typeorm';
import { ResponseModel } from '../models/ResponseModel';
import { User } from '../modules/user/entities/user.entity';

export interface IUserService {
  createUser(user: User): Promise<ResponseModel<User>>;
  updateUser(user: User): Promise<ResponseModel<User>>;
  getUser(options: FindOneOptions<User>): Promise<ResponseModel<User>>;
  deleteUser(options: FindOneOptions<User>): Promise<void>;
}
