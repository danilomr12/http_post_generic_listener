import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { ListController } from './list.controller';

@Module({
  controllers: [ListController],
  providers: [AppService],
})
export class ListModule {}
