
SMS API Tutorial
=========================

This document is intended to aid developers to integrate their apps into the SMS platform to send SMS to intended contacts.

SMS Request
-----------------

Endpoint:   http://api.waziup.io/v1/sms/send

Method: POST

Data Type: application/json

Request parameters

|Field   |Desciption   |Example   |
|---|---|---|
|sender_id   |Short name to be shown as sender's name   |WAZIUP   |
|contacts   |JSON array of phone numbers   |["+233262500105" , "+393806412093"]   |
| message  | Message body to be sent  |  "Pond 1 temperature reading of 32 degrees at 13:00 GMT" |



Here's a sample CURL to send a Test sms. Change the Phone number and message to suit

```
$ curl -X POST -H "Content-Type: application/json" -H "Api-Token: 53fdb4b2-0ad4-4767-99ea-2271f16f6f1d" -H "Cache-Control: no-cache" -d '{
"sender_id" : "WAZIUP",
"contacts" : ["+233262500105" , "+393806412093"],
  "message" : "Pond 1 temperature reading of 32 degrees at 13:00 GMT"
}' "http://api.waziup.io/v1/sms/send"
```



Response:

| Field  |Value   |Description   |
|---|---|---|
|status   |success   |Indicating request success   |
|status_code   |1000   |Code indicating request success   |
|status_text   |Variable   |Full description of status   |
|sms_succeeded   |json array   |json array of reference ids of sms that succeeded   |
|sms_failed   |json array   |json array of reference ids of sms that failed   |



