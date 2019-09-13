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

PUBLISH
=======

```
mosquitto_pub -L "mqtt://api.waziup.io/devices/MyDevice/sensors/TC1/value" -m '{"value": "3"}'
```


SUBSCRIBE
=========

```
mosquitto_sub -L "mqtt://api.waziup.io/devices/MyDevice/sensors/TC1/value"
```

