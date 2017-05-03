
# Development Guideline for Software Platform

## Experiment with swagger for WAZIUP REST API

We have developed Waziup APIs with Swagger. You can find complete information at [github](https://github.com/Waziup/Platform/tree/master/APIs).

## WAZIUP broker 

The WAZIUP broker is a [data broker](https://github.com/Waziup/Platform/tree/master/broker). [FIWARE Orion](https://github.com/Waziup/Platform/tree/master/broker/orion) is used as the context broker for Waziup.


### Historical Data

This API provides historical data of sensor measurements. More [info](https://github.com/Waziup/Platform/tree/master/broker/comet)

### Sensor Subscription

[Cygnus](https://github.com/Waziup/Platform/tree/master/broker/cygnus) is used as an Orion subscriber and data sink, in order to save historical data into MongoDB.


Test of the broker and historical APIs can be found here.

## Visualization
More [information](https://github.com/Waziup/Platform/tree/master/visualisation).

## Identity Management and Access Control
More [information](https://github.com/Waziup/Platform/tree/master/identity).

