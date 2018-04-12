---
date: 2017-03-22T00:40:03Z
title: Gestion des déchets urbains
url: /fr/documentation/mvps/urban
---

Découvrez ici comment prototype d'une application pour la gestion des déchets à l'aide de Waziup.

**En construction.**
Le but de ce prototype MVP est de fournir une vue d'ensemble et un début rapide sur la façon de développer un dispositif IoT pour la gestion écologique des déchets urbains. Le dispositif permet la lecture périodique d'informations de niveau de remplissage pour des poubelles équipées d'un toit rigide. Ceci se fait par mesure ultrasonore de distance du niveau de remplissage et communication radio de cette valeur via des dispositifs LoRa sans licence à une station de surveillance.

Vous trouverez ci-dessous quelques impressions, une description de scénario et quelques conseils pour commencer à développer la partie électronique et logicielle de la solution.

## Déchets locaux africains

![bin](/documentation/mvps/waste_images/waste_bin.jpg)

Poubelle

![bin elec](/documentation/mvps/waste_images/waste_bin_elec.jpg)

Circuit électronique de premières expériences en cours localement.

# Développement

## Développement - aperçu électronique

![elec](/documentation/mvps/waste_images/20170208_163157_resized.jpg)

Capteur de distance à compensation de température US-100 (tension 2.4 à 5.5V), version Arduino Pro Mini 3.3V (8MHz), source d'énergie (2 ou 3 batteries de type AA ), (Module radio - non visible).

![bin top](/documentation/mvps/waste_images/20170209_115554_resized.jpg)

Vue de dessus de l'électronique de poubelle montée sur un support de poubelle.


![bin top detail](/documentation/mvps/waste_images/20170209_115600_resized.jpg)

Vue de dessus détaillée de l'électronique montée pour des expériences de niveau de remplissage de poubelle.

## Développement - liste des matériels 

