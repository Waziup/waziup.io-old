---
date: 2017-03-22T00:40:09Z
title: Prototype de pisciculture
url: /fr/documentation/mvps/water
---

![buoy_ghana](https://github.com/Waziup/waziup.io/blob/master/content/documentation/mvps/water_images/presentation_buoy_ghana.jpg?raw=true)

**Découvrez ici comment prototype d'une application de pisciculture à l'aide de Waziup.**

Le but de ce prototype est de donner un premier aperçu de la façon de développer un dispositif IoT pour la pisciculture. Le dispositif est capable de donner une lecture en temps réel des informations pertinentes pour les étangs de poissons tels que l'acidité,
Oxygène dissous et communiquer ces données via LoRa. Vous trouverez ci-dessous un didacticiel de démarrage: comment développer la partie électronique et logicielle de la solution.


## Mesure

Les mesures prises par le dispositif sont la température, l'oxygène dissous et l'acidité de l'eau. L'appareil est alimenté par un panneau solaire avec une batterie.
La solution sera placée dans une boîte étanche pour protéger l'électronique, nous obtenons également la température et l'humidité dans la boîte. La dernière valeur contrôlée
Est la tension de la batterie.


## Matériel


- [Arduino Pro Mini 3.3V] (https://www.sparkfun.com/products/11114)
- [Module InAir9 LoRa] (http://modtronix.com/inair9.html)
- [Capteur de température (pour eau)] (https://www.sparkfun.com/products/11050)
- [Capteur de température et d'humidité] (http://www.robotshop.com/eu/fr/capteur-humidite-temperature-dht22.html)
- [Capteur DO] (https://www.sparkfun.com/products/11194)
- [Capteur de PH] (http://www.atlas-scientific.com/product_pages/kits/ph-kit.html)
- [Panneau Solaire 2W] (https://www.sparkfun.com/products/13781)
- [Batterie 2000mAh] (https://www.sparkfun.com/products/8483)
- [Chargeur pour panneau solaire et batterie] (https://www.sparkfun.com/products/12885)
- Résistance:
  - 4k7 ohm x2
  - 47k ohm x1
  - 10k ohm x1
    

# Construction électronique

## Arduino

La carte Arduino avec son microcroller est la partie centrale de l'assemblage électronique. Il contient toute la logique: il recueille des informations capteurs, le traiter et l'envoyer
Via le module LoRa. Dans cette première section, nous allons voir comment connecter les capteurs à l'Arduino, sur une seconde main, nous allons voir comment le programmer.
![Arduino](/images/mvps/water_farming/arduino.JPG)


## Capteurs PH et DO
    
Les capteurs PH et DO fonctionnent avec un petit circuit pour des mesures précises et calibrent le capteur: [DO EZO circuit](http://www.atlas-scientific.com/_files/_datasheets/_circuit/DO_EZO_Datasheet.pdf) and [PH EZO circuit](http://www.atlas-scientific.com/_files/_datasheets/_circuit/pH_EZO_datasheet.pdf).


![EZO Circuits](/images/mvps/water_farming/ezo_circuits.png)

Les deux circuits sont connectés au fil I2C de l'arduino (broche A4 et A5 sur arduino pro mini).
Pour fonctionner avec I2C, les circuits doivent être commutés en mode I2C.

Ce sont les instructions pour commuter un circuit EZO en mode I2C:

- Connecter le circuit à l'arduino comme suit:
  - VCC d'arduino à VCC du circuit EZO
  - GND de l'arduino au GND du circuit EZO
  - PGND du circuit EZO vers TX du circuit EZO
- Alimentation de l'arduino
- Attendre que le voyant du circuit passe du vert au bleu
- Débrancher le connecteur de la broche PGND à la broche TX
- L'appareil est maintenant en mode I2C

L'adresse I2C par défaut pour l'EZO DO est 97, pour le EZO PH c'est 99.

Plutôt que d'alimenter les capteurs avec la sortie VCC de l'arduino, nous préférons l'alimenter avec les broches de sortie numérique.
Ce choix facilite la gestion de l'économie d'énergie.
Dans notre prototype, nous choisissons la broche 6 pour alimenter le circuit EZO DO et la broche 7 pour alimenter le PH EZO.

Table de fil:
![EZO Circuits](/images/mvps/water_farming/ezo_table.png)

Ensuite, il faut connecter chaque capteur à son circuit EZO. Chaque capteur est équipé d'une prise de courant continu pour se connecter au circuit.
Branchez la broche GND du connecteur de barillet avec la broche PGND du circuit EZO et connectez la broche à côté du GND du connecteur de barillet au compartiment PRB du circuit EZO comme ci-dessous.



![Sensors Connection](/images/mvps/water_farming/wired_sensors.jpg)

## Sonde de température de l'eau

Le capteur que nous utilisons pour contrôler la température de l'eau est le DS18B20.

![DS18B20](/images/mvps/water_farming/DS18B20.jpg)

Comme nous l'avons fait pour le capteur PH et DO, nous alimentons ce capteur en utilisant la broche de sortie numérique de l'arduino. Cependant, vous pouvez utiliser la broche VCC selon vos préférences.
Ici, la broche numérique 8 est utilisée pour l'alimentation et la broche numérique 2 est utilisée pour les données. Une résistance de 4k7 ohms est requise entre la broche VCC et la broche Data. Ci-dessous, le schéma de câblage du capteur.

![DS18B20 Wire] (/images/mvps/water_farming/DS18B20_wire.jpg)

## LoRa module


 La puce LoRa que nous utilisons est le module inAir9.
 
 ![InAir9 and wires](/images/mvps/water_farming/inAir9.jpg)

 En dessous de la table filaire du module InAir9 avec arduino.
 
 ![InAir9 and wires](/images/mvps/water_farming/inAir9_table.jpg)


## Capteur de température et d'humidité (en option)

Notre premier prototype est testé au Ghana qui est un pays particulièrement chaud donc nous décidons d'ajouter un capteur de température et d'humidité pour vérifier conditions dans la boîte.
Vous pouvez choisir de l'ajouter ou non comme votre convenance. Le capteur que nous utilisons à cet effet est le capteur DHT22.

![DHT22] (/images/mvps/water_farming/DHT22.png)

La broche VCC du capteur est connectée à la broche numérique 8 de l'arduino, mais vous pouvez également utiliser la broche VCC.
La broche DATA du capteur est connectée à la broche numérique 3 de l'arduino.
Comme nous l'avons fait avec le capteur DS18B20, une résistance de 4k7 ohms est nécessaire entre VCC et DATA.

![DHT22 table](/images/mvps/water_farming/dht_table.jpg)

## Mesure de la tension

Nous voulons connaître la tension aux sorties de batterie pour estimer le niveau de charge.
Nous utilisons une batterie Li-ion de sorte que la tension varie de 3V (vide) à 4,2V (entièrement chargée) à 25 ° C. Nous atteignons un niveau de charge de 50% à environ 3,8 V à 25 ° C.
Pour obtenir la tension aux entrées arduino nous utilisons un diviseur de tension. Nous choisissons la broche analogique 1 de l'arduino pour calculer la tension réelle.
Ci-dessous se trouve le schéma du diviseur de tension. Nous utilisons une résistance de haute valeur pour minimiser les déchets actuels.

![Voltage divider](/images/mvps/water_farming/voltage_divider.png)

## Chargeur, batterie et panneau solaire

  Nous prenons une carte de chargeur de sparkfun pour relier le panneau solaire, la batterie et l'arduino ensemble.
  Cette carte chargeur nous fournir la capacité d'obtenir la puissance la plus possible hors de notre panneau solaire et dans une rechargeable batterie Li-ion.
  La mise en place est facile, il suffit de brancher le panneau solaire dans un côté du circuit, la batterie et l'arduino en parallèle de l'autre côté.
 
 ![Charger board](/images/mvps/water_farming/charger_chip.jpg)

## Schéma général

Ici vous pouvez voir le schéma de l'ensemble du circuit sans la partie chargeur.

![Schematic](/images/mvps/water_farming/schematic.png)

## Implementation

{{< figure src="/images/mvps/water_farming/prototype_board.png" title="Prototype Board">}}

Dans notre mise en œuvre, nous décidons de créer une carte PCB du circuit pour faciliter l'assemblage des composants.

{{< figure src="/images/mvps/water_farming/pcb_board.png" title="PCB Board">}}

{{< figure src="/images/mvps/water_farming/assemblied_board.jpg" title="Final assembly">}}

# Logiciel

## Programmer l'Arduino

Nous pouvons programmer l'Arduino en envoyant un jeu d'instructions au microcrouleur sur le tableau.
Pour ce faire, nous utilisons le logiciel IDE Arduino qui utilise une version simplifiée de C ++. Le logiciel Arduino peut être téléchargé [here](https://www.arduino.cc/en/main/software).
Ensuite, pour connecter l'Arduino Mini à l'ordinateur, nous utilisons une puce USB-FTDI comme ci-dessous.

![FTDI Arduino](/images/mvps/water_farming/ftdi_arduino.png)

## Libraries


- [OneWire library] (https://github.com/PaulStoffregen/OneWire) est utilisé avec la température DS18B20 capteur
- [DHT library] (https://github.com/RobTillaart/Arduino/tree/master/libraries/DHTlib) est utilisé avec la température et l'humidité DHT22 capteur
- [SX1272 library] (https://github.com/CongducPham/LowCostLoRaGw) est utilisé avec le module LoRa

## Echantillons de codage de capteur

### Capteur DO

L'exemple de code permettant de gérer le capteur DO peut être trouvé [here](http://www.atlas-scientific.com/_files/code/do-i2c.pdf).

Attention, si vous avez utilisé la broche numérique 6 pour l'alimentation, n'oubliez pas d'ajouter ce code dans la section de configuration pour allumer l'alimentation:


        void setup()
        {
         Serial.begin(9600);
         Wire.begin();
         pinMode(6,OUTPUT);
         digitalWrite(6,HIGH);
        }
        
Capteur PH ###

L'exemple de code pour gérer le capteur PH peut être trouvé [here](http://www.atlas-scientific.com/_files/code/ph-i2c.pdf).

Attention, si vous avez utilisé la broche numérique 6 pour l'alimentation, n'oubliez pas d'ajouter ce code dans la section de configuration pour allumer l'alimentation:


        void setup()
        {
         Serial.begin(9600);
         Wire.begin();
         pinMode(7,OUTPUT);
         digitalWrite(7,HIGH);
        }

        
### Capteur de température de l'eau

Pour obtenir la température du capteur DS18B20, nous utilisons la bibliothèque OneWire.
Voici un exemple de code:

        #include <OneWire.h> 

        #define TemperatureSensorsPowerPin 8

        int DS18S20_Pin = 2; //DS18S20 Signal pin on digital 2

        //Temperature chip i/o
        OneWire ds(DS18S20_Pin);  // on digital pin 2

        void setup(void) {
          Serial.begin(19200);
            pinMode(TemperatureSensorsPowerPin,OUTPUT);    // Switch on power for temp and humdity sensor
            digitalWrite(TemperatureSensorsPowerPin,HIGH);
        }

        void loop(void) {
          float temperature = getTemp(); //will take about 750ms to run
          Serial.println(temperature);
          delay(2000);
        }


        float getTemp(){
          //returns the temperature from one DS18S20 in DEG Celsius

          byte data[12];
          byte addr[8];

          if ( !ds.search(addr)) {
              //no more sensors on chain, reset search
              ds.reset_search();
              return -1000;
          }

          if ( OneWire::crc8( addr, 7) != addr[7]) {
              Serial.println("CRC is not valid!");
              return -1000;
          }

          if ( addr[0] != 0x10 && addr[0] != 0x28) {
              Serial.print("Device is not recognized");
              return -1000;
          }

          ds.reset();
          ds.select(addr);
          ds.write(0x44,1); // start conversion, with parasite power on at the end
          
          delay(750); // Wait for temperature conversion to complete

          byte present = ds.reset();
          ds.select(addr);    
          ds.write(0xBE); // Read Scratchpad

          
          for (int i = 0; i < 9; i++) { // we need 9 bytes
            data[i] = ds.read();
          }
          
          ds.reset_search();
          
          byte MSB = data[1];
          byte LSB = data[0];

          float tempRead = ((MSB << 8) | LSB); //using two's compliment
          float TemperatureSum = tempRead / 16;
          
          return TemperatureSum;
          
        }

        
### Capteur de température et d'humidité

Pour obtenir la mesure de température et d'humidité du capteur DHT22, nous utilisons la bibliothèque DHT.
Voici un exemple de code:


        #include "DHT.h"

        #define DHT_PIN 3

        const byte DHT_SUCCESS = 0;
        const byte DHT_TIMEOUT_ERROR = 1;
        const byte DHT_CHECKSUM_ERROR = 2;
        DHT dht(DHT_PIN);


        void setup()
        {
          Serial.begin(19200);
          pinMode(8,OUTPUT);
          digitalWrite(8,HIGH);
        }

        void loop()
        {
          float temperature, humidity;
         

          switch (dht.readDHT22(&temperature, &humidity)) {
          case DHT_SUCCESS: 
             
            Serial.print(F("Humidity (%): "));
            Serial.println(humidity, 2);
            Serial.print(F("Temperature (C): "));
            Serial.println(temperature, 2);
            break;
         
          case DHT_TIMEOUT_ERROR: 
            Serial.println(F("No response!")); 
            break;
         
          case DHT_CHECKSUM_ERROR: 
            Serial.println(F("Communication pb")); 
            break;
          }

          delay(1000);
        }

        
### Module LoRa

Pour envoyer des données via LoRa, nous utilisons la bibliothèque SX1272.

Vous trouverez tous les échantillons pour utiliser cette bibliothèque [here](https://github.com/CongducPham/LowCostLoRaGw/tree/master/Arduino).

### Voltage de batterie

Ci-dessous nous avons un échantillon pour calculer la tension de la batterie de sortie.
    
    #define RESISTOR1 47000.0        // RESISTOR to calculate voltage
    #define RESISTOR2 10000.0

    #define VoltagePin  A2


    float batteryVoltage;

    void setup() {
      Serial.begin(38400);
      
    }

    void loop() {

      batteryVoltage = getBatteryVoltage();
      Serial.println(batteryVoltage);

      delay(2000);

    }

    float getBatteryVoltage()
    {
       int rawVin;
       int sumRawVin = 0;
       analogReference(INTERNAL);
       
      for (byte y=0; y<30; y++){
        rawVin = analogRead(VoltagePin);
        sumRawVin=sumRawVin+rawVin;
        delay(5);
      }
      
      rawVin = sumRawVin/30;
      float real_v = (rawVin * 1.1 / 1024.0) / (RESISTOR2/(RESISTOR1+RESISTOR2));
      if (real_v < 0.1) {  real_v=0.0; }
      
      return real_v;
    }

## Mode veille Arduino

Afin d'économiser de la batterie, vous devrez certainement mettre l'Arduino et les capteurs en mode veille.
Il existe 5 modes de sommeil différents dans arduino du moins au mode d'économie d'énergie:

 - SLEEP_MODE_IDLE
 - SLEEP_MODE_ADC
 - SLEEP_MODE_PWR_SAVE
 - SLEEP_MODE_STANDBY
 - SLEEP_MODE_PWR_DOWN 
 
Lorsque l'arduino est dans le mode SLEEP_MODE_PWR_DOWN la seule façon de le réveiller est avec soit une interruption temporisateur watchdog, une interruption de niveau sur les broches 2 ou 3, ou une interruption de changement de broche. Donc, dans notre cas, nous avons besoin d'utiliser le watchdog minuterie interruption.
 
### Activer l'interruption du temporisateur Watchdog

Vous pouvez sauter cette section si vous n'utilisez pas de mini carte Arduin Pro.

Malheureusement, l'interruption de la minuterie de surveillance est défectueuse sur la mini carte Arduino Pro. Pour résoudre le problème, un nouveau chargeur d'amorçage doit être installé.
Nous installerons le bootloader de l'UNO d'Arduino qui utilise la même puce de microprocesseur (atmega328).

Voici comment installer ce bootloader:

- Premier Ouvrir le fichier bootloader boards.txt qui est situé

Sur Windows:
            
> C:\Users\\{userName}\AppData\Local\Arduino\packages\arduino\hardware\avr\\{version}\boards.txt

Sur Linux :  
            
> /usr/share/arduino/hardware/arduino/avr/boards.txt 

Dans ce fichier, trouvez les lignes de l'Arduino pro mini 3.3V

    ## Arduino Pro or Pro Mini (3.3V, 8 MHz) w/ ATmega328
    ## --------------------------------------------------
    pro.menu.cpu.8MHzatmega328=ATmega328 (3.3V, 8 MHz)

    pro.menu.cpu.8MHzatmega328.upload.maximum_size=30720
    pro.menu.cpu.8MHzatmega328.upload.maximum_data_size=2048
    pro.menu.cpu.8MHzatmega328.upload.speed=57600

    pro.menu.cpu.8MHzatmega328.bootloader.low_fuses=0xFF
    pro.menu.cpu.8MHzatmega328.bootloader.high_fuses=0xDA
    pro.menu.cpu.8MHzatmega328.bootloader.extended_fuses=0xfd
    pro.menu.cpu.8MHzatmega328.bootloader.file=atmega/ATmegaBOOT_168_atmega328.hex

    pro.menu.cpu.8MHzatmega328.build.mcu=atmega328p
    pro.menu.cpu.8MHzatmega328.build.f_cpu=8000000L

    
Remplacer la ligne: "***pro.menu.cpu.8MHzatmega328.bootloader.file=atmega/ATmegaBOOT_168_atmega328.hex***"

Par la ligne :  "***pro.menu.cpu.8MHzatmega328.bootloader.file=optiboot/optiboot_atmega328.hex***"

Enregistrez et fermez le fichier.

- Alors nous avons besoin de clignoter la botte en utilisant un programmeur dans le système.

Dans ce tutoriel, nous utilisons un Arduino UNO en tant que FAI mais il fonctionne également avec d'autres cartes Arduino.
Nous commençons par connecter l'Arduino UNO à l'ordinateur. Dans Arduino IDE, nous allons au répertoire ***file***->***examples*** et sélectionnez ***ArduinoISP***. Il ouvre l'esquisse pour utiliser Arduino comme un programmeur système.
Nous téléversons ce croquis sur l'Arduino UNO.

Ensuite, nous connectons l'Arduino UNO et l'Arduino Pro mini comme suit.

| ***Arduino UNO*** | ***Arduino Pro mini*** |
|-------------|------------------|
|  3V3        | VCC              |
| GND         | GND              |
| Digital 10  | RST              |
| Digital 11  | Digital 11       |
| Digital 12  | Digital 12       |
| Digital 13  | Digital 13       |

Puis nous sélectionnons "Arduino Pro or Pro mini" dans ***tools->Board*** et "ATmega328 (3.3v, 8 MHz)" dans ***tools->processor***. Enfin, cliquez sur ***tools->Burn Bootloader***.

L'Arduino Pro mini est maintenant prêt.

### Exemple de code pour le mode veille

L'intervalle le plus long que la minuterie du chien de garde peut être réglé est de 8 sec.

Ici vous trouverez un échantillon sur la façon de mettre l'Arduino Pro mini en mode veille pour une période plus longue.

    #include <avr/interrupt.h>
    #include <avr/wdt.h>
    #include <avr/sleep.h>
    #include <avr/power.h>


    #define SLEEP_LOOP 4  // one loop = 8 sec. Example sleep_loop = 4 -> 4*8 = 32 sec

    volatile int nbr_remaining; 

    void setup()
    {
      
      Serial.begin(38400);
      configure_wdt();
      nbr_remaining=0;

    }


    void loop(void)
    {

      Serial.println("Loop Start");
      while (1) {
          Serial.println(F("System awake"));
          wdt_reset(); // Reset the watchdog timer to not trigger when not needed
          
          // Put your code here
          delay(2000);
          // if your code take more than 8 sec to process 
          //  dont forget to put some wdt_reset() or the watchdog will be triggered
          
          
          Serial.println(F("System sleep"));
          Serial.flush(); // always put a Serial.flush() before sleep
                          // to let the serial finished its task before starting sleep mode
          sleep(SLEEP_LOOP);
      }

    }

    // Init the watchdog timer interrupt
    void configure_wdt(void)
    {
     
      cli();                           // disable interrupts for changing the registers

      MCUSR = 0;                       // reset status register flags

                                       // Put timer in interrupt-only mode:                                       
      WDTCSR |= 0b00011000;            // Set WDCE (5th from left) and WDE (4th from left) to enter config mode,
                                       // using bitwise OR assignment (leaves other bits unchanged).
      WDTCSR =  0b01000000 | 0b100001; // set WDIE: interrupt enabled
                                       // clr WDE: reset disabled
                                       // and set delay interval (right side of bar) to 8 seconds

      sei();                           // re-enable interrupts 
    }

    // interrupt raised by the watchdog firing
    ISR(WDT_vect)
    {
        if(nbr_remaining > 0)
        {
            nbr_remaining = nbr_remaining - 1;
            wdt_reset();
        }
        else
        {
            MCUSR = 0;                          // reset flags
             
            WDTCSR |= 0b00011000;               // Enter config mode.
            WDTCSR =  0b00001000 | 0b000000;    // clr WDIE (interrupt enable...7th from left)
                                                  // set WDE (reset enable...4th from left), and set delay interval
                                                  // reset system in 16 ms...
                                                  // unless wdt_disable() in loop() is reached first
           while(1);          

        }
    }


    void sleep(int ncycles)
    { 
      nbr_remaining = ncycles;
      set_sleep_mode(SLEEP_MODE_PWR_DOWN);
     
      power_adc_disable();
     
      while (nbr_remaining > 0){ 
        sleep_mode();
        sleep_disable();
      }
      power_all_enable();
     
    }


## La mise en oeuvre

Le schéma Arduino utilisé dans l'eau MVP peut être trouvé [here](https://github.com/blissillour/MVPWater).
Dans cette esquisse nous utilisons une bibliothèque que nous avons créée pour faciliter la mise en œuvre des capteurs.
La bibliothèque peut être trouvé [here](https://github.com/blissillour/water-sensors).

Vous trouverez ci-dessous un exemple d'utilisation de la bibliothèque:

    #include <WaterSensor.h>

    #define address_PH 99         // default PH sensor adress on I2C port
    #define address_DO 97         // default DO sensor adress on I2C port
    #define DS18S20_Pin 2         // digital pin of the temperature sensor (outside the box)
    #define DHT_PIN 3             // digital pin of the humidity and temperature sensor (inside the box)

    #define TemperatureSensorsPowerPin 8
    #define EzoDOSensorPowerPin 6
    #define EzoPHSensorPowerPin 7

    float temperatureBox, humidityBox, temperature;
    char dataPH[10] , dataDO[10];

    WaterSensor waterSensor(DS18S20_Pin,DHT_PIN, address_PH,address_DO);

    void setup()
    {
      // Open serial communications and wait for port to open:
      Serial.begin(38400);
      
      Wire.begin();           //enable I2C port.

      pinMode(TemperatureSensorsPowerPin,OUTPUT);    // Switch on power for temp and humdity sensor
      pinMode(EzoDOSensorPowerPin,OUTPUT);          // Switch on power for DO sensor
      pinMode(EzoPHSensorPowerPin,OUTPUT);          // Switch on power for PH sensor

      digitalWrite(TemperatureSensorsPowerPin,HIGH);
      digitalWrite(EzoPHSensorPowerPin,HIGH);
      digitalWrite(EzoDOSensorPowerPin,HIGH);

    }

    void loop(void)
    {
      dataPH[0] = '\0';
      dataDO[0] = '\0';
      
      delay(200);
      
      // Wake up DO and PH sensors 
      waterSensor.wakeUpPHSensor();
      waterSensor.wakeUpDOSensor();
      
      temperature = waterSensor.getTemperatureValue();
      Serial.print(F("Temp in water : "));
      Serial.println(temperature);
      
      delay(1000);
        
      waterSensor.getInboxTemperatureHumidityValue(&temperatureBox,&humidityBox);
      Serial.print(F("Temp in box : "));
      Serial.println(temperatureBox);
      Serial.print(F("Humidity : "));
      Serial.println(humidityBox);
      
      delay(1000);
      
      waterSensor.sendTempToDOSensor(temperature);   // Send the temperature to DO sensor to precise the reading value
      waterSensor.getDOSensorValue(dataDO);          // Receive the DO value
      Serial.print(F("DO : "));
      Serial.println(dataDO);
      
      delay(1000);
      
      waterSensor.sendTempToPHSensor(temperature);     // Send the temperature to PH sensor to precise the reading of the value
      waterSensor.getPHSensorValue(dataPH);            // Receive the PH value
      Serial.print(F("PH : "));
      Serial.println(dataPH);

      delay(1000);

      waterSensor.sleepPHSensor();             // Put the PH sensor in sleep mode to save battery power
      waterSensor.sleepDOSensor();             // Put the DO sensor in sleep mode to save battery power
      delay(4000);
    }

