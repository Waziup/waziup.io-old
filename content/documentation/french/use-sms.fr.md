---
url: /fr/documentation/tutorials/use-sms
---

Tutoriel API SMS
================

Ce document est destiné à aider les développeurs à intégrer leurs applications dans la plate-forme SMS pour envoyer des SMS aux contacts prévus.

Requête SMS
-----------

Endpoint:   http://api.waziup.io/v1/sms/send

Method: POST

Data Type: application/json

Paramètres de la requête

|Champ   |Desciption   |Exemple   |
|---|---|---|
|sender_id   |Nom abrégé à indiquer comme nom de l'expéditeur   |WAZIUP   |
|contacts   |Tableau JSON de numéros de téléphone  |["+233262500105" , "+393806412093"]   |
| message  | Message à envoyer  |  "Lecture de la température de l'étang 1 de 32 degrés à 13:00 GMT" |


Voici un exemple de CURL pour envoyer un sms Test. Changer le numéro de téléphone et le message

```
$ curl -X POST -H "Content-Type: application/json" -H "Api-Token: 53fdb4b2-0ad4-4767-99ea-2271f16f6f1d" -H "Cache-Control: no-cache" -d '{
"sender_id" : "WAZIUP",
"contacts" : ["+233262500105" , "+393806412093"],
  "message" : "Pond 1 temperature reading of 32 degrees at 13:00 GMT"
}' "http://api.waziup.io/v1/sms/send"
```



Réponse:

| Champ  |Valeur   |Description   |
|---|---|---|
|status   |success   |Indicating request success   |
|status_code   |1000   |Code indicating request success   |
|status_text   |Variable   |Full description of status   |
|sms_succeeded   |json array   |json array of reference ids of sms that succeeded   |
|sms_failed   |json array   |json array of reference ids of sms that failed   |



