import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { ObjectController } from './object.controller';

@Module({
  controllers: [ObjectController],
  providers: [AppService],
})
export class ObjectModule {}
