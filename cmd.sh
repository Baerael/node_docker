#!/bin/bash
	docker ps
	dockerd
	docker build -t tk .
	docker run -p 5000:8080 f385a68e6e8c