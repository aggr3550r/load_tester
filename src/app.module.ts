import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { TargetServerModule } from './modules/target-server/target-server.module';
import { TargetServerService } from './modules/target-server/services/target-server.service';
import { UserController } from './modules/user/controllers/user.controller';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { APP_PIPE } from '@nestjs/core';
import { UserService } from './modules/user/services/user.service';
import { UserRepository } from './modules/user/repositories/user.repository';
import { TypeOrmUserRepository } from './modules/user/repositories/user.repository-impl';
import { AuthService } from './modules/user/auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    TestModule,
    TargetServerModule,
  ],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    UserService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
    TargetServerService,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
    AuthService,
  ],
})
export class AppModule {}
