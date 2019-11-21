---
date: 2018-04-11T09:00:00+00:00
title: Devices 
menu:
  main:
    name: docdashdevices
    title: Devices
    parent: docdashboard
    weight: 3
---

Clicking on the “Devices” menu entry will lead you to the devices page.
If you configured your gateway correctly, you should be able to find your devices in this page!
For example, your [WaziDev](/documentation/wazidev/) should be listed here.


![Devices page](../images/devices.png)

Each device contains a certain number of sensors and actuators (that are often connected to the device board with some wires).
Active sensors are displayed in green, and unactive sensors are in red.
A sensor is deemed unactive if it doesn't send data after 12 hours.

You can filter the list by domain, visibility or status.
If you have a lot of devices, you can often find the one you are looking for by filtering by "Active" or "New".
A device is showed as "New" if it has been created in the last 24 hours.

Device details
--------------

Click on one of your devices.
The following page will show you more details.

![Devices details](../images/device_details.png)

In this screen, you can see the details of your device, with its sensors and actuators.
You can edit your device, input the following:

- Name
- Domain
- Visibility 
- Gateway

The name of you device is important. You should change it as soon as you can, to something significant such as "My weather station".
The domain allows you to group your devices by topics, such as "Agriculture".
You can also set the gateway that is associated with your device. You normally don't need to do that, since your gateway will do it automatically.
Finally, using the map you can change the location of your device.


Sensor details page
-------------------

Click on one of the sensors to open the sensors details page.

![Sensor details](../images/sensorDetails.png)

Remember that the sensors are automatically created by the gateway.
However, we need to "enrich" our sensor by providing some metadata.
Click on the little pen icon next to the sensor.
This will allow to set up:

- a sensor name
- a sensing device. This is the kind of physical sensor used: a temperature sensor, a soil moisture sensor...
- a quantity kind. This is what you are really measuring with the sensor. For example, air temperature or water temperature?
- a unit of measurement.

Setting up this metadata is not mandatory, however is it much better to get if you want to exploit yuor data on the long term.
It will also allow you to create nicer graphics.

