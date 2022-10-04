import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class ListController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async ppr(@Body() pprProperty: any[]): Promise<string> {
    return await this.appService.logList(pprProperty);
  }
}
