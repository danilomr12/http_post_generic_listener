import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class ObjectController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async daft(@Body() daftProperty: any): Promise<string> {
    return await this.appService.logObject(daftProperty);
  }
}
