---
title: API V1 Access Control
menu:
  main:
    title: Access Control
    name: apiaccesscontrol
    parent: api
    weight: 1
---

This tutorial will guide you through the access control features of the Waziup API version 1, step by step.
First of all, open the API documentation available at https://api.waziup.io/docs.
With this website, you can explore and interact with all the endpoints of the Waziup API.

User creation
=============

First of all, you need to create a user on the dashboard: https://dashboard.waziup.io.
This will give you access to the dashboard features, and to all API features.
During user creation, you need to provide:

- username: your username,
- firstName: your firstname, such as "Barack",
- lastName: your last name, such as "Obama",
- email: your email,
- phone: your phone number including country code, such as "+233248107811",
- address: your physical address,
- facebook: your facebook ID,
- twitter: your twitter account ID, without the "@".

Authentication
==============

Once created, you can request an authentication token:
```
curl -X POST "https://api.waziup.io/api/v1/auth/token" -H "Content-Type:application/json" -d ‘{"username":"cdupont","password":"password"}’
```

This will return a token (a big number).
This token can be included in all subsequent API call. This will allow you to create private sensors and manage their access rights.
For example, here is how to create a sensor belonging to the user cdupont:
```
curl -X POST "https://api.waziup.io/api/v1/sensors" -H  "accept:application/json" -H "Authorization:Bearer <token>" -H  "Content-Type:application/json" -d ‘{"id": "MySensor", "domain":"waziup"}’
```

Replace the <token> tag in the above command by the token you receive with the previous command.
Once you created the sensor, it should be visible on the dashboard: https://dashboard.waziup.io/sensors/MySensor.
Token should be used also in other calls, such as datapoint pushing. Tokens should be obtained before each request, as they are short-lived (1 minute).
If a token is not valid, an error 401 "Unauthorized" will be returned.
It is still possible to push sensors/data without a token, however they will be created as belonging to user “guest” and visibility will be public.

Permissions
===========

Permissions can be retrieve using the following command:
```
curl -X GET "https://api.waziup.io/api/v1/auth/permissions" -H "Authorization:Bearer <token>" -H "accept: application/json"
```
This will return the list of all permissions for the owner of the token:
```
[
  {
    "resource": "PublicSensor",
    "scopes": [
      "sensors:view"
    ]
  },
  {
    "resource": "MySensor",
    "scopes": [
      "sensors:delete",
      "sensors-data:view",
      "sensors:view",
      "sensors:update",
      "sensors-data:create"
    ]
  }
]
```
In the example above, the user can only view the sensor "PublicSensor".
He can do more on the sensor "MySensor".
For a sensor, the following access rights are possible: 

- `sensors:view`: the user can view the sensor,
- `sensors:update`: the user can update the sensor,
- `sensors:delete`: the user can delete the sensor,
- `sensors-data:view`: the user can view the datapoints from the sensor,
- `sensors-data:create`: the user can push additional datapoints on the sensor.

The access rights to a particular sensor are decided based on the owner, the visibility and the sharing of that sensor.

Ownership
---------

Has showed above, a sensor can be created using a token from a specific user.
This sensor will belong to him. The owner of a sensor has full privilege on it.
For instance, only him (and admins) can modify or delete the sensor.
If you don't have permission to modify or delete a sensor, you will receive an error "403 Forbidden".

Visibility
----------

The API include the concept of sensor visibility. Visibility can be either private or public. For instance, a gateway can create private sensors this way:
```
curl -X POST "https://api.waziup.io/api/v1/sensors" -H  "accept:application/json" -H "Authorization:Bearer <token>" -H "Content-Type:application/json" -d ‘{"id":"MySensor", "domain":"waziup", “visibility”:“private”}’
```

In this example, we create a private sensor called MySensor, under the account of cdupont (the owner of the token).
Private sensors can only be seen by its owner.
This sensor will appear on the dashboard in the section “My Sensors” when login in with the account of the user “cdupont”.
Public sensors can be seen by everybody in the “Public sensors” section of the dashboard. However, public sensors can only be updated or deleted by its owner or an admin.

Sharing sensors
---------------

Using the dashboard, a user can decide to share a sensor with selected users.
Sharing sensors can be made in the Profile of the user.
In particular, users can give the following privileges to other users: “sensor:view”, “sensor:update”, “sensor:delete”, “sensor-data:view” and “sensor-data:create”.

Private sensors can be shared with other users. For example, you can create a private sensors, and share the privilege “sensor:view” with another user. This will allow that user to see your private sensor; however he will still not be able to update or delete it.
Public sensors can also be shared, in the case you would like to give full privilege to another user (i.e. update or delete the sensor).

Users
=====

The API allows you to see the list of users. This can be done using the following command:
```
curl -X GET "https://api.waziup.io/api/v1/users" -H  "accept: application/json"
```
This command will yeld the list of users:
```
[
  {
    "id": "39575669-0fd7-4c01-8461-97252c15e540",
    "createdTime": 1530019538772,
    "username": "1234you",
    "firstName": "Richard",
    "lastName": "Ann Boakye",
    "email": "xxx@hotmail.com",
    "phone": ["+233248107811"],
    "address": ["12 Einstein road, Dakar"],
    "facebook": ["extraOrdinaire"],
    "twitter": ["xtra_ordinaire"]
  }
]
```

You can also retrieve a single user using his user ID:
```
curl -X GET "https://api.waziup.io/api/v1/users/39575669-0fd7-4c01-8461-97252c15e540" -H  "accept: application/json"
```


