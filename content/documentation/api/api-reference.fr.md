---
date: 2017-03-21T23:42:49Z
title: Référence de l'API
url: /fr/documentation/api/api-reference
---

La référence de l'API WAZIUP

Référence de l'API WAZIUP

Les points d'extrémité de l'API WAZIUP sont en cours de développement. Donc, vous devriez fréquemment visiter cette page pour des mises à jour. La version actuelle est v1. Actuellement, pour chaque service, nous attribuons une dénomination distincte, et nous utilisons les accès v1 pour API.
Dans ce qui suit, nous énumérons le point final de chaque service ainsi que sa traduction dans un service cible de Kubernetes.

1. Courtier contextuel:
- Endpoint: orion.waziup.io
- URI: /v1/data
- Service cible dans Kubernetes: http://orion.waziup:1026/v2

2. Base de données historique:
- Endpoint: historicaldata.waziup.io
- URI: /
- Service cible dans Kubernetes: http://sth-comet.waziup:8666/
- par exemple: http://brokerhistory.waziup.io/STH/v1/contextEntities/type/SensingDevice/id/Device_6/attributes/temperature

3. Services SMS:
- Endpoint: sms.waziup.io
- Envoyer: /v1/sms/send
- Reception: /v1/sms/receive
- S'enregistrer: /v1/sms/register
- Service cible d'envoi: https://messaging.mergdata.com/api/v1/sms/send
- Service cible dans Kubernetes: 
-- http://smsserver.waziup:80/v1/sms/receive 
-- http://smsserver.waziup:80/v1/sms/register

4. Kubernetes Web UI(Interface d'utilisateur)
- Endpoint: cloudplatform.waziup.io
- URI: /
- Target Service in Kubernetes: http://10.103.21.61/

5. WAZIUP Dashboard Web(tableau de board Web)
- Endpoint: dashboard.waziup.io
- URI: /
- Service cible dans Kubernetes: http://dashboard.waziup:3000/