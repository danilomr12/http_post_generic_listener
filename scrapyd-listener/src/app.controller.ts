import { Body } from '@nestjs/common';
import { Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("agency")
  async agency(@Body() agency:any): Promise<string> {
    return await this.appService.saveAgency(agency);
  }

  @Post("daft")
  async daft(@Body() daftProperty:any): Promise<string> {
    return await this.appService.saveDaftProperty(daftProperty);
  }
}
