---
title: API V2 Gateways
menu:
  main:
    title: Gateways
    name: gateways
    parent: v2docapi
    weight: 4
---

This tutorial will show you how to connect your gateway to Waziup.
First of all, open the API documentation available at https://api.waziup.io/docs.
With this website, you can explore and interact with all the endpoints of the Waziup API.


Declare the gateway
===================

At start-up, a gateway should declare itself to the Cloud.
This is done with the following command:

```
curl -X POST "https://api.waziup.io/api/v2/gateways" -H  "Content-Type: application/json;charset=utf-8" -H "Authorization:Bearer $TOKEN" -d '{ "visibility": "public",  "name": "My gateway", "id": "GW1"}'

You need to choose a unique ID for the gateway.
The gateway then needs to push regularly it's "heartbeat" on the /gateways/{gw_id}/health endpoint.


Simple gateway protocol
=======================

As a simple approach, a gateway can just push datapoints on existing devices on the platform.
The devices and sensors should be created beforehand on the [dashboard](https://dashboard.waziup.io).
To create the device, follow [this tutorial](/tutorials/software/dashboard/).
We will not use any authentication, so the sensor need to be public.

We are now ready to push a new datapoint!
Follow [those instructions](../device_management/#push-data-to-your-sensor-node) to push the datapoint.
Once pushed, you should alerady see the new value displayed on the dashboard!

Complex gateway protocol
========================

Gateways can create the devices themselves (instead of having to create them manually on the dashboard).
In order to maintain privacy, a token should be obtained before each call.
Once this is done, datapoints can be pushed.
A suggested protocol is the following:

1. Get a token: `GET api/v2/auth/token`. See [here](../access_control/#authentication).
2. Verify if the sensor exists: `GET /api/v2/devices/<device_id>`. See [here](../sensor_management/#read-a-particular-sensor).
3. If a 404 is received, create it: `POST /api/v2/devices`. See [here](../sensor_management/#create-a-sensor-node).
4. Verify if the measurement exists: `GET /api/v2/devices/<device_id>/sensors/<sensor_id`. See [here](../sensor_management/#check-your-measurement).
5. If a 404 is received, create it: `POST /api/v2/devices/<device_id>/sensors`. See [here](../sensor_management/#create-measurements).
6. Finally, push the datapoint: `POST /api/v2/devices/<device_id>/sensors/<sensor_id>/value`. See [here](../sensor_management/#push-data-to-your-sensor-node).

This protocol takes care of creating a device and sensor for the owner of the device. It then pushes the datapoint. 

