::: {#wrapper}
::: {.navbar-header}
[]{.sr-only} []{.icon-bar} []{.icon-bar} []{.icon-bar}
:::

::: {.header-right}
:::

::: {.sidebar-collapse}
-   ::: {.user-img-div}
    ![](../../assets/img/uppalogo.jpg){.img-thumbnail width="75%"}
    ![](../../assets/img/waziuplogo.png){.img-thumbnail width="75%"}
    ![](../../assets/img/wazihublogo.png){.img-thumbnail width="75%"}
    :::

-   [Home](../../index.html)
-   [Introduction to Arduino
    IDE](../introduction_Arduino_IDE/intro_Arduino_IDE.html)
-   [Measuring temperature []{.fa .arrow}](#)
    -   [LM35 Sensor](../temperature/lm35.html)
    -   [DS18B20 Sensor](../temperature/ds18b20.html)
-   [Measuring distance []{.fa .arrow}](#)
    -   [HC\_SR04 Sensor](../distance/hc-sr04.html)
    -   [HRLV-MAXSONAR-EZ](../distance/hrlv.html)
-   [Measuring humidity []{.fa .arrow}](#){.active-menu}
    -   [808H5V5 Sensor](){.active-menu}
    -   [DHT22 Sensor](../humidity/dht22.html)
    -   [Soil humidity Sensor](../humidity/soil-humidity.html)
    -   [SHT](../humidity/SHT.html)
    -   [Water level sensor](../humidity/water-sensor.html)
-   [Detecting motion []{.fa .arrow}](#)
    -   [PIR Sensor](../motion/pir.html)
-   [Measuring Light []{.fa .arrow}](#)
    -   [Photoresistor Sensor](../light/photoresistor.html)
-   [Measuring Sound Level[]{.fa .arrow}](#)
    -   [MIC Sensor](../sound/microphone.html)
-   [RFID []{.fa .arrow}](#)
    -   [RFID & MFRCC522](../RFID/RFID.html)
-   [Using GPS](../GPS/gps.html)
-   [Connecting an OLED screen](../connecting_OLED/SHT_with_OLED.html)
-   [Use Board with WiFi[]{.fa .arrow}](#)
    -   [ESP8286 and ESP32](../board_with_WiFi/board_with_WiFi.html)
-   [Publish using MQTT](../publish_using_MQTT/publish_using_MQTT.html)
-   [LoRa devices []{.fa .arrow}](#)
    -   [Introduction to LoRa](../lora_sensor/lora_sensor.html)
    -   [Arduino LoRa demo
        sensor](../lora_sensor/Arduino_lora_demo.html)
    -   [Arduino LoRa simple
        temp](../lora_sensor/Arduino_lora_simple_temp.html)
-   [WaziDev board](../WaziDev_board/WaziDev.html)
:::

::: {#page-wrapper}
::: {#page-inner}
::: {.row}
::: {.col-md-12}
808H5V5 Humidity Sensor {#h5v5-humidity-sensor .page-head-line}
=======================

#####  {#section .page-subhead-line}
:::
:::

::: {.row}
::: {.col-md-12}
::: {.panel .panel-default}
::: {.panel-heading}
#### Overview
:::

::: {.panel-body}
::: {#wizard}
::: {.section}
::: {.col-md-3}
::: {.portfolio-item .awesome .mix_all data-cat="awesome"}
![](img/808h5v5.jpg){.img-responsive}
:::
:::

808H5V5 humidity sensor measures relative humidity in the range of 0 to
100% with accuracy better than 4% when relative humidity (RH) is between
30% and 80%. It operates from a 5V DC supply and typically draws 0.38mA.
It has a three-pin interface with 2.54mm pin spacing, making it
compatible with typical breadboards and prototyping boards. By measuring
its output voltage, you can determine the relative humidity of the
sensor\'s environment. Documentation for this humidity sensor is
available
[here](http://www.cooking-hacks.com/skin/frontend/default/cooking/pdf/Humedad-808H5V5.pdf).

::: {.row}
::: {.col-md-12}
::: {.panel .panel-default}
::: {.panel-heading}
#### Connecting to Arduino
:::

::: {.panel-body}
::: {#wizard}
::: {.section}
808H5V5 Humidity sensor has the pins marked [- V +]{style="color:red"}.
Wired as follows:

::: {.col-md-4}
::: {.panel-body}
::: {.table-responsive}
  808H5V5 Sensor Pins   Arduino Pins
  --------------------- --------------
  \-                    GND
  V                     A0
  \+                    5V
:::
:::
:::
:::
:::
:::
:::
:::
:::

::: {.row}
::: {.col-md-12}
::: {.panel .panel-default}
::: {.panel-heading}
#### Code example
:::

::: {.panel-body}
::: {#wizard}
::: {.section}
``` {.src_code}
/********************
 *  Program:  808H5V5 sensor tester
 *  http://www.cooking-hacks.com/skin/frontend/default/cooking/pdf/Humedad-808H5V5.pdf
 ********************/

float hum = 0;
float voltage = 0;
float percentRH = 0;

void setup() {
// to run once
Serial.begin(38400); // Initialize the serial port
}

void loop() {
hum = analogRead(0); // Read voltage coming from sensor (value will be between 0-1023)
voltage = hum * 5.0 / 1024.0; // Translate value into a voltage value
percentRH = (voltage - 0.788) / 0.0314; // Translate voltage into percent relative humidity

Serial.print("Read value is ");
Serial.print(hum);
Serial.print(".   Output voltage is ");
Serial.print(voltage);
Serial.print(" .    %RH = ");
Serial.println(percentRH,DEC); 
delay(2000);
}
```
:::
:::

The raw source of the sketch example is visible
[here](../../assets/src/sketch/Arduino_808h5v5_hum/Arduino_808h5v5_hum.ino).
:::
:::
:::

go to top
:::

Enjoy!

::: {#footer-sec}
© 2018 - Muhammad Ehsan, Mamour Diop & Congduc Pham
:::
:::
:::
:::
:::
:::
:::
:::
:::
:::
