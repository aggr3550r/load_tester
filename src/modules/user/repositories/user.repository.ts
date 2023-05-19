import { FindOneOptions } from 'typeorm';
import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract findPerson(options: FindOneOptions<User>): Promise<User>;
}
