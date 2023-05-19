import { Module } from '@nestjs/common';
import { TargetServerService } from './services/target-server.service';
import { TargetServerController } from './controllers/target-server.controller';

@Module({
  providers: [TargetServerService],
  controllers: [TargetServerController],
})
export class TargetServerModule {}
