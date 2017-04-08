---
date: 2016-09-13T09:00:00+00:00
title: API Reference
---

WAZIUP API endpoints are under development. So, you should frequently visit this page for updates. The current version is v1. Currently, for each service we allocate a distinct naming, and we use the v1 for API accesses. 
In the following, we list endpoint of each service as well as its translation to a target service in Kubernetes.

## Context Broker:
* Endpoint: orion.waziup.io
* URI: /v1/data
* Target Service in Kubernetes: http://orion.waziup:1026/v2

## Historical Database:
* Endpoint: historicaldata.waziup.io
* URI: /
* Target Service in Kubernetes: http://sth-comet.waziup:8666/
* e.g. http://historicaldata.waziup.io/STH/v1/contextEntities/type/SensingDevice/id/Device_6/attributes/temperature

## SMS Services:
* Endpoint: sms.waziup.io
	* URI Send: /v1/sms/send
	* URI Receive: /v1/sms/receive
	* URI Register: /v1/sms/register
* Target Send Service: 
	* Send: https://messaging.mergdata.com/api/v1/sms/send
* Target Services in Kubernetes: 
	* Receive: http://smsserver.waziup:80/v1/sms/receive 
	* Register: http://smsserver.waziup:80/v1/sms/register

## Kubernetes Web UI
* Endpoint: cloudplatform.waziup.io
* URI: /
* Target Service in Kubernetes: http://10.103.21.61/

## WAZIUP Dashboard Web
* Endpoint: dashboard.waziup.io
* URI: /
* Target Service in Kubernetes: http://dashboard.waziup:3000/
