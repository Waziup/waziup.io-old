---
url: /fr/documentation/mvps/agri
---

### Découvrez ici comment prototype d'une station météo à l'aide de Waziup.

L'objectif est de développer une solution économique et durable capable de lire en temps réel des données typiques d'une station météorologique, en utilisant différents capteurs et capables de communiquer via LoRa. La sous-section suivante est un tutoriel Getting Strated. Vous trouverez la documentation détaillée [ici] [WeatherStationGitHub].


#### Matériel

Le matériel suivant, il est nécessaire pour développer votre propre station:

• [Feather Adafruit 32u4 RFM95 LoRa] [Feather]
• [Adafruit RTC DS3231] [RTC]
• [Shield météo Sparkfun] [Shield]
• [Kit capteurs de pluie et de vent] [WindRain]
• [Antenne 868 Mhz] [Antenna]
• [Câble SMA] [SMA]


#### Bibliothèques
Vous aurez besoin des bibliothèques suivantes. Ils sont disponibles [ici] [Libraries].

• SparkFunHTU21D
• SparkFunMPL3115A2
• RTClib
• LowPower
• Feather_Lib


#### Construction et implémentation

Vous devez suivre les prochaines étapes pour construire et mettre en œuvre la Station météorologique:

1) **Connecter les capteurs de vent et de pluie au Weather Shield**;
Le Weather Shield est livré avec deux espaces de connecteur RJ11 peu peuplés que vous devez souder. Vous devez connecter les câbles Wind et Rain au connecteur RJ11.
[![Sparkfun Weather Station](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/WeatherStationRJ11.jpg)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/WeatherStationRJ11.jpg)

2) **Connectez la plume Adafruit 32u4 avec le bouclier météo Sparkfun**;
[![Adafruit Feather 32u4 with Sparkfun Weather](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/pin_connection.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/pin_connection.png)
[![Adafruit Feather 32u4 with Sparkfun connection Scheme](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/pin_connection2.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/pin_connection2.png)

[![Overall Connection Scheme](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/all_connection.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/all_connection.png)

3) **Connectez l'Antenne 868 MHz à Feather**;
[![Antenna 868 MHz to Feather](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/antenna2feather.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/antenna2feather.png)

4) **Station météorologique construite avec des composants**;
[![Weather Station built with components](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/implemented.png)](https://raw.githubusercontent.com/Waziup/waziup.io/master/content/documentation/mvps/agri_images/implemented.png)


5) **Télécharger l'IDE et le logiciel spécifique**;
N'oubliez pas d'inclure les bibliothèques spécifiques. Pour ce faire, utilisez le gestionnaire de bibliothèque de votre IDE.

6) **Compilez le logiciel**;
Pour cette étape, vous devez compiler le fichier "WAZIUP_Weather_Station_v1.ino". Il s'agit d'un fichier "ready-to-run" qui contient le dernier "firmware" pour échantillonner les capteurs et les données de sortie avec la communication LoRa. Vous donnera toutes les données du capteur: température, humidité, luminosité, pression, alimentation, direction du vent, vitesse du vent et la quantité de pluie. Vous pouvez voir les informations dans votre IDE Serial Monitor et vous pouvez également changer le fichier que vous voulez.


#### Fonctionnement du système

Les étapes suivantes concernent le fonctionnement du système:

1) Allumez la plume. Le script démarre automatiquement lorsque la plume est sous tension;

2) Au début et au cours de son processus de calibrage automatique des capteurs, le voyant vert s'allume (prenez environ 5 secondes).

3) Prevoyez un reveil toutes les 15 minutes, prenez toutes les mesures et envoyez à Gateway.

4) Au moment de la lecture des valeurs par les capteurs et d'envoyer un message à la passerelle LoRa, le voyant bleu s'allume et ensuite: Si la plume ne reçoit pas d'accusé de réception, le voyant bleu s'éteint et Feather dort. Si la plume reçoit l'acquittement de la passerelle maître alors le commutateur bleu de vert au vert pendant 2 secondes, et les plumes commencent à dormir.

5) Quand Plume dort tous les led sont éteints.

6) Plume se réveille après quatre minutes (par défaut), obtenir les mesures et renvoyer à la passerelle maître jusqu'à ce que le sommeil à nouveau.


   [Feather]: <https://www.adafruit.com/product/3078>
   [Shield]: <https://www.sparkfun.com/products/12081>
   [RTC]: <https://www.adafruit.com/product/3013>  
   [WindRain]: <https://www.sparkfun.com/products/8942>
   [Antenna]: <https://www.cooking-hacks.com/868mhz-antenna>
   [SMA]: <https://www.cooking-hacks.com/interface-cable-rp-sma-to-u-fl>
   [Libraries]: <https://github.com/unparallel-innovation/UI_Waziup_Weather_Station/tree/master/WAZIUP%20Weather%20Station%20Client/lib>
   [WeatherStationGitHub]: <https://github.com/unparallel-innovation/UI_Waziup_Weather_Station>