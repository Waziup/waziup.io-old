---
title: API V2 Access Control
menu:
  main:
    title: Access Control
    name: apiaccesscontrol
    parent: v2docapi
    weight: 1
---

This tutorial will guide you through the access control features of the Waziup API version 2, step by step.
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
curl -X POST "https://api.waziup.io/api/v2/auth/token" -H "Content-Type:application/json" -d '{"username":"cdupont","password":"password"}'
```

This will return a token (a big number).
This token can be included in all subsequent API call. This will allow you to create private resources such as devices or gateways and manage their access rights.
For example, here is how to create a device belonging to the user cdupont:
```
curl -X POST "https://api.waziup.io/api/v2/devices" -H  "accept:application/json" -H "Authorization:Bearer <token>" -H  "Content-Type:application/json" -d '{"id": "MyDevice"}'
```

Replace the <token> tag in the above command by the token you receive with the previous command.
Once you created the device, it should be visible on the dashboard: https://dashboard.waziup.io/devices/MyDevice.
Token should be used also in other calls, such as datapoint pushing. Tokens should be obtained before each request, as they are short-lived (10 minute).
If a token is not valid, an error 401 "Unauthorized" will be returned.
It is still possible to push devices/data without a token, however they will be created as belonging to user “guest” and visibility will be public.

It is also practical to store the token in a variable and use that variable in any other calls:
```
TOKEN=`curl -X POST "https://api.waziup.io/api/v2/auth/token" -H "Content-Type:application/json" -d '{"username":"cdupont","password":"password"}'`
curl -X POST "https://api.waziup.io/api/v2/devices" -H  "accept:application/json" -H "Authorization:Bearer $TOKEN" -H  "Content-Type:application/json" -d '{"id": "MyDevice"}'
```

Permissions
===========

Permissions can be retrieve using the following command:
```
curl -X GET "https://api.waziup.io/api/v2/auth/permissions/devices" -H "Authorization:Bearer $TOKEN" -H "accept: application/json"
```
This will return the list of all permissions for the owner of the token:
```
[
  {
    "resource": "PublicDevice",
    "scopes": [
      "devices:view"
    ]
  },
  {
    "resource": "MyDevice",
    "scopes": [
      "devices:delete",
      "devices-data:view",
      "devices:view",
      "devices:update",
      "devices-data:create"
    ]
  }
]
```
In the example above, the user can only *view* the device "PublicDevice".
He can do more on the device "MyDevice".
For a device, the following access rights are possible: 

- `devices:view`: the user can view the device,
- `devices:update`: the user can update the device,
- `devices:delete`: the user can delete the device,
- `devices-data:view`: the user can view the datapoints from the device,
- `devices-data:create`: the user can push additional datapoints on the device.

The access rights to a particular device are decided based on the owner, the visibility and the sharing of that device.

Ownership
---------

Has showed above, a device can be created using a token from a specific user.
This device will belong to him. The owner of a device has full privilege on it.
For instance, only him (and admins) can modify or delete the device.
If you don't have permission to modify or delete a device, you will receive an error "403 Forbidden".

Visibility
----------

The API includes the concept of device visibility. Visibility can be either private or public. For instance, a gateway can create private devices this way:
```
curl -X POST "https://api.waziup.io/api/v2/devices" -H  "accept:application/json" -H "Authorization:Bearer $TOKEN" -H "Content-Type:application/json" -d '{"id":"MyDevice", "visibility":"private"}'
```

In this example, we create a private device called MyDevice, under the account of cdupont (the owner of the token).
Private devices can only be seen by its owner.
This device will appear on the dashboard when login in with the account of the user “cdupont”.
Public devices can potentially be seen by everybody in the dashboard. However, public devices can only be updated or deleted by its owner or an admin.

Sharing devices
---------------

Using the dashboard, a user can decide to share a device with selected users.
Sharing devices can be made in the Profile of the user.
In particular, users can give the following privileges to other users: “device:view”, “device:update”, “device:delete”, “device-data:view” and “device-data:create”.

Private devices can be shared with other users. For example, you can create a private device, and share the privilege “device:view” with another user.
This will allow that user to see your private device; however he will still not be able to update or delete it.
Public devices can also be shared, in the case you would like to give full privilege to another user (i.e. update or delete the device).

Users
=====

The API allows you to see the list of users. This can be done using the following command:
```
curl -X GET "https://api.waziup.io/api/v2/users" -H  "accept: application/json"
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
curl -X GET "https://api.waziup.io/api/v2/users/39575669-0fd7-4c01-8461-97252c15e540" -H  "accept: application/json"
```


