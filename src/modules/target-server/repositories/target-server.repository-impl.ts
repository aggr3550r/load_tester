import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TargetServer } from '../entities/target-server.entity';
import { TargetServerRepository } from './target-server.repository';

@Injectable()
export class TypeOrmTargetServerRepository
  extends Repository<TargetServer>
  implements TargetServerRepository
{
  constructor(private dataSource: DataSource) {
    super(TargetServer, dataSource.createEntityManager());
  }
}
