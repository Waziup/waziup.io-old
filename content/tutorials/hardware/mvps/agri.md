---
url: /documentation/mvps/agri
---

### Découvrez ici comment prototype d'une station météo à l'aide de Waziup.

L'objectif est de développer une solution économique et durable capable de lire en temps réel des données typiques d'une station météorologique, en utilisant différents capteurs et capables de communiquer via LoRa. La sous-section suivante est un tutoriel Getting Strated. Vous trouverez la documentation détaillée [here] [WeatherStationGitHub].

#### Matériel

Le matériel suivant, il est nécessaire pour développer votre propre station:

• [Feather Adafruit 32u4 RFM95 LoRa] [Feather]
• [Adafruit RTC DS3231] [RTC]
• [Bouclier météo Sparkfun] [Bouclier]
• [Kit capteurs de pluie et de vent] [WindRain]
• [Antenne 868 Mhz] [Antenne]
• [Câble SMA] [SMA]

#### Bibliothèques
Vous aurez besoin des bibliothèques suivantes. Ils sont disponibles [ici] [Bibliothèques].

• SparkFunHTU21D
• SparkFunMPL3115A2
• RTClib
• LowPower
• Feather_Lib


#### Construction et implémentation

Vous devez suivre les prochaines étapes pour construire et mettre en œuvre la Station météorologique:

1) ** Connecter les capteurs de vent et de pluie au Weather Shield **;
Le Weather Shield est livré avec deux espaces de connecteur RJ11 peu peuplés que vous devez souder.Vous devez connecter les câbles Wind et Rain au connecteur RJ11
[![Sparkfun Weather Station](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/WeatherStationRJ11.jpg)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/WeatherStationRJ11.jpg)

#### Bibliothèques
2) ** Reliez la plume Adafruit 32u4 avec le bouclier météo Sparkfun **;
[![Adafruit Feather 32u4 with Sparkfun Weather](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/pin_connection.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/pin_connection.png)
[![Adafruit Feather 32u4 with Sparkfun connection Scheme](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/pin_connection2.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/pin_connection2.png)

[![Overall Connection Scheme](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/all_connection.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/all_connection.png)

3) ** Connectez l'antenne 868 MHz à Feather **;
[![Antenna 868 MHz to Feather](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/antenna2feather.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/antenna2feather.png)

4) **Weather Station built with components**;
[![Weather Station built with components](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/implemented.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/implemented.png)


5) **Download the IDE and specific software**;
Don't forget to include the specific libraries. To did this use the Library Manager of your IDE.

6) **Compile the software**;
To this step you need to compile the "WAZIUP_Weather_Station_v1.ino" file. This is a "ready-to-run" file that contains the latest "firmware" to sample the sensors and output data with LoRa communication. Will give you all the sensor data: Temperature, Humidity, Luminosity, Pressor, Supply, Wind Direction, Wind speed and the Amount of Rain. You can see the info in your IDE Serial Monitor and you can also change the file has you want.

#### System Running

The following steps are about how the system works:

1)	Power-on the Feather. The script starts automatically when feather is powered on;
2)	At the start and during its automatic sensors calibration process the green led appears on (take about 5 seconds). 
3)	Wakes-up every 15 min, take all the measurements and send to Gateway.
4)	At the moment of reading values by the sensors and send a message to LoRa gateway the blue led turns on and then: If feather does not receive acknowledge then the blue led turns off and Feather sleeps. If feather receive acknowledge from master gateway then the blue led switch to green for 2 seconds, and feathers start sleeping.
5)	When Feather sleeps all led’s are off.
6)	Feather wakes up after four minute (by default), get the measurements and send back to master gateway until sleeping again.


   [Feather]: <https://www.adafruit.com/product/3078>
   [Shield]: <https://www.sparkfun.com/products/12081>
   [RTC]: <https://www.adafruit.com/product/3013>  
   [WindRain]: <https://www.sparkfun.com/products/8942>
   [Antenna]: <https://www.cooking-hacks.com/868mhz-antenna>
   [SMA]: <https://www.cooking-hacks.com/interface-cable-rp-sma-to-u-fl>
   [Libraries]: <https://github.com/unparallel-innovation/UI_Waziup_Weather_Station/tree/master/WAZIUP%20Weather%20Station%20Client/lib>
   [WeatherStationGitHub]: <https://github.com/unparallel-innovation/UI_Waziup_Weather_Station>