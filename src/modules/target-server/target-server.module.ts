import { Module } from '@nestjs/common';
import { TargetServerService } from './target-server.service';
import { TargetServerController } from './target-server.controller';

@Module({
  providers: [TargetServerService],
  controllers: [TargetServerController]
})
export class TargetServerModule {}
