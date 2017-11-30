---
date: 2017-01-16T09:00:00+00:00
title: IoT Challenge Fish Farming
url: /resources/iot-challenge/overall
---

## Description of the project
The goal of the project is to give information to fish farmers located in low income countries about the quality of water in their ponds and support decisions making. From information gathered in the literature, the relevant information for fish ponds monitoring are: water temperature, dissolved oxygen, PH, alkalinity, ammonia, total dissolved solids, carbon dioxide. However, covering all these parameters is highly costly whereas no measures are currently made in the targeted African pond. For our first prototype, we will thus just retrieve temperature, dissolved oxygen and PH and target a trial in a fish farm in Africa, Ghana.
## The solution
Our solution is divided into 3 parts: 

- A buoy equipped with sensors for water quality and system monitoring as well as a renewable energy harvester and LoRa based connectivity to the gateway
- A smart gateway to collect, pre-process and securely send data to the cloud . Advanced functionalities related to device management and cloud disconnect support with local application delivery are planned to be added in a second round.
- A cloud to process, store and provide access to the data through web interfaces or mobile applications

The device electronic with the sensors will be attached to a floating buoy and placed into a pond. The device will be powered by solar energy with a solar panel on top of the buoy. The device will gather the information needed and send it to the IoT gateway.
 Initial discussions took place with the African fish farmer (cat fish farming) to discuss the buoy design.
 
The gateway ensures the connectivity between the sensors and the cloud. It pre-process the data, store it in a local database and send it to the cloud. Several options are available for security among which authentication key and data encryption.


The cloud is composed of an IoT broker and a storage manager. The Iot broker provides pub/sub mechanisms to manage (receive and provide) information. It also provide a messaging system based on subscription. The storage manager of the cloud is for store and retrieve data. The cloud will also provide an API to get an access to the data.
At the end the services provided to the clients will be:

- Data visualisation and exploration on an internet interface
- The send of a sms or voicecall when a data goes beyond user defined thresholds. Mobile application is also an option but smartphone penetration is still low on the end users side. 


This services will help the farmer to maintain his pond. It will help him to know when to treat the water, to change the water level or to feed the fish. The improvement of water quality will increase the productivity of the farm by reducing the fish death rate and provide optimal growth condition for the fishes.
