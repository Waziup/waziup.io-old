---
title: Waziup API V1.1 Migration guide
menu:
  main:
    title: V1.1 Migration guide
    name: migrataion_guideV1.1
    parent: api
    weight: 10
---


This document will guide you through the update of your gateway or application to the new API V1.1 (see https://github.com/Waziup/Platform/blob/master/ChangeLog). The novelties in this version are:

- HTTPS activated on all endpoints (https://api.waziup.io, https://dashboard.waziup.io, https://keycloak.waziup.io)
- compound data types (e.g. for GPS)
- better ownership of sensors (e.g. display only your sensors in the dashboard)
- sharing of sensors
- sensor visibility (public, private)
- datapoints timestamps can be from device or from Cloud
- faster response time
- download sensor data in CSV format from the dashboard
- remove “domain” from the URL of all endpoints

HTTPS
====

*All endpoints are now HTTPS.*
Gateways and devices using Waziup platform should update the URL to https://api.waziup.io instead of http://api.waziup.io.

Authentication
==============

The API supports authentication using an authentication token. To receive a token, perform the request:
```
curl -X POST "https://api.waziup.io/api/v1/auth/token" -H  "accept:application/json" -H "Content-Type:application/json" -d ‘{"username":"cdupont","password":"password"}’
```

This will return a token. The username and password can be created on the waziup dashboard: https://dashboard.waziup.io.
*This token should be included in all subsequent API call*. For example, here is how to create a sensor belonging to the user cdupont:
```
curl -X POST "https://api.waziup.io/api/v1/sensors" -H  "accept:application/json" -H "Authorization:Bearer <token>" -H  "Content-Type:application/json" -d ‘{"id": "Sensor2","gateway_id":"ea0541de1ab7132a1d45b85f9b2139f5","domain":"waziup"}’
```

Token should be used also in other calls, such as datapoint pushing. Tokens should be obtained before each request, as they are short-lived (1 minute). It is still possible to push sensors/data without a token, however they will be created as belonging to user “guest” and visibility will be public.

Domains
=======

*Domains in the URL of all endpoints has been removed*. Regarding sensor creation, the domain is now read from the message body. For example, here is how to create a new sensor:
```
curl -X POST "https://api.waziup.io/api/v1/sensors" -H  "accept:application/json" -H "Authorization:Bearer <token>" -H  "Content-Type:application/json" -d ‘{"id":"Sensor2","gateway_id":"ea0541de1ab7132a1d45b85f9b2139f5","domain":"waziup"}’
```
Notice that the domain is not part of the URL anymore. The part in green is used to create the sensor in domain “waziup”. 

Compatibility with previous version
-----------------------------------

*Applications or gateways that uses the API format from V1.0 should still work in V1.1*.
In particular, if an application mention the domain in the URL, it will be accepted but the domain will be ignored.
For example, an application using V1.0 format can perform a sensor creation this way:
```
curl -X POST "http://api.waziup.io/api/v1/sensors" -H  "accept:application/json" -H "Authorization:Bearer <token>" -H  "Content-Type:application/json" -d ‘{"id":"Sensor2","gateway_id":"ea0541de1ab7132a1d45b85f9b2139f5"}’
```
The yellow part from the URL will be ignored. If the application/gateway tries to create a sensor using the above command, the domain mentioned in the URL will be ignored and the sensor will be created using the default “waziup” domain for compatibility. It is encouraged to switch to the new format.

Creating sensors
================

The protocol to create and update sensors has slightly changed in this version. However it remains compatible with gateways that are using version 1.0 of the API.
As shown before, you can create a sensor this way:
```
curl -X POST "https://api.waziup.io/api/v1/domains/waziup/sensors" -H "accept:application/json" -H "Authorization:Bearer <token>" -H "Content-Type:application/json" -d ‘{"id":"Sensor2","gateway_id":"ea0541de1ab7132a1d45b85f9b2139f5","domain":"waziup"}’
```
This will create a sensor with name Sensor2, attached to gateway ea0541de1ab7132a1d45b85f9b2139f5, in domain waziup. You can also create measurements for this sensor:
```
curl -X POST "https://api.waziup.io/api/v1/sensors" -H "Content-Type:application/json" -d @- <<EOF
{
   "id": "Sensor2",
   "gateway_id": "ea0541de1ab7132a1d45b85f9b2139f5",
   "measurements": [
     {
       "id": "TC",
        }
   ]
 }
EOF
```

This creates a sensor with one measurement called TC (usually stands for temperature in Degree Celsius).
More information on sensor creation can be found here: http://www.waziup.io/documentation/api/api_tutorial/

*It is now NOT possible to create sensors and push datapoints in the same request*. For example, this request is NOT possible anymore:
```
curl -X POST "https://api.waziup.io/api/v1/sensors" -H "Content-Type:application/json" -d @- <<EOF
{
   "id": "Sensor2",
   "gateway_id": "ea0541de1ab7132a1d45b85f9b2139f5",
   "measurements": [
     {
       "id": "TC",
      "values":[{"value":”22.5”, "timestamp":"2016-06-08T18:20:27.873Z"}]
        }
   ]
 }
EOF
```

Instead, values should be pushed individually using the values endpoint (see section Pushing datapoints below).

Creating measurements
=====================

Measurements can be added individually, even after the sensor has been created. Similarly to sensor creation, in this version you cannot push datapoint values while creating measurements. This is an example of a correct measurement creation:
```
curl -X POST "https://api.waziup.io/api/v1/sensors/Sensor2/measurements" -H  "accept: application/json" -H  "Authorization: Bearer <token>" -H  "Content-Type: application/json" -d ‘{ "id": "TC"}’
```

Pushing datapoints
==================

Values can be pushed to existing sensors using the endpoint:
```
/sensors/{sensor_id}/measurements/{measurement_id}/values
```

For example, here is how you can push the value 22.5 to measurement TC of sensor Sensor2:
```
curl -X POST "https://api.waziup.io/api/v1/sensors/Sensor2/measurements/TC/values" -H "accept:application/json" -H "Authorization:Bearer <token>" -H  "Content-Type:application/json" -d ‘{"value":"25.6","timestamp": "2016-06-08T18:20:27.873Z"}’
```
The field “timestamp” represent the exact date when the data was collected from the sensor.
*It is now optional*.
This allows devices without a clock to still be able to push data to the platform.
When receiving the datapoint, the platform will add another field called “date_received” with the date when it was received on the Cloud.

*The platform is now able to receive any JSON datatype as values*. Values can be a string, a number, an array, a boolean or any JSON structure. For instance, here is how to push a GPS position:
```
curl -X POST "https://api.waziup.io/api/v1/sensors/Sensor2/measurements/TC/values" -H  "accept:application/json" -H "Authorization:Bearer <token>" -H  "Content-Type:application/json" -d ‘{"value":{“latitude”: 5.36,“longitude”:4.00},"timestamp":"2016-06-08T18:20:27.873Z"}’
```

Ownership
=========

Has showed above, a sensor can be created using a token from a specific user.
This sensor will belong to him. The owner of a sensor has full privilege on it.
For instance, only him (and admins) can modify or delete the sensor.

Visibility
==========

The API now include the concept of sensor visibility. Visibility can be either private or public. For instance, a gateway can create private sensors this way:
```
curl -X POST "https://api.waziup.io/api/v1/sensors" -H  "accept:application/json" -H "Authorization:Bearer <token>" -H "Content-Type:application/json" -d ‘{"id":"Sensor2","gateway_id":"ea0541de1ab7132a1d45b85f9b2139f5","domain":"waziup", “visibility”:“private”}’
```

In this example, we create a private sensor called Sensor2, under the account of cdupont (the owner of the token). Private sensors can only be seen by its owner. This sensor will appear on the dashboard in the section “My Sensors” when login in with the account of the user “cdupont”.
Public sensors can be seen by everybody in the “Public sensors” section of the dashboard. However, public sensors can only be updated or deleted by its owner or an admin.

Sharing sensors
===============

Using the dashboard, a user can decide to share a sensor with selected users.
Sharing sensors can be made in the Profile of the user.
In particular, users can give the following privileges to other users: “sensor:view”, “sensor:update”, “sensor:delete”, “sensor-data:view” and “sensor-data:create”.

Private sensors can be shared with other users. For example, you can create a private sensors, and share the privilege “sensor:view” with another user. This will allow that user to see your private sensor; however he will still not be able to update or delete it.
Public sensors can also be shared, in the case you would like to give full privilege to another user (i.e. update or delete the sensor).

Gateway protocol
================

The gateway protocol does not change in this version.
The only changes are to remove the domain from each endpoints, and add https to each endpoints.
The complete gateway protocol can be found [here](../gateways).


