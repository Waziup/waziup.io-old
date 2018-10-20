---
title: API V1 Sensor management
menu:
  main:
    title: Sensor management
    name: sensormanagement
    parent: api
    weight: 2
---

This tutorial will guide you through the Waziup API version 1, step by step.
We will create a sensor, update its attributes and then delete it.
We will perform all the commands without authentication, so the sensor created will be public.
If you want to know more about private sensors, see [this tutorial](../access_control).

First of all, open the API documentation available at https://api.waziup.io/docs.
With this website, you can explore and interact with all the endpoints of the Waziup API.

Create a sensor node
====================

We will create a sensor node named "MySensor".
You need to replace "YourName" with your name, in order to make the sensor unique.

```
curl -X POST "https://api.waziup.io/api/v1/Sensors" -H  "Content-Type: application/json" -d '{"id": "MySensor", "domain": "YourDomain"}'
```

You just created a sensor node! You can already go on [Waziup dashboard](http://dashboard.waziup.io) and find it among the sensors.

There are 3 parts to this command:

- the method: `POST`
- the URL: `https://api.waziup.io/api/v1/sensors`
- a header: `accept: application/json`
- and the data: `{"id": "MySensor", "domain": "YourDomain"}`

The HTTP protocol supports several methods. The most used are GET, PUT, POST and DELETE.
They are used to act on a *resource*.
The resource is identified by an URL, here `https://api.waziup.io/api/v1/Sensors`.
The data is the content of the request. 
In our example, the data section contains the name of the sensor and its domain.
Finally, the Header provide additional technical information about the request.
In this case, we specify that the request data is made with JSON.

Here a more complete example:

```
curl -X POST "https://api.waziup.io/api/v1/sensors" -H "Content-Type: application/json" -d @- <<EOF 
{
  "id": "MySensor",
  "gateway_id": "XXX",
  "name": "My weather station",
  "domain": "YourDomain",
  "owner": "cdupont",
  "visibility": "public",
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

- The `id` of the sensor. The `id` it should be unique among all sensors. It is used by gateway and devices to push the data (see section "push your data").
- A `gateway_id`. It is the id of the gateway to which it is connected. This allows to recognise which sensors are connected to the same gateway.
- A `name` for the sensor. This is a more informative name that just the sensor `id`: For example you can give the value `my garden humidity sensor`.
- The `domain` of the sensor. The domain is used to group sensors from the same application domain, for example sensors from a specific farm.
- A `visibility`. Visibility can take the values "public" or "private". See the section "Visibility" for more information.  
- The `location` in latitude/longitude. This is the GPS position of your sensor.
- The `measurements`. The measurements are the physical parameters measured by your sensor.

Measurements correspond to the individual physical sensors attached to your sensor node.
Each measurement have:

- an `id`. This is the id of the measurement, as used by the gateway/device to push the data. For example, "TC" refers to temperature measured, in degrees.
- a `name`. Similar to sensor name, this is a user-readable name for the measurement, such as "temperature".
- a `sensing_device`. This is the kind of physical sensor used: a temperature sensor, a soil moisture sensor...
- a `quantity_kind`. This is what you are really measuring with the sensor. For example, air temperature or water temperature?
- a `unit` of measurement. For example, "DegreeCelcius".

Once you performed the command, your sensor should be immediatly visibile on the dashboard: https://dashboard.waziup.io/sensors/MySensor.
 
Read a list of sensors
======================

Once created, you can read your sensors.
The following command allows you to read a list of all sensors:
```
curl -X GET "https://api.waziup.io/api/v1/sensors" -H "Accept: application/json" 
```
Of course, a lot of different sensors might be returned by this request. By default, the 20 first sensors are returned.
You can filter this list with the following query parameters:

- *q*: filter the list according to some criteria 
- *limit*: number of entris per page
- *offset*: offset for the starting entry

The *q* parameter allows you to filter the list of sensors returned using a criteria.
The format for this parameter is: `q=<field>==<criteria>`.
For instance, here is how you get all the sensors belonging to a particular owner:
```
curl -X GET "https://api.waziup.io/api/v1/sensors?q=owner==cdupont" -H "Accept: application/json" 
```
This will return the list of sensors belonging to user `cdupont`.
All sensor fields can be used to filter the list, such as `owner` or `domain`.
To get more than 20 sensors, you need to use the `limit` query parameter.
It can be used this way:
```
curl -X GET "https://api.waziup.io/api/v1/sensors?limit=100" -H "Accept: application/json" 
```
This query will extand the number of sensors returned to 100.
To get the next 100 sensors, add the `offset` parameter:
```
curl -X GET "https://api.waziup.io/api/v1/sensors?limit=100&offset=100" -H "Accept: application/json" 
```
This command will return the next 100 sensors in the list (i.e. sensors 101 to 200).
To get again the next 100 sensors, increase again the offset parameter to 200.
Please note that the maximum number of sensors that can be returned in a single command is 1000 (by setting `limit=1000`).

Read a particular sensor
========================

If you want to read a single sensor, use this command:
```
curl -X GET "https://api.waziup.io/api/v1/sensors/MySensor" -H "Accept: application/json" 
```
Set the URL parameter `MySensor2` to any sensor name you want.
This will return the full information on that particular sensor:
```
{
  "id": "MySensor2",
  "gateway_id": "XXX",
  "name": "My weather station",
  "location": {
    "latitude": 5.36,
    "longitude": 4.0083
  },
  "date_created": "2018-10-19T09:45:47.00Z",
  "date_modified": "2018-10-19T09:45:47.00Z",
  "domain": "YourDomain",
  "owner": "cdupont",
  "visibility": "public",
  "measurements": [
    {
      "id": "TC",
      "name": "My garden temperature",
      "sensing_device": "SoilThermometer",
      "quantity_kind": "SoilTemperature",
      "unit": "DegreeCelsius",
      "last_value": {
        "value": "25.6",
        "timestamp": "2016-06-08T18:20:27.873Z",
        "date_received": "2018-10-19T10:16:20.00Z"
      },

    }
  ]
}
```

With respect to sensor creation, three additional fields are returned: `date_created`, `date_modified` and `last_value`.
`date_created` and `date_modified` are the date at which you created your sensor, and the date at which you last modified the sensor, respectively.
`last_value` contains the information about the last datapoint that you pushed to your sensor (see Section "push datapoints" below).

Update your sensor node
=======================

Say you want to update the name of the sensor that you just created.
```
curl -X PUT "https://api.waziup.io/api/v1/sensors/MySensor/name" -H  "Content-Type: text/plain" -d "My garden sensor"
```
Notice that we used the "PUT" method and added "/name" at the end of the URL. This sensor name will be updated to the value "My garden sensor".
You can modify individually any field in the sensor this way: name, gateway_id, domain, location and visibility.
Similarly, measurements can be modified:
```
curl -X PUT "https://api.waziup.io/api/v1/sensors/MySensor/measurements/TC/name" -H "Content-Type: text/plain" -d "My garden temperature"
```

Creating measurements
=====================

Measurements can be added individually, even after the sensor has been created.
This is an example of a correct measurement creation:
```
curl -X POST "https://api.waziup.io/api/v1/sensors/MySensor/measurements" -H  "accept: application/json" -H  "Authorization: Bearer <token>" -H  "Content-Type: application/json" -d ‘{ "id": "SM"}’
```
This will add a single measurement called "SM" (for "Soil Moisture") to the sensor named "MySensor".


Push data to your sensor node
=============================

You can push a new datapoint to your sensor.
For example, here is how you can push the value 22.6 to measurement TC of sensor MySensor:

```
curl -X POST "https://api.waziup.io/api/v1/sensors/MySensor/measurements/TC/values" -H  "Content-Type: application/json" -d '{"value": "25.6", "timestamp": "2016-06-08T18:20:27.873Z"}'
```
This will add a new datapoint to your sensor. The field `timestamp` contains the exact date at which this measurement as been taken by your sensor.
This field is optional.
 
Once you pushed the value, You should already check that your datapoint is arrived on the dashboard: https://dashboard.waziup.io/sensors/MySensor/TC. 

Read datapoints
===============

Once you pushed several datapoints to your sensor, it's time to read them.
This is performed by the following command:
```
curl -X GET "https://api.waziup.io/api/v1/sensors/MySensor/measurements/TC/values" -H  "Accept: application/json"
```
This will return the list of datapoints:
```
[
  {
    "timestamp": "2016-06-08T18:20:27.873Z",
    "value": "25.6",
    "date_received": "2018-10-19T10:16:20.000Z"
  },
  {
    "timestamp": "2016-06-20T18:20:27.873Z",
    "value": "30",
    "date_received": "2018-10-20T10:16:21.000Z"
  }
]
```
An additional field is returned: `date_received`. It contains the date at which the value was received on the Cloud platform.
It can be different to `timestamp`: `timestamp` is the date at which the value was measured, while `date_received is the date at which is was received.
As such, `date_received` can have a latter date if there was e.g. network connectivity problems that delayed the sending of the data.

However, there can be a huge number of datapoints registerd on your sensor!
You can filter those datapoints with several query parameters: 

- *lastN*: This parameter allows to return X last datapoints (by timestamp date),
- *limit*: allows to limit the number of datapoints returned (similar to sensor list),
- *offset*: used in combination to `limit`, it allows to paginate the datapoints returned,
- *dateFrom*: sets a minimum timestamp date to retrieve the datapoint list,
- *dateTo*: sets a maximum timestamp date to retrieve the datapoint list.

As an example, here is how to retrieve the first 100 datapoints between two particular dates:
```
curl -X GET "https://api.waziup.io/api/v1/sensors/MySensor/measurements/TC/values?limit=100&offset=0&dateFrom=2016-01-01T00:00:00.000Z&dateTo=2019-01-31T23:59:59.999Z"
```

Delete your sensor node
=======================

Finally, let's destroy this sensor. Perform this command:

```
curl -X DELETE "https//api.waziup.io/api/v1/sensors/MySensor"
```

Poof! Your sensor is gone.
