import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello!';
  }

  async saveAgency(agency): Promise<string> {
    console.log(agency);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('save agency');
      }, 1000);
    });
  }

  async logObject(objectItem): Promise<string> {
    console.log(`Received item `);
    console.log(objectItem);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Processed object');
      }, 1000);
    });
  }

  async logList(objectItemList: any[]): Promise<string> {
    if (!(objectItemList instanceof Array)) {
      objectItemList = [objectItemList];
    }
    const listSize = objectItemList.length;
    console.log(`Received batch of ${listSize} objects`);

    objectItemList.forEach((property) => {
      console.log(property);
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Processed list of ${listSize} item(s)`);
      }, 400);
    });
  }
}
