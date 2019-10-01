---
title: MQTT access
menu:
  main:
    title: MQTT
    name: apimqtt
    parent: v2docapi
    weight: 1
---

This tutorial will guide you through the access to the platform via MQTT.
First, you need to install the [MQTT client Mosquitto](https://mosquitto.org/download/).
Waziup allows you to push sensor values through MQTT, and to subscribe on a sensor for changes.


PUBLISH
=======

The first thing you can do is publishing a new value on an existing sensor.
Make sure that a Device "MyDevice" exists on the dashboard, and that it is public: https://dashboard.waziup.io/devices/MyDevice
Then push a new value:

```
mosquitto_pub -L "mqtt://api.waziup.io/devices/MyDevice/sensors/TC1/value" -m '{"value": "3"}'
```
The Device sensor "TC1" should turn Green and display your value "3".

SUBSCRIBE
=========

Now, let's subscribe to a sensor:
```
mosquitto_sub -L "mqtt://api.waziup.io/devices/MyDevice/sensors/TC1/value"
```
In another console window, push again the value "3" as above.
You should see the value arriving in you subscription:
```
{"value": "3"}
```

You can also use wildcards "+" and "#" to subscribe to several topics.
"+" is a wildcard for a single level. For instance, this will subscribe to all sensors in device "MyDevice":
```
mosquitto_sub -L "mqtt://api.waziup.io/devices/MyDevice/sensors/+/value"
```

Instead, "#" can be used for multiple levels. For instance, this will subscribe to all sensors in device "MyDevice":
```
mosquitto_sub -L "mqtt://api.waziup.io/devices/MyDevice/#"
```


Security
========

You cannot push data to sensors to which you don't have access: they will simply not be recorded by the server.
Unfortunately, the MQTT protocol doesn't define any error messages, so the server cannot inform you about the failure.

Likewise, you can subscribe to a sensor or multiple sensors, but the server will not send you the data if you don't have access.  

If the device is private, you can publish data to it by giving your login/password:
```
mosquitto_pub -L "mqtt://api.waziup.io/devices/MyDevice/sensors/TC1/value" -m '{"value": "4"}' -u login -P password
```

The same can be done for subscription.

