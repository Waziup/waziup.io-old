---
title: API Tutorial
---

This tutorial will guide you through the Waziup API, step by step.
We will create a sensor, update its attributes and then delete it.

First of all, open the API documentation available at http://api.waziup.io/docs.
With this website, you can explore and interact with all the endpoints of the Waziup API.

Install Curl command
--------------------

The first step is to install the Curl command.
Curl is a very neat command to interact with REST APIs, using the HTTP protocol.

For Windows:
For Linux:
For Mac


Create a sensor node
--------------------

We will create a sensor node named Sensor-YourName.
You need to replace "YourName" with your name, in order to make the sensor unique.

```
curl -X POST "http://api.waziup.io/api/v1/domains/waziup/Sensors" -H  "Content-Type: application/json" -d '{"id": "Sensor1-YourName", "domain": "YourDomain"}'
```

You just created a sensor node! You can already go on [Waziup dashboard](http://dashboard.waziup.io) and find it among the sensors.

There are 3 parts to this command:

- the method: `POST`
- the URL: `http://api.waziup.io/api/v1/domains/waziup/sensors`
- a header: `accept: application/json`
- and the data: `{"id": "Sensor-YourName", "domain": "YourDomain"}`

The HTTP protocol supports several methods. The most used are GET, PUT, POST and DELETE.
They are used to act on a *resource*.
The resource is identified by an URL, here `http://api.waziup.io/api/v1/domains/waziup/Sensors`.
The data is the content of the request. 
In our example, the data section contains the name of the sensor and its domain.
Finally, the Header provide additional technical information about the request.
In this case, we specify that the request data is made with JSON.

Here a more complete example:

```
curl -X POST "http://api.waziup.io/api/v1/domains/waziup/sensors" -H "Content-Type: application/json" -d @- <<EOF 
{
  "id": "Sensor2-YourName",
  "gateway_id": "XXX",
  "name": "My weather station",
  "domain": "YourDomain",
  "owner": "cdupont",
  "location": {
    "latitude": 5.36,
    "longitude": 4.0083
  },
  "measurements": [
    {
      "id": "TC",
      "name": "My garden temperature",
      "sensing_device": "SoilThermometer",
      "quantity_kind": "SoilTemperature",
      "unit": "DegreeCelsius",
    }
  ]
}
EOF
```

Much more complete! If you check again on the dashboard, you should see more details.
We provided:

- an id for the sensor (it should be unique)
- the id of the gateway to which it is connected
- the name of the sensor
- the domain of the sensor. The domain is used to group sensors from the same application domain, for example sensors from a specific farm.
- the owner name
- the location in latitude/longitude
- the measurements.

Measurements correspond to the individual physical sensors attached to your sensor node.
Each measurement have:

- a unique id
- a name
- a sensing device. This is the kind of physical sensor used: a temperature sensor, a soil moisture sensor...
- a quantity kind. This is what you are really measuring with the sensor. For example, air temperature or water temperature?
- a unit of measurement.


Update your sensor node
-----------------------


Push data to your sensor node
-----------------------------

You can push a new datapoint to your sensor:

```
curl -X POST "http://www.waziup.io/api/v1/domains/waziup/sensors/Sensor2-YourName/measurements/TC/values" -H  "Content-Type: application/json" -d '{"value": "25.6", "timestamp": "2016-06-08T18:20:27.873Z"}'
```

You should already check that your datapoint is arrived on the dashboard.


Delete your sensor node
-----------------------

Finally, let's destroy this sensor.

```
curl -X DELETE "http://www.waziup.io/api/v1/domains/waziup/sensors/Sensor2-YourName"
```
