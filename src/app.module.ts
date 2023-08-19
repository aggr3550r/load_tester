import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { TargetServerModule } from './modules/target-server/target-server.module';
import { TargetServerService } from './modules/target-server/services/target-server.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { APP_PIPE } from '@nestjs/core';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TestModule,
    TargetServerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
    TargetServerService,
    // {
    //   provide: UserRepository,
    //   useClass: TypeOrmUserRepository,
    // },
  ],
})
export class AppModule {}
