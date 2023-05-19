import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { TargetServerModule } from './modules/target-server/target-server.module';
import { TargetServerService } from './modules/target-server/services/target-server.service';
import { UserController } from './modules/user/controllers/user.controller';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    TestModule,
    TargetServerModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, TargetServerService],
})
export class AppModule {}
