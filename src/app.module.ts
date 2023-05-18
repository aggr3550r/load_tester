import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './src/modules/user/user.module';
import { UserModule } from './user/user.module';
import { UserModule } from './modules/user/user.module';
import { TestModule } from './modules/test/test.module';
import { TargetServerModule } from './modules/target-server/target-server.module';
import { UserController } from './user/user.controller';
import { TargetServerService } from './target-server/target-server.service';

@Module({
  imports: [UserModule, TestModule, TargetServerModule],
  controllers: [AppController, UserController],
  providers: [AppService, TargetServerService],
})
export class AppModule {}
