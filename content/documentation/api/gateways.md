---
title: API V1 Gateways
menu:
  main:
    title: Gateways
    name: gateways
    parent: api
    weight: 4
---

This tutorial will show you how to connect your gateway to Waziup.
First of all, open the API documentation available at https://api.waziup.io/docs.
With this website, you can explore and interact with all the endpoints of the Waziup API.

Simple gateway protocol
=======================

As a simple approach, a gateway can just push datapoints on existing sensors on the platform.
The sensor and measurement should be created beforehand on the [dashboard](https://dashboard.waziup.io).
To create the sensor, follow [this tutorial](/tutorials/software/dashboard/).
We will not use any authentication, so the sensor need to be public.

We are now ready to push a new datapoint!
Follow [those instructions](../sensor_management/#push-data-to-your-sensor-node) to push the datapoint.
Once pushed, you should alerady see the new value displayed on the dashboard!

Complex gateway protocol
========================

Gateways can create the sensors themselves (instead of having to create them manually on the dashboard).
In order to maintain privacy, a token should be obtained before each call.
Once this is done, datapoints can be pushed.
A suggested protocol is the following:

1. Get a token: `GET api/v1/auth/token`. See [here](../access_control/#authentication).
2. Verify if the sensor exists: `GET /api/v1/sensors/<sensor_id>`. See [here](../sensor_management/#read-a-particular-sensor).
3. If a 404 is received, create it: `POST /api/v1/sensors`. See [here](../sensor_management/#create-a-sensor-node).
4. Verify if the measurement exists: `GET /api/v1/sensors/<sensor_id>/measurements/<measurement_id`. See [here](../sensor_management/#check-your-measurement).
5. If a 404 is received, create it: `POST /api/v1/sensors/<sensor_id>/measurements`. See [here](../sensor_management/#create-measurements).
6. Finally, push the datapoint: `POST /api/v1/sensors/<sensor_id>/measurements/<measurement_id>/values`. See [here](../sensor_management/#push-data-to-your-sensor-node).

This protocol takes care of creating a sensor and measurement for the owner of the sensor. It then pushes the datapoint. 

