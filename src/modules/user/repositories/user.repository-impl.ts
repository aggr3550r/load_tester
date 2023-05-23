import { Injectable } from '@nestjs/common';
import { DataSource, FindOneOptions, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class TypeOrmUserRepository
  extends Repository<User>
  implements UserRepository
{
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findPerson(options: FindOneOptions<User>): Promise<User> {
    return await this.findOne(options);
  }

  async savePerson(user: User) {
    return await this.save(user);
  }
}
