import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  async saveAgency(agency): Promise<string> {
    console.log(agency);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("save agency");
      }
      , 1000);
    });
  }

  async saveDaftProperty(daftProperty): Promise<string> {
    console.log(daftProperty);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Saved Daft Property');
      }, 1000);
    })
  }
}
