---
date: 2016-09-13T09:00:00+00:00
title: Urban waste management
---

Discover here how to prototype an application for waste management using Waziup. 
**Under construction.**
The goal of this MVP prototype is to provide an overwiew and quick start on how to develop an IoT device for environmental friendly urban waste manamegement. The device is enabling of periodic reading about fill level information for waste bins equipped with a hard top. This is done via ultrasonic distance measurment of the fill level and radio communication of this value via license free LoRa devices to a monitor station. 

Below you find some impressions, a scenario description and some hints how to start developing the electronic and software part of the solution.


## Local African waste soft bin

![bin](/documentation/mvps/waste_images/waste_bin.jpg)

Waste Bin

![bin elec](/documentation/mvps/waste_images/waste_bin_elec.jpg)

Electronic circuit of early experiments running locally.

# Development

## Development - electronics overview

![elec](/documentation/mvps/waste_images/20170208_163157_resized.jpg)

Electronic compoonents for the Urban Waste Management MVP after testing several options and final evaluation: Temperature compensated distance sensor US-100 (Voltage 2.4 - 5.5V), Arduino Pro Mini 3.3V (8MHz) version, energy source (2 or 3 battery type AA), (Radio module -- not visible).

![bin top](/documentation/mvps/waste_images/20170209_115554_resized.jpg)

Top view of the waste bin electronics mounted on a waste bin holder.


![bin top detail](/documentation/mvps/waste_images/20170209_115600_resized.jpg)

Detailed top view of electronics mounted for waste bin fill level experiments.

## Development - hardware list 

- [Arduino Pro Mini 3.3V] (https://www.sparkfun.com/products/11114)
- [InAir9 LoRa module] (http://modtronix.com/inair9.html)
- [Distance and Temperature Sensor] (https://www.bananarobotics.com/shop/US-100-Ultrasonic-Distance-Sensor-Module)
- [Battery AA] (common local shop)
	
## Development - hardware description

## Arduino

The Arduino Pro Mini 3.3V (8MHz) board with his 328P microcrontroller is the "heart" of the electronic assembly. It contains the central steering loop: it reads sensor information via a serial connection and sends it
via the LoRa module. In the following it is shown how to connect the sensor to the Arduino, afterwards it will be shown how to program it. ![Arduino](/images/mvps/water_farming/arduino.JPG)

## LoRa module

 The LoRa chip used here is the inAir9 module.
 
 ![InAir9 and wires](/images/mvps/water_farming/inAir9.jpg)

 Below the wire table of the InAir9 module is shown how to connect it to the arduino.
 
 ![InAir9 and wires](/images/mvps/water_farming/inAir9_table.jpg)
	
	
## Development - hardware connection


# Software

## Program the Arduino

Arduino cna be programmed by sending a set of instructions to the microcrontroller on the board.
To realize that the IDE Arduino Software which uses a simplified version of C++ is applied. The Arduino software can be download [here](https://www.arduino.cc/en/main/software).
Then to connect the Arduino Pro Mini to the computer an USB-FTDI chip as below was aused.

![FTDI Arduino](/images/mvps/water_farming/ftdi_arduino.png)

## Libraries


- [SoftwareSerial library] (https://www.arduino.cc/en/Reference/SoftwareSerial) is used with the distance sensor US-100 via serial communication
- [SX1272 library] (https://github.com/CongducPham/LowCostLoRaGw) is used with LoRa module

## Test scenario EU soft waste bin

![bin almost empty](/documentation/mvps/waste_images/20170209_115643_resized.jpg)
Almost empty German waste bin inside - downside looking view.


![bin comp-62cm](/documentation/mvps/waste_images/20170209_115720_resized.jpg)

Distance measured 62cm for comparison for almost empty trash bin.


![bin meas-65cm](/documentation/mvps/waste_images/20170209_115752_resized.jpg)

Distance measured 65cm with ultrasonic sensor US-100 for almost empty trash bin.


![bin comp-44cm](/documentation/mvps/waste_images/20170209_115856_resized.jpg)

Distance measured 44cm for comparison for 1/3 filled trash bin.


![bin meas-44cm](/documentation/mvps/waste_images/20170209_115912_resized.jpg)

Distance measured 44cm with ultrasonic sensor US-100 for 1/3 filled trash bin.









