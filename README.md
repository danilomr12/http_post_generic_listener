# HTTP POST GENERIC LISTENER

This is a simple rest application built with nestjs with purpose of simply receive HTTP POST request with json body on two generic endpoints.

## Description

One endpoint accepts a list of any objects. The other accept a single object;
By changing the vars at the .env file, the endpoints are dynamically changed;

```envfile

BASE_PATH - subdirectory of the full path. Can be blank

OBJECT_PATH - endpoint that accepts single-object

LIST_PATH - endpoint that accepts a list of objects

EXPOSED_PORT - port exposed by our docker container
```

sample of final url:

- <http://localhost:EXPOSED_PORT/BASE_PATH/OBJECT_PATH>
- <http://localhost:EXPOSED_PORT/BASE_PATH/LIST_PATH>

## Running with docker

make sure you have GNU Make and docker installed;

```bash
# build the docker image with productoin target
make build
```

```bash
# run the docker image built locally. Needs run make build first
make run
```

## Installation
tested with 18.10.0
```bash
npm install
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
