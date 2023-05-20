import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';

import { UserRepository } from './repositories/user.repository';
import { TypeOrmUserRepository } from './repositories/user.repository-impl';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
  ],
})
export class UserModule {}
