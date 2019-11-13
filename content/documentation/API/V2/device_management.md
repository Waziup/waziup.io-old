---
title: API V2 Sensor management
menu:
  main:
    title: Sensor management
    name: sensormanagement
    parent: v2docapi
    weight: 2
---

This tutorial will guide you through the Waziup API version 2, step by step.
We will create a device, update its attributes and then delete it.
We will perform all the commands without authentication, so the sensor created will be public.
If you want to know more about private sensors, see [this tutorial](../access_control).

First of all, open the API documentation available at https://api.waziup.io/docs.
With this website, you can explore and interact with all the endpoints of the Waziup API.

Create a device
===============

We will create a device named "MyDevice".

```
curl -X POST "https://api.waziup.io/api/v2/devices" -H  "Content-Type: application/json" -d '{"id": "MyDevice"}'
```

You just created a device! You can already go on [Waziup dashboard](http://dashboard.waziup.io/devices/MyDevice) and find it among the devices.

There are 3 parts to this command:

- the method: `POST`
- the URL: `https://api.waziup.io/api/v2/devices`
- a header: `accept: application/json`
- and the data: `{"id": "MyDevice"}`

The HTTP protocol supports several methods. The most used are GET, PUT, POST and DELETE.
They are used to act on a *resource*.
The resource is identified by an URL, here `https://api.waziup.io/api/v2/devices`.
The data is the content of the request. 
In our example, the data section contains the id of the device.
Finally, the Header provide additional technical information about the request.
In this case, we specify that the request data is made with JSON.

Here a more complete example:

```
curl -X POST "https://api.waziup.io/api/v2/devices" -H "Content-Type: application/json" -d @- <<EOF 
{
  "id": "MyDevice",
  "gateway_id": "XXX",
  "name": "My weather station",
  "visibility": "public",
  "location": {
    "latitude": 5.36,
    "longitude": 4.0083
  },
  "sensors": [
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

- The `id` of the device. The `id` it should be unique among all devices. It is used by physical gateway and devices to push the data (see section "push your data").
- A `gateway_id`. It is the id of the gateway to which it is connected. This allows to recognise which devices are connected to the same gateway.
- A `name` for the device. This is a more informative name that just the device `id`: For example you can give the value `my garden humidity device`.
- The `domain` of the sensor. The domain is used to group sensors from the same application domain, for example sensors from a specific farm.
- A `visibility`. Visibility can take the values "public" or "private". See the section "Visibility" for more information.  
- The `location` in latitude/longitude. This is the GPS position of your device.
- The `sensors`. The sensors are the physical sensors connected to your device.

Sensors correspond to the individual physical sensors attached to your device.
Each sensor have:

- an `id`. This is the id of the sensor, as used by the gateway/device to push the data. For example, "TC" refers to a temperature sensor, measuring temperature in degrees.
- a `name`. Similar to device name, this is a user-readable name for the sensor, such as "temperature".
- a `sensing_device`. This is the kind of physical sensor used: a temperature sensor, a soil moisture sensor...
- a `quantity_kind`. This is what you are really measuring with the sensor. For example, air temperature or water temperature?
- a `unit` of measurement. For example, "DegreeCelcius".

Once you performed the command, your device should be immediatly visibile on the dashboard: https://dashboard.waziup.io/devices/MyDevice.
 
Read a list of devices
======================

Once created, you can read your devices.
The following command allows you to read a list of all devices:
```
curl -X GET "https://api.waziup.io/api/v2/devices" -H "Accept: application/json" 
```
Of course, a lot of different devices might be returned by this request. By default, the 20 first devices are returned.
You can filter this list with the following query parameters:

- *q*: filter the list according to some criteria 
- *limit*: number of entries per page
- *offset*: offset for the starting entry

The *q* parameter allows you to filter the list of devices returned using a criteria.
The format for this parameter is: `q=<field>==<criteria>`.
For instance, here is how you get all the devices belonging to a particular owner:
```
curl -X GET "https://api.waziup.io/api/v2/devices?q=owner==cdupont" -H "Accept: application/json" 
```
This will return the list of devices belonging to user `cdupont`.
All device fields can be used to filter the list, such as `owner`.
To get more than 20 devices, you need to use the `limit` query parameter.
It can be used this way:
```
curl -X GET "https://api.waziup.io/api/v2/devices?limit=100" -H "Accept: application/json" 
```
This query will extand the number of devices returned to 100.
To get the next 100 devices, add the `offset` parameter:
```
curl -X GET "https://api.waziup.io/api/v2/devices?limit=100&offset=100" -H "Accept: application/json" 
```
This command will return the next 100 devices in the list (i.e. devices 101 to 200).
To get again the next 100 devices, increase again the offset parameter to 200.
Please note that the maximum number of devices that can be returned in a single command is 1000 (by setting `limit=1000`).

Read a particular device
========================

If you want to read a single device, use this command:
```
curl -X GET "https://api.waziup.io/api/v2/devices/MyDevice" -H "Accept: application/json" 
```
Set the URL parameter `MyDevice` to any device ID you want.
This will return the full information on that particular device:
```
{
  "id": "MyDevice",
  "gateway_id": "XXX",
  "name": "My weather station",
  "location": {
    "latitude": 5.36,
    "longitude": 4.0083
  },
  "date_created": "2018-10-19T09:45:47.00Z",
  "date_modified": "2018-10-19T09:45:47.00Z",
  "owner": "cdupont",
  "visibility": "public",
  "sensors": [
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
      }
    }
  ]
}
```

With respect to device creation, three additional fields are returned: `date_created`, `date_modified` and `last_value`.
`date_created` and `date_modified` are the date at which you created your device, and the date at which you last modified the device, respectively.
`last_value` contains the information about the last datapoint that you pushed to your sensor (see Section "push datapoints" below).

Update your device
==================

Say you want to update the name of the device that you just created.
```
curl -X PUT "https://api.waziup.io/api/v2/devices/MyDevice/name" -H  "Content-Type: text/plain" -d "My garden device"
```
Notice that we used the "PUT" method and added "/name" at the end of the URL. This device name will be updated to the value "My garden device".
You can modify individually any field in the device this way: name, gateway_id, domain, location and visibility.
Similarly, sensors can be modified:
```
curl -X PUT "https://api.waziup.io/api/v2/devices/MyDevice/sensors/TC/name" -H "Content-Type: text/plain" -d "My garden device"
```

Create sensors
==============

Sensors can be added individually, even after the device has been created.
This is an example of a correct sensor creation:
```
curl -X POST "https://api.waziup.io/api/v2/devices/MyDevice/sensors" -H "accept: application/json" -H  "Content-Type: application/json" -d ‘{ "id": "SM"}’
```
This will add a single sensor called "SM" (for "Soil Moisture") to the device named "MyDevice".

Check your sensor
=================

This is an example of a reading a single sensor:
```
curl -X GET "https://api.waziup.io/api/v2/devices/MyDevice/sensors/TC" -H "accept: application/json"
```
This will return the sensor called "SM" for the device named "MyDevice".
```
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
  }
}
```
If the sensor doesn't exist, an error "404" will be returned.

Push data to your sensor
========================

You can push a new datapoint to your sensor.
For example, here is how you can push the value 22.6 to sensor TC of device MyDevice:

```
curl -X POST "https://api.waziup.io/api/v2/devices/MyDevice/sensors/TC/values" -H "Content-Type: application/json" -d '{"value": "25.6", "timestamp": "2016-06-08T18:20:27.873Z"}'
```
This will add a new datapoint to your sensor. The field `timestamp` contains the exact date at which this measurement as been taken by your sensor.
This field is optional.
 
Once you pushed the value, You should already check that your datapoint is arrived on the dashboard: https://dashboard.waziup.io/devices/MyDevice/sensors/TC. 

Read datapoints
===============

Once you pushed several datapoints to your sensor, it's time to read them.
This is performed by the following command:
```
curl -X GET "https://api.waziup.io/api/v2/devices/MyDevice/sensors/TC/values" -H "Accept: application/json"
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

However, there can be a huge number of datapoints registered on your sensor!
You can filter those datapoints with several query parameters: 

- *lastN*: This parameter allows to return X last datapoints (by timestamp date),
- *limit*: allows to limit the number of datapoints returned (similar to sensor list),
- *offset*: used in combination to `limit`, it allows to paginate the datapoints returned,
- *dateFrom*: sets a minimum timestamp date to retrieve the datapoint list,
- *dateTo*: sets a maximum timestamp date to retrieve the datapoint list.

As an example, here is how to retrieve the first 100 datapoints between two particular dates:
```
curl -X GET "https://api.waziup.io/api/v2/device/MyDevice/sensors/TC/values?limit=100&offset=0&dateFrom=2016-01-01T00:00:00.000Z&dateTo=2019-01-31T23:59:59.999Z"
```

Delete your device
==================

Finally, let's destroy this device. Perform this command:

```
curl -X DELETE "https//api.waziup.io/api/v2/devices/MyDevice"
```

Poof! Your sensor is gone.
