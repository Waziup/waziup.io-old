---
title: WaziDev specification
menu:
  main:
    title: Specification 
    parent: docwazidev
    weight: 3
---

Specification
=============

|           |                  |                             |
| ----------------------|:-----------------------|:------------------------------------|
| Processor System      | MCU  <br /> RAM <br />  FLASH      | ATmega328p 8Mhz <br />2 KB <br />32 KB                      |
| Wireless Network      | Standard <br /> Frequency Band <br /> Channels <br /> Transmit Power <br /> Receiver Sensitivity <br /> RF Data Rate <br />  <br /> Modulation <br />  <br /> Function <br /> Antenna connector  |   LoRa <br /> 863-870MHz for Europe/Africa <br /> 1 <br /> +20dBm -100mW constant RF output <br /> -148dBm <br /> 300kbps <br /> <br /> FSK, GFSK, GMSK, MSK, OOK <br />  <br /> Sensor Node <br /> Integrated PCB antenna / External UFL     |
| Indicator and Button  | LED <br />  <br /> Button <br /> On/OFF switch <br /> Regulator Switch <br /><br />  | 4, PWR LED, Indicator LED, Charging/Full battery <br /> <br /> 1, Reset button <br /> 1, two pins for on/off switch + a jumper to keep the board always on <br /> 1, A jumper that can be used to bypass the regulator for low power applications |
| I/O | UART <br /> ICSP <br /> I2C <br /> Analog input <br /> Digital I/O <br /> Extra GND <br /> High Current output <br /> USB <br /> Input power | 1 <br /> 1 <br /> 1 <br /> 8 (Arduino standard pins: A0-A7) <br /> 9  (Arduino pins, some are used by LoRa) <br /> 8 (a Ground Rail) <br /> 2 (max 500mA): M8, M9 <br /> 1, USB micro Type for programming and power <br /> 1, LiPo/Regular Battery |
| Power | Supply voltage <br /> Battery support <br /> Battery charger <br /> Power Consumption <br /> Battery Level monitor <br />  Optimization Jumpers  | 3.3V - 5V <br /> 3v (max 3.6v DIRECT and 6v Regulated) <br /> Max 1A input current (through Micro USB port) <br /> - <br /> LOW active on pin D7 and read BAT level on A7  <br /> 2, Disabling: Status LEDs, Charger LEDs <br /> |
| Environment | Operational Temperature  <br /> Operating Humidity | -20 ~ 70° C <br /><br /> 5% ~ 95% Relative Humidity, non-condensing |
| Mechanical | Dimensions | 70 x 40 mm |
| Programming | IDE | Arduino compatible (Select **Pro Mini 3.3V 8Mhz**) |


