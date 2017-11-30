---
date: 2017-03-21T23:42:49Z
title: Référence de l'API
url: /fr/documentation/api/api-reference
---

l'API WAZIUP est en cours de développement.

## context broker:
* Endpoint: orion.waziup.io
* URI: /v1/data
* Service cible dans Kubernetes: http://orion.waziup:1026/v2

## Base de données historique:
* Endpoint: historicaldata.waziup.io
* URI: /
* Service cible dans Kubernetes: http://sth-comet.waziup:8666/
* par exemple: http://brokerhistory.waziup.io/STH/v1/contextEntities/type/SensingDevice/id/Device_6/attributes/temperature

## Services SMS:
* Endpoint: sms.waziup.io
    * Envoyer: /v1/sms/send
    * Reception: /v1/sms/receive
    * S'enregistrer: /v1/sms/register
* Service cible d'envoi: 
    * Envoi: https://messaging.mergdata.com/api/v1/sms/send
* Service cible dans Kubernetes: 
    * Recevoir: http://smsserver.waziup:80/v1/sms/receive 
    * Enregistrement: http://smsserver.waziup:80/v1/sms/register

## Kubernetes Web UI (Interface d'utilisateur)
* Endpoint: cloudplatform.waziup.io
* URI: /
* Target Service in Kubernetes: http://10.103.21.61/

## WAZIUP Dashboard Web (tableau de board Web)
* Endpoint: dashboard.waziup.io
* URI: /
* Service cible dans Kubernetes: http://dashboard.waziup:3000/
