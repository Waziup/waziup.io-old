---
title: API V1 Notifications
menu:
  main:
    title: Notifications
    name: notifications
    parent: api
    weight: 3
---

This tutorial will guide you through the Waziup API version 1, step by step.
We will create and manage notifications.

Let's imagine that we want to monitor the temperature in your fridge.
If the temperature is too high, you should receive a message on your phone!
First of all, let's create a sensor in [this tutorial](../sensor_management).
The sensor should have name "MySensor" with a measurement called "TC1".
We will monitor this temperature measurement and create a notification.
This notification will send us message via SMS if the temperature goes above 10 Degree Celsius.

You should also create a user on the [dashboard](https://dashboard.waziup.io), and input your phone number with the international prefix.

Create a notification
=====================

We will create a new notification for our fridge.
The following command will create the notification. An SMS message will be sent to the user `cdupont` if the temperature inside the fridge is above 10 Degree Celsius.
```
curl -X POST "https://api.waziup.io/api/v1/notifications" -H "content-type: application/json" -d @- <<EOF 
{
  "description": "Send text message",
  "condition": {
    "sensors": ["MySensor"],
    "measurements": ["TC"],
    "expression": "TC>10"
  },
  "notification": {
    "usernames": ["cdupont"],
    "channels": ["sms"],
    "message": "Warning, temperature is too high. {id} value is {TC} C"
  },
  "expires": "2025-10-13T14:51:22.12Z",
  "throttling": 10,
  "status": "active"
}
EOF
```

The various fields are:

- `description` is the description of the notification,
- `condition` describes the condition under which the notification will be triggered,
- ` notification` describes which message to send, to which users and on which channels,
- `expires` is the date where this notification will not be sent anymore,
- `throttling` is the minimum delay between two notification sendings, in seconds. For example, a value of 3600 guaranties that a maximum of one message per hour will be sent to the users,
- `status` allows to activate or deactivate the notification. Possible values are `active` or `inactive`.

`condition` has the following sub-fields:

- `sensors` is the list of sensors under scrutiny by this notification,
- `measurements` are the measurements that will be used,
- `expression` gives the condition under which the notification will be triggered. For example, the expression `TC<40` will trigger the notification if the measurement `TC` has a value below 40 Degreee Celsius.

`notification` has the following sub-fields:

- `usernames` is the list of users that will receive a message if the notification is triggered. In our example, the user `cdupont` will receive the notification messages.
- `channels` is the list of channels to where sending the notification messages. Possible values are `twitter`, `sms` and `voice`.
- `message` is the text that will be sent to the users on the selected channels.
This message can contain variables: for instance `{id}` will be replaced by the sensor id, while `{<measurement_id>}` will be replaced by the value measured.

Once you executed the command above, you will get a number as a reply: this is the notification id.
Keep it aside for the rest of the tutorial.

So, did you receive the SMS? You should receive the message `Warning, temperature is too high. MySensor value is 11 C`.
The variables are replaced in the message sent: `{id}` becomes the sensor id ("MySensor") and `{TC}` becomes the last value measured by the sensor.

See your notification
=====================

You can see the notification that you have just created:
```
curl -X GET "https://api.waziup.io/api/v1/notifications/<notif_id>" -H  "accept: application/json"
```
Replace <notif_id> with the id returned by the previous command. You should see your notification:
```
{
  "id": "5bcb9aca2b4545c9fbdfc851",
  "description": "Send text message",
  "condition": {
    "sensors": [
      "MySensor"
    ],
    "measurements": [
      "TC"
    ],
    "expression": "TC<40"
  },
  "notification": {
    "usernames": [
      "cdupont"
    ],
    "channels": [
      "sms"
    ],
    "message": "Warning, temperature is too high. {id} value is {TC} C"
  },
  "expires": "2030-10-13T14:51:22.00Z",
  "throttling": 3600,
  "status": "active",
  "times_sent": 1,
  "last_notification": "2018-10-20T21:56:58.00Z"
}
```

The notification return is identical to want you created, with two additional fields:

- `times_sent`: this shows that the notification message has been sent out once.
- `last_notification`: the date at which the last notification message was sent.

Trigger the notification
========================

Notifications should be triggered when sensors are updated. Let's update our sensor:
```
curl -X POST "https://api.waziup.io/api/v1/sensors/MySensor/measurements/TC/values" -H  "Content-Type: application/json" -d '{"value": "25.6", "timestamp": "2016-06-08T18:20:27.873Z"}'
```
Since we sent a value inferior to 40C, it should trigger the notification and send an SMS!
For more information on how to create sensor and push datapoints, see this [tutorial](../sensor_management).

Pause/restart the notification
==============================

Once the notification created, you can pause it and restart it latter.
This is done with the following command:
```
curl -X PUT "https://api.waziup.io/api/v1/notifications/<notif_id>/status" -H  "Content-Type: text/plain" -d "inactive"
```
Possible values for this command are `active` and `inactive`.

Delete the notification
=======================

Fianlly, we can delete the notification. Issue the command:
```
curl -X DELETE "https://api.waziup.io/api/v1/notifications/<notif_id>"
```

All set. Good luck with notifications!
