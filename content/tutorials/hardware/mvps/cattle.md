---
date: 2016-09-13T09:00:00+00:00
title: Cattle management
---

**Discover here how to build a collar to track cattles**

Cattle Rustling is a recurrent phenomenon causing many problems to farmers in Africa.
In order to prevent the cattle rustling in Africa, WAZIUP proposed a prototype based around recent technological advances, specifically LoRa.
This prototype lies on a built-in low-cost LoRa IoT platform that consist of a single low-cost (LoRa) gateway with post-processing abilities, communicating with low-cost (LoRa) end-devices, and back-ended with an IoT cloud platform.

Principle
=========

The prototype is based on LoRa network with a single hop communication where cow are assimilated as end-nodes that periodically send data to a LoRa gateway.
The gateway sends informations related to cows situation to farmer through WAZIUP cloud platform if internet connectivity is available, or directly to the farmer’s smartphone or tablet via WiFi or Bluetooth otherwise.
A designed collar integrating our built-in LoRa end-device is fixed around the cow’s neck.
This collar incorporates a beacon system that will raise an alarm in the case a risk is observed. 

Designed collar
---------------

The idea of collar may not be the major innovation in building this prototype.
However, the vast majority of designed collars for cattle management do not fit well with what is expected in the context of cattle rustling in Africa.
This is due to several reasons, and the most important one is that they are easily removable and thieves can cut the collar without farmer’s awareness.
To overcome this problem we design the collar so that when cut or removed, farmer will be informed.
We first choose a robust belt and more importantly, we passed the alimentation wire of the LoRa end-device around the neck with the belt (Fig 2b).
A beacon message is sent to the gateway when the male connector (MC) and the female connector (FC) of the alimentation wire are connected.
When the gateway receives the beacon message this means everything is fine with the collar. 

![collar](/documentation/mvps/cattle_images/collar.png)
![strap](/documentation/mvps/cattle_images/strap.png)

Beacon system
-------------
A beacon message is sent by end-devices to the gateway when theye MC is connected to the FC.
The beacon message is a counter maned BC (Beacon Counter) that takes value between 0 to 65536.
The BC stars to 0, increases by 1 at each beacon, returns to 0 after 65536 beacons.
The end-device is designed to send, when powered on, a beacon message every 10 min.
The LoRa gateway stores the received beacon message and process it in order to detect whether an alarm should be raised or not.
The processing result can be sent to the WAZIUP cloud if internet connectivity is available or directly to the farmer’s smartphone or tablet (via bluetooth or wifi) if not.
The reception of a beacon message means that the end-device which sends it is in the range of the gateway.
If cows are out of range, or the collar is disconnected or damaged, an alarm will be raised.

![Moo](/documentation/mvps/cattle_images/moo.png)

Deployment
----------

The Prototypes are deployed in CIMEL (Mbakhana, 6 km far from UGB) in Senegal.
A LoRa gateway will be placed up to the UGB library building (height of 90 meters) and some collars with LoRa end-devices putted around the neck of some identified animal.
A collar will actively and periodically send “beacons” to the gateway.

Materials
---------

1. LoRa Gateway

- Raspberry PI (1B/1B+/2B/3B) 
- LoRa radio module : Our prototype is tested and it can work with different LoRa radio module : Libelium SX1272 LoRa, the HopeRF RFM92W/95W, the Modtronix inAir9/9B and the NiceRF SX1276.
- Antenna : Long antenna from Scan Antenna running on 824-894 MHz

![Antenna](/documentation/mvps/cattle_images/antenna.png)
                  
2. LoRa End-devices

- Arduino Nano or Pro Mini : To reduice the size of the collar the end-devices must be small, then we have to use very small microcontrolleurs like arduino nano or pro mini.

![Nano](/documentation/mvps/cattle_images/nano.png)
![Pro Mini](/documentation/mvps/cattle_images/pro_mini.png)

- LoRa radio module + antenna

Our prototype is tested and it can work with different LoRa radio module : Libelium SX1272 LoRa, the HopeRF RFM92W/95W, the Modtronix inAir9/9B and the NiceRF SX1276.
For the end-devices we use small antenna running on 868MHz.

![Antennas](/documentation/mvps/cattle_images/antennas.jpg)
