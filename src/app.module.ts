import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObjectModule } from './object/object.module';
import { ListModule } from './list/list.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RouterModule.register([
      {
        path: process.env.BASE_PATH || '/',
        module: AppModule,
        children: [
          {
            path: process.env.OBJECT_PATH || '/object',
            module: ObjectModule,
          },
          {
            path: process.env.LIST_PATH || 'list',
            module: ListModule,
          },
        ],
      },
    ]),
    ObjectModule,
    ListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
