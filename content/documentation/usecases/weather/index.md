---
title: How to prototype a LoRa Weather Station!
layout: singletoc
menu:
  main:
    title: Weather station
    parent: usecases
    weight: 2
---

The objective is to develop a low-cost and sustainable solution capable of reading real-time data typical of a Weather Station, using different sensors, and capable of communicating via LoRa.
The following steps provide a Getting Started tutorial. Detailed documentation, such as the complete Assembly guide and the Technical guide, can be found <a href="https://github.com/Waziup/WAZIUP-WeatherStation/tree/master/extra/documents" target="_blank">here</a>.

The following hardware is required to develop the LoRa Weather Station and can be found in <a href="https://www.iot-catalogue.com/products/59b1797c763cfc066f6d092b" target="_blank">IoT-Catalogue</a> as well.

<p align="center">
  <img src="images/hardware_list.png"/>
</p>



Assembly
========

Follow the next steps to build the LoRa Weather Station. In the initial steps is necessary to solder some components. To help in the solder task can be consulted this <a href="https://learn.adafruit.com/adafruit-guide-excellent-soldering" target="_blank">guide</a>.


{{%action%}}
1. Solder Adafruit Feather M0
{{%/action%}}

Solder the Female Header pins and the uFL SMT Antenna Connector in Feather.

<p align="center">
  <img src="images/feather_solder.png"/>
</p>

Once soldered the uFL SMT Antenna Connector can be connected the 868MHZ Antenna.

<p align="center">
  <img src="images/connect_antenna.png"/>
</p>

{{%action%}}
Solder Sparkfun Weather Shield
{{%/action%}}

Solder the female header pins and the two RJ11 connectors in the Sparkfun Weather Shield.

<p align="center">
  <img src="images/weather_shield_solder.png"/>
</p>

{{%action%}}
Waziup Weather Station PCB
{{%/action%}}

The Waziup Weather Station PCB is open-source, and open-hardware and facilitate the integration of all the components with a plug-and-play approach. All necessary files to build the PCB are hosted in the Waziup GitHub repository and a tutorial with all the step to ordering the PCB is available in Annex A of the Assembly guide.

After ordering and receiving the PCB solder the female header pins, three DG300-5.0 Connectors and a Schottky Diode with the grey terminal placed up in the PCB.

<p align="center">
  <img src="images/pcb_solder.png"/>
</p>

If is not possible to use the Waziup Weather Station PCB, can be used a breadboard and cables to make the connections between the components. as suggested in the Annex B of the Assembly guide.

{{%action%}}
Plug Weather Shield and Feather
{{%/action%}}

<p align="center">
  <img src="images/plug_shiled_feather.png"/>
</p>

{{%action%}}
Screw External Sensor
{{%/action%}}

<p align="center">
  <img src="images/screw_external_sensor.png"/>
</p>

{{%action%}}
Screw Solar Panel
{{%/action%}}

<p align="center">
  <img src="images/screw_solar_panel.png"/>
</p>

{{%action%}}
Connect the Battery
{{%/action%}}

<p align="center">
  <img src="images/connect_battery.png"/>
</p>


{{%action%}}
Connect Weather Meters
{{%/action%}}

Pay attention and connect the Rain and Wind RJ11 cables in the respective places as shown in the following figure.

<p align="center">
  <img src="images/connect_weather_meters.png"/>
</p>



Software
========


{{%action%}}
Download & Install Arduino
{{%/action%}}

To download the Arduino IDE 1.6.6 or later go to the Arduino <a href="https://www.arduino.cc/en/Main/Software" target="_blank">website</a>.

{{%action%}}
Add Adafruit Boards to Arduino
{{%/action%}}

To add the Adafruit Boards in the Arduino IDE go to “Arduino”, “Preferences” and include the link for Adafruit boards in the "Additional Boards Manager URLs".
This link can be found in the official Adafruit <a href="https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module/setup" target="_blank">guide</a>.

{{%action%}}
Install Adafruit Boards in Arduino
{{%/action%}}

To install the Adafruit Boards in Arduino IDE go to  “Tools”, “Board”, access the “Board Manager” and follow the steps in the official Adafruit <a href="https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module/using-with-arduino-ide" target="_blank">guide</a>.

{{%action%}}
Download & Install Weather Station library
{{%/action%}}

To download the Weather Station library go the <a href="https://github.com/Waziup/WAZIUP-WeatherStation" target="_blank">Waziup Github</a>, click on “Clone or download” green button located in the right side and choose “Download Zip” option to download the “WAZIUP-WeatherStation-master.zip” file.
To install the Weather Station library go to, in Arduino IDE, “Sketch”, “Include Library” and click in the “Add .ZIP Library” option. Will appear a window where need to be added the zip file.

{{%action%}}
Open Weather Station example code
{{%/action%}}

To open the Waziup Weather Station code go to “File”, “Examples”, “Waziup Weather Station” and click in the “WaziupWeatherStation” example.

{{%action%}}
Choose Board & USB Port in Arduino
{{%/action%}}

After connecting the micro-USB cable from the computer to the Feather, it is necessary to choose the correct Adafruit Feather Board in the Arduino IDE. To do that go to “Tools”, “Board” and click in the “Adafruit Feather M0”.
To define the USB port go to "Tools”, “Port” and click in the “Adafruit Feather M0”.

{{%action%}}
Upload the Weather Station software
{{%/action%}}

To upload the software in the Adafruit Feather M0 just need to click in the “Upload” button presented in the upper left side of the Arduino IDE.
After concluding the upload with success, a message will appear in the lower left side.
To open the Arduino Serial Monitor and visualize the LoRa Weather Station workflow click in upper right side button.


Deployment
==========

{{%action%}}
Assembly Weather Station in a Box
{{%/action%}}

It is recommended to use a box to place the assembly Weather Station in the desired location. The following figures show, as an example, the Waziup Weather Station in a box that not needs to be the same. Pay attention to the material that the box is made. To place the Weather Station in locations under the rain, it is convenient to use a waterproof box.

<p align="center">
  <img src="images/ws_in_box.png"/>
</p>


{{%action%}}
External Sensor outside the box
{{%/action%}}

Make sure that the external sensor is slightly out of the box, as shown in the box of Figure, and preferably in a shadow location without sun.

<p align="center">
  <img src="images/external_sensor_ouside_box.png"/>
</p>

{{%action%}}
Assembly Weather Meters sensors
{{%/action%}}

The Weather Meters come with material components, to allow their assembly in an auxiliary structure. To mount it is recommended to perform the suggested steps in the Sparkfun's <a href="https://learn.sparkfun.com/tutorials/weather-meter-hookup-guide" target="_blank">guide</a>.

{{%action%}}
Solar Panel outside the box
{{%/action%}}

Place the Solar Panel outside the box in a place where it is possible to guarantee the conditions of implementation. To realize and ensure a correct Solar Panel implementation it is recommended to consult the "Solar Panel Deployment" document that is available in folder “documents” in the Waziup Weather Station <a href="https://github.com/Waziup/WAZIUP-WeatherStation" target="_blank">Github</a>.

<p align="center">
  <img src="images/solar_panel_outside_box.png"/>
</p>

The hole created for the external sensor can be used to route the Solar Panel cables as well as the RJ11 Rain and Wind sensor cables.

After complete these steps, the Waziup LoRa Weather Station is ready to receive the measurements and send the information to the LoRa gateway.
