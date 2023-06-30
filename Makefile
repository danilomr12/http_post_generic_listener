$(eval SHELL:=/bin/bash)

include .env
export
default:
	@echo "PROJ_NAME -------> ${PROJ_NAME}"
	@echo "PROJ_VERSION -------> ${PROJ_VERSION}"
	@echo "BASE_PATH -----> ${BASE_PATH}"
	@echo "OBJECT_PATH --------> ${OBJECT_PATH}"
	@echo "LIST_PATH ---------> ${LIST_PATH}"
	@echo "EXPOSED_PORT -------> ${EXPOSED_PORT}"

build:
	docker build  --progress=plain --tag generic-http-post-listener:0.1 --target production .

run:
	docker run --env-file .env --name ${PROJ_NAME}-${PROJ_VERSION} -p${EXPOSED_PORT}:3000 ${PROJ_NAME}:${PROJ_VERSION}	