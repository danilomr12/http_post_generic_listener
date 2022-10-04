# HTTP POST GENERIC LISTENER

This is a simple rest application built with nestjs with purpose of simply receive HTTP POST request with json body on two generic endpoints.

## Description

One endpoint accepts a list of any objects. The other accept a single object;
By changing the vars at the .env file, the endpoints are dynamically changed;


## Running with docker
make sure you have GNU Make and docker installed;

```
make build
```

```
make run
```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