- [Arduino Pro Mini 3.3V] (https://www.sparkfun.com/products/11114)
- [Module InAir9 LoRa] (http://modtronix.com/inair9.html)
- [Capteur de distance et de température] (https://www.bananarobotics.com/shop/US-100-Ultrasonic-Distance-Sensor-Module)
- [Batterie AA] (common local shop)
    
## Développement - description du matériel

## Arduino

La carte Arduino Pro Mini 3.3V (8MHz) avec son microcrouleur 328P est le "cœur" de l'assemblage électronique. Il contient la boucle de direction centrale: il lit les informations du capteur via une connexion série et les envoie
Via le module LoRa. Dans ce qui suit, il est montré comment connecter le capteur à l'Arduino, puis il sera montré comment le programmer. ![Arduino](/images/mvps/water_farming/arduino.JPG)

## LoRa module

  La puce LoRa utilisée ici est le module inAir9.

 ![InAir9 and wires](/images/mvps/water_farming/inAir9.jpg)

 Au-dessous de la table filaire du module InAir9 est montré comment le relier à l'arduino.
 
 ![InAir9 and wires](/images/mvps/water_farming/inAir9_table.jpg)
    
## Capteur ultrasonique de distance US-100

L'utilisation de l'US-100 en mode de données série fournit une grande précision et une faible puissance de calcul à la carte mère arduino:

Sélectionnez le mode de fonctionnement du capteur de distance ultrasonique US-100 en utilisant le cavalier à l'arrière du module. Lorsque le cavalier est présent (choisir le mode de données série), le capteur émet la distance en tant que données binaires en série. Configuration de l'interface série du mode UART Vitesse de transmission 9600, démarrage d'un, et arrêt des bits a, bits de données, huit et contrôle de parité blanche, pas de contrôle de flux.

Attachez le module à un port série sur votre microcontrôleur. La broche Trig / TX se connecte à la ligne de transmission série TX de votre microcontrôleur. La broche Echo / RX se connecte à la ligne de réception série RX de votre microcontrôleur. Définissez le port série du microcontrôleur pour utiliser 9600 baud à 8-N-1 (huit bits de données, sans parité, un bit d'arrêt).

Pour commencer à mesurer la distance, sortez un 0x55 sur le port série et relisez la distance de deux octets en octet haut, format octet bas. La distance renvoyée est mesurée en millimètres. Utilisez la formule suivante pour obtenir la distance en millimètres:

    Millimetres = PremierOctetLu * 256 + DeuxiemeOctetLu

Ce module peut également émettre la température en utilisant le mode de sortie série. Pour lire la température, émettre un octet 0x50 sur le port série et lire un seul octet de température. La température réelle est obtenue en utilisant la formule suivante:

    Celsius = OctetLu - 45
    
## Développement - connexion matérielle


# Logiciel

## Programmer l'Arduino

Arduino peut être programmé en envoyant un ensemble d'instructions au microcroller sur la carte.
Pour réaliser que le logiciel IDE Arduino qui utilise une version simplifiée de C ++ est appliqué. Le logiciel Arduino peut être téléchargé [here](https://www.arduino.cc/en/main/software).
Ensuite, pour connecter l'Arduino Pro Mini à l'ordinateur une puce USB-FTDI comme ci-dessous a été utilisé.

![FTDI Arduino](/images/mvps/water_farming/ftdi_arduino.png)

## Bibliothèques


- [SoftwareSerial library] (https://www.arduino.cc/en/Reference/SoftwareSerial) est utilisé avec le capteur de distance US-100 via une communication série
- [SX1272 library] (https://github.com/CongducPham/LowCostLoRaGw) est utilisé avec le module LoRa

### Module LoRa

Pour envoyer les données de niveau de remplissage mesurées via la radio LoRa, la bibliothèque SX1272 est utilisée. Des exemples d'utilisation de cette bibliothèque sont disponibles [here](https://github.com/CongducPham/LowCostLoRaGw/tree/master/Arduino).

### Module capteur de distance

Pour obtenir la mesure de distance (et par nature de température) à partir du capteur US-100, la bibliothèque SoftwareSerial est utilisée pour l'exécuter en mode série (plus précis que le PWM).
Voici un exemple de code utilisé:

    
    // Essai de distance et de température pour module capteur US-100
    // utilisant Arduino Pro Mini de 3,3 V alimentant le US-100 via ArduinoGPIO
    // adapté de Zeisberg, janvier 2017
    // Original de RafaG, 2014  

    #include <SoftwareSerial.h>;
    
    const int US100_TX = 6;
    const int US100_RX = 5;
 
    // instntiation of a new serial channel
    SoftwareSerial portUS100(US100_RX, US100_TX);
 
    unsigned int MSByteDist = 0;
    unsigned int LSByteDist = 0;
    unsigned int mmDist = 0;
    int temp = 0;
 
    void setup() {
        // provide VCC to US100 via GPIO 4 to enable later energy saving function 
        pinMode(4, OUTPUT);
        digitalWrite(4, HIGH);
    
    Serial.begin(9600);
    portUS100.begin(9600);
    
    }
 
    void loop() {
 
    portUS100.flush(); // limpia el buffer del puerto serie
    portUS100.write(0x55); // orden de medición de distancia
 
    delay(500);
 
    if(portUS100.available() >= 2) // comprueba la recepción de 2 bytes
    {
        MSByteDist = portUS100.read(); // lectura de ambos bytes
        LSByteDist  = portUS100.read();
        mmDist  = MSByteDist * 256 + LSByteDist; // distancia
        if((mmDist > 1) && (mmDist < 10000)) // comprobación de la distancia dentro de rango
        {
            Serial.print("Distance: ");
            Serial.print(mmDist, DEC);
            Serial.println(" mm");
        }
    }
 
    portUS100.flush(); // limpia el buffer del puerto serie
    portUS100.write(0x50); // orden de medición de distancia
 
    delay(500);
    if(portUS100.available() >= 1) // comprueba la recepción de 1 byte
    {
        temp = portUS100.read(); // lectura del byte
        if((temp > 1) && (temp < 130)) // comprobación de rango válido
        {
            temp -= 45; // corrige offset de 45º
            Serial.print("Temperature: ");
            Serial.print(temp, DEC);
            Serial.println(" Grad Celsius.");
        }
    }
 
    delay(1000);
    }

## Scénario de test

![bin front view](/documentation/mvps/waste_images/20170209_115618_resized.jpg)
Vue de face du système expérimental de gestion des déchets urbains de MVP avec bac souple et toit rigide.

![bin inside top](/documentation/mvps/waste_images/20170209_115629_resized.jpg)
Vue de dessus à l'intérieur depuis le bas - montrant le capteur en regardant vers le bas pour estimer la distance entre le haut et la surface des déchets.

![bin almost empty](/documentation/mvps/waste_images/20170209_115643_resized.jpg)
Poubelle allemande presque vide à l'intérieur - vue de dessous.


![bin comp-62cm](/documentation/mvps/waste_images/20170209_115720_resized.jpg)
Distance mesurée 62cm pour la comparaison pour la poubelle presque vide.


![bin meas-65cm](/documentation/mvps/waste_images/20170209_115752_resized.jpg)
Distance mesurée 65cm avec capteur ultrasonique US-100 pour poubelle presque vide.

![bin comp-44cm](/documentation/mvps/waste_images/20170209_115856_resized.jpg)
Distance mesurée 44cm pour comparaison pour 1/3 rempli poubelle.


![bin meas-44cm](/documentation/mvps/waste_images/20170209_115912_resized.jpg)
Distance mesurée 44cm avec capteur ultrasonore US-100 pour 1/3 rempli poubelle.








