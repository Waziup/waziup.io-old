---
url: /fr/documentation/tutorials/lora-gateway
---

Passerelle low-cost LoRa avec Raspberry
=======================================

Veuillez consulter la page web: http://cpham.perso.univ-pau.fr/LORA/RPIgateway.html

**Voici la description de la version de base de la passerelle low-cost. Il existe une version avancée qui mettra à jour certains fichiers. Regardez le dossier [gw_advanced] (https://github.com/CongducPham/LowCostLoRaGw/tree/master/gw_advanced) et suivez les instructions.** Avec la version avancée, vous pouvez ajouter de nouvelles mises à jour (telles que la gestion des nuages, Fonctions de liaison descendante, cryptage AES et fonctionnalités LoRaWAN limitées) de façon incrémentielle si vous voulez le faire. Les étapes de mise à jour / mise à niveau sont les suivantes: basic->gw_advanced->new cloud mngt->downlink->AES et LoRaWAN.

- basic version -> gw_advanced: voir [gw_advanced folder](https://github.com/CongducPham/LowCostLoRaGw/tree/master/gw_advanced)
- gw_advanced -> new cloud management: voir [README](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/new_cloud_design/README-NewCloud.md); [Comment mettre à jour](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/new_cloud_design/README-NewCloud.md#how-to-update-your-gateway) 
- gw_advanced w/new cloud management -> downlink features: voir [README](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/downlink/README-downlink.md); [Comment mettre à jour](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/downlink/README-downlink.md#how-to-update-your-gateway)
- gw_advanced w/new cloud management or gw_advanced w/downlink -> aes and LoRaWAN features: see [README](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/aes_lorawan/README-aes_lorawan.md); [Comment mettre à jour](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/aes_lorawan/README-aes_lorawan.md#how-to-update-your-gateway)

Dernière version de la passerelle (recommandée pour les nouveaux utilisateurs)
------------------------------------------------------------------------------

La dernière version complète de la passerelle low-cost est disponible dans le dossier gw_full_latest. Il ne contient que le logiciel de contrôle de la passerelle et de post-traitement. Vous devrez peut-être installer les paquets Jessie Raspbian requis comme expliqué dans le fichier README des différentes mises à jour.

Pour accéder directement à la version complète de la passerelle, (i) il suffit de télécharger (git clone) le référentiel entier et de copier le contenu entier du dossier gw_full_latest sur votre Raspberry, dans un dossier nommé lora_gateway ou (ii) get only (svn checkout ) Le dossier gw_full_latest dans un dossier nommé lora_gateway. Voir la procédure d'installation décrite [ci-dessous](https://github.com/CongducPham/LowCostLoRaGw#install-the-low-level-lora-gateway) pour les adapter au dossier gw_full_latest.

Ensuite, dans le dossier script, exécutez new_config_gw.sh pour configurer votre passerelle, comme décrit [ici](https://github.com/CongducPham/LowCostLoRaGw/tree/master/gw_advanced#configure-your-gateway-with-config_gwsh).

Par défaut, local_conf.json et global_conf.json configurent la passerelle avec un comportement simple: mode LoRa 1 (BW125SF12), pas de capteur DHT dans la passerelle (donc pas de MongoDB pour le capteur DHT), pas de liaison descendante, pas d'AES, pas de mode brut. Clouds.json active uniquement le canal de démonstration ThingSpeak (même le stockage MongiDB local est désactivé). Vous pouvez personnaliser votre passerelle plus tard lorsque vous avez plus de comptes cloud et lorsque vous savez mieux quelles fonctionnalités vous souhaitez activer.

**NOUVEAU**
===========

- nouveau cryptage et format de trame LoRaWAN natif
    - **nécessite au moins la nouvelle version de gestion du cloud** et la dernière version [lora_gateway.cpp](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/downlink/lora_gateway.cpp)
    - voir [README](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/aes_lorawan/README-aes_lorawan.md)
    - l'appareil final peut envoyer des paquets LoRaWAN natifs
    - une passerelle de bas niveau fournit une sortie brute pour
    post_processing_gw.py pour gérer les paquets LoRaWAN
- nouveau code Arduino pour passerelle et terminal interactif
    - le code pour la passerelle et le dispositif terminal interactif sont
    maintenant séparés en 2 esquisses
    - l'ancienne version est toujours dans le dossier Arduino_LoRa_Gateway_1_4 
    et ne sera plus maintenue. Il restera à v1.4
    - Arduino_LoRa_Gateway contient maintenant le code de passerelle. Il est 
    équivalent, dans la version précédente v1.4, à la compilation avec IS_RCV_GATEWAY.
    - Arduino_LoRa_InteractiveDevice contient le code d'un périphérique final 
    interactif. Il est équivalent, dans la version précédente v1.4, à la compilation avec IS_SEND_GATEWAY
- nouvelle approche de gestion des nuages: plus simple, plus générique
    - https://github.com/CongducPham/LowCostLoRaGw/tree/master/gw_advanced/new_cloud_design
    - [README](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/new_cloud_design/README-NewCloud.md)
- nouvelles fonctionnalités de liaison descendante: pour envoyer de la passerelle au périphérique
    - https://github.com/CongducPham/LowCostLoRaGw/tree/master/gw_advanced/downlink
    - [README](https://github.com/CongducPham/LowCostLoRaGw/blob/master/gw_advanced/downlink/README-downlink.md)
- obtenez l'image de la carte SD zippée (Raspbian Jessie) avec toutes les fonctionnalités avancées (à mettre à jour pour la nouvelle gestion des nuages et la liaison descendante) déjà installés et fonctionnant avec l'exemple Arduino_LoRa_Simple_temp sur un canal ThingSpeak de démonstration.
    - [raspberrypi-jessie-WAZIUP-demo.dmg.zip](http://cpham.perso.univ-pau.fr/LORA/WAZIUP/raspberrypi-jessie-WAZIUP-demo.dmg.zip)
    - Basé sur Raspbian Jessie
    - Supporte la framboise 1B +, RPI2 et RPI3
    - Comprend toutes les fonctionnalités avancées décrites dans le 
    gw_advanced github
    - Obtenez l'image zippée, décompressez-le, installez-le sur une carte SD 
    de 8 Go, consultez [ce tutoriel](https://www.raspberrypi.org/documentation/installation/installing-images/) from www.raspberrypi.org
    - Branchez la carte SD dans votre Raspberry
    - Connecter un module radio(see http://cpham.perso.univ-pau.fr/LORA/RPIgateway.html)
    - Mise en marche de la Raspberry
    - La passerelle LoRa démarre automatiquement lorsque le RPI est sous
    tension
    - Par défaut, les données entrantes sont [WAZIUP ThingSpeak demo channel]
    (https://thingspeak.com/channels/123986)
    - Fonctionne avec les [Arduino_LoRa_Simple_temp sketch](https://github.com/CongducPham/LowCostLoRaGw/tree/master/Arduino/Arduino_LoRa_Simple_temp)
- 2 vidéos tutoriel sur YouTube: vidéo de toutes les étapes pour construire l'ensemble du cadre à partir de zéro
    - [Build your low-cost, long-range IoT device with WAZIUP](https://www.youtube.com/watch?v=YsKbJeeav_M)
    - [Build your low-cost LoRa gateway with WAZIUP](https://www.youtube.com/watch?v=peHkDhiH3lE)

Installez Raspbian Wheezy ou Jessie
===================================

Première installation d'une framboise avec Raspbian, Jessie est recommandé.

Alors (vous devez avoir un accès Internet sur votre Raspberry):

    > sudo apt-get update
    > sudo apt-get upgrade

Jessie a été testé sur RPI1, RPI2 et RPI3, et fonctionne très bien.

Wheezy a été testé sur RPI1 et RPI2 et fonctionne très bien. Wheezy sur RPI3 n'est pas recommandé car WiFi et Bluetooth intégrés ne fonctionneront pas correctement.

Nous vous recommandons d'acheter RPI2 ou RPI3. RPI3 avec Jessie a intégré WiFi et Bluetooth, il est donc certainement un bon choix. En plus RPI3 avec Jessie aura une meilleure durée de vie du support.

Connecter un module radio à Raspberry
===================================

Vous devez connecter un module radio LoRa à l'en-tête GPIO de Raspberry. Il suffit de connecter la broche SPI correspondante (MOSI, MISO, CLK, CS). Bien sûr, vous devez également fournir la puissance (3.3v) au module radio. Vous pouvez jeter un coup d'œil au didacticiel "Low-cost-LoRa-GW-pas-à-pas" dans notre dépôt de didacticiels (https://github.com/CongducPham/tutorials).

Installer la passerelle LoRa de bas niveau
==========================================

Connectez-vous en tant qu'utilisateur ** pi ** sur votre framboise en utilisant ssh ou connectez un écran et un clavier. Pour obtenir tous les fichiers de passerelle LoRa de bas niveau, vous avez 2 options.

Première option
---------------

Obtenez tout le répertoire

    > git clone https://github.com/CongducPham/LowCostLoRaGw.git
    
Vous obtiendrez le répertoire complet:

    pi@raspberrypi:~ $ ls -l LowCostLoRaGw/
    total 32
    drwxr-xr-x 7 pi pi  4096 Jul 26 15:38 Arduino
    drwxr-xr-x 5 pi pi  4096 Jul 26 15:38 gw_advanced
    drwxr-xr-x 2 pi pi  4096 Jul 26 15:38 Raspberry
    -rw-r--r-- 1 pi pi 15522 Jul 26 15:38 README.md
    drwxr-xr-x 2 pi pi  4096 Jul 26 15:38 tutorials
    
Créez un dossier nommé "lora_gateway" par exemple, puis copiez tous les fichiers du dossier LowCostLoRaGw/Raspberry.

    > mkdir lora_gateway
    > cd lora_gateway
    > cp -R ../LowCostLoRaGw/Raspberry/* .
    
Ou si vous voulez déplacer le dossier LowCostLoRaGw/Raspberry, faites simplement (sans créer le dossier lora_gateway avant):

    > mv LowCostLoRaGw/Raspberry ./lora_gateway    

Deuxième option
---------------

Obtenez uniquement la partie passerelle:

    > svn checkout https://github.com/CongducPham/LowCostLoRaGw/trunk/Raspberry lora_gateway
    
Cela créera le dossier lora_gateway et récupérera tout le fichier de (GitHub) LowCostLoRaGw/Raspberry. Alors:

    > cd lora_gateway

Notez que vous devrez peut-être installer svn avant d'utiliser la commande svn:

    > sudo apt-get install subversion
    
Compilation du programme de passerelle de bas niveau
---------------------------------------
    
NE PAS modifier le fichier lora_gateway.cpp à moins que vous ne sachiez ce que vous faites. Vérifiez le fichier radio.makefile pour indiquer si votre module radio utilise la ligne de l'amplificateur PA_BOOST ou non (ce qui signifie qu'il utilise la ligne RFO). HopeRF RFM92W / 95W ou inAir9B ou NiceRF1276 ou un module radio avec une possibilité de +20dBm (le SX1272 / 76 a une caractéristique de + 20dBm mais certains modules radio qui intègrent le SX1272 / 76 peuvent ne pas avoir le support électronique) besoin du -DPABOOST. Les deux Libelium SX1272 et inAir9 (pas inAir9B) n'utilisent pas PA_BOOST. Vous pouvez également définir une puissance de sortie maximale pour rester dans les normes de puissance de transmission de votre pays. Par exemple, si vous ne définissez rien, alors la puissance de sortie est fixée à 14dBm (règlement européen ETSI), sinon utilisez -DMAX_DBM = 10 pour 10dBm. Alors:

    > make lora_gateway

Si vous utilisez un Raspberry v2 ou v3:

    > make lora_gateway_pi2

Pour lancer la passerelle

    > sudo ./lora_gateway

Sur Raspberry v2 ou v3, un lien symbolique sera créé qui indiquera lora_gateway_pi2.

Par défaut, la passerelle s'exécute en mode LoRa 1 et possède l'adresse 1.

Vous pouvez consulter le didacticiel "Low-cost-LoRa-GW-pas-à-pas" dans notre référentiel de didacticiels (https://github.com/CongducPham/tutorials).

Ajout des fonctions de post-traitement de la passerelle LoRa
============================================================

Une étape de post-traitement des données ajoutée après le programme de passerelle LoRa de bas niveau. Le script post_processing_gw.py peut être personnalisé pour traiter les données brutes du capteur à partir de la passerelle LoRa de bas niveau. Une tâche de traitement typique est de pousser les données reçues vers des serveurs Internet ou des nuages IoT dédiés (publics ou privés). Post_processing_gw.py est un modèle qui implémente déjà le transfert de données vers divers nuages IoT publics.

Par exemple, pour pousser les données vers le canal de test ThingSpeak WAZIUP fourni

    > sudo ./lora_gateway | python ./post_processing_gw.py -t

Pour enregistrer la sortie du traitement dans un fichier (dans ~ /Dropbox/ LoRa-test/post_processing.log)

    > sudo ./lora_gateway | python ./post_processing_gw.py -t | python ./log_gw
    
**Notez que si vous voulez exécuter et tester la commande ci-dessus**, vous devez créer un dossier "Dropbox" dans votre répertoire personnel avec un sous-foret "LoRa-test" qui sera utilisé localement. S'il vous plaît mettre l'attention sur le nom des dossiers: ils doivent être "Dropbox / LoRa-test" parce que le script "Python post_processing_gw.py" utilise ces chemins. Vous pouvez monter Dropbox plus tard si vous le souhaitez: les dossiers et le contenu locaux ne seront pas modifiés. **Sinon, exécutez simplement le script de configuration config_raspbian.sh comme il sera décrit plus loin (recommandé)**.

    > mkdir -p Dropbox/LoRa-test    
    
Pour appliquer en outre la clé d'application à l'étape de post-traitement de la passerelle

    > sudo ./lora_gateway | python ./post_processing_gw.py -t --wappkey | python ./log_gw

C'est la commande que nous recommandons. Pour tester, il suffit de clignoter un capteur de température et il devrait fonctionner-de-la-boîte.

Vous pouvez personnaliser l'étape de post-traitement (post_processing_gw.py) à votre convenance plus tard.

Vous pouvez consulter le didacticiel "Low-cost-LoRa-GW-pas-à-pas" dans notre référentiel de didacticiels (https://github.com/CongducPham/tutorials).

Connectez un module radio à votre périphérique
=========================================

Pour avoir un périphérique, vous devez connecter un module radio LoRa à une carte Arduino. Il suffit de connecter la broche SPI correspondante (MOSI, MISO, CLK, CS). Bien sûr, vous devez également fournir la puissance (3.3v) au module radio. Vous pouvez jeter un coup d'œil au didacticiel "Low-cost-LoRa-IoT-pas-à-pas" dans le référentiel de didacticiels (https://github.com/CongducPham/tutorials).

Il y a une question importante concernant les modules radio. Le Semtech SX1272 / 76 dispose en fait de 2 lignes d'amplification de puissance RF (PA): un PA de haute efficacité jusqu'à 14dBm (RFO) et un PA de puissance élevée jusqu'à 20dBm (PA_BOOST). Le réglage de la puissance d'émission sur "L" (Bas), "H" (Haut) et "M" (Max) utilise uniquement la RFO et délivre respectivement 2dBm, 6dBm et 14dBm. "X" (extrême) et "X" (eXtreme) utilisent le PA_BOOST et délivrent respectivement 14dBm et 20dBm.
Cependant, même si la puce SX1272 / 76 possède les fonctionnalités PA_BOOST et 20dBm, tous les modules radio (intégrant ces SX1272 / 76) ne disposent pas des câblages et des circuits appropriés pour permettre ces fonctions: cela dépend du choix du modèle de référence lui-même Est guidé par l'utilisation principale de la bande de fréquence prévue et parfois aussi par la réglementation du pays cible (comme la puissance maximale transmise). Vous devez donc vérifier avec la fiche si votre module radio a PA_BOOST (généralement vérifier si la broche PA_BOOST est câblé) et la capacité 20dBm avant d'utiliser "x" ou "X". Certains autres modules radio ne branchent que le PA_BOOST et non pas le RFO, ce qui entraîne une très mauvaise plage lors de l'utilisation du mode RFO ("L", "H" et "M"). Dans ce cas, il faut utiliser "x" pour indiquer l'utilisation de PA_BOOST pour obtenir 14dBm.

Pratiquement, nous n'utilisons que "M" (Max) ou "x" (extrême) pour avoir la portée maximale. Ils fournissent tous les deux 14dBm, mais la différence est de savoir si la broche RFO est utilisé ou le PA_BOOST. Par conséquent, lorsque vous téléchargez un croquis sur votre carte, vous devez vérifier si votre module radio a besoin du PA_BOOST pour obtenir un niveau de sortie significatif auquel cas "x" doit être utilisé au lieu de "M". Tous les exemples commencent par:

    // IMPORTANT
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // décommentez si votre radio est un HopeRF RFM92W, HopeRF RFM95W, Modtronix inAir9B, NiceRF1276
    // ou vous avez connu du schéma de circuit que la sortie utilise la ligne PABOOST au lieu de la ligne RFO
    //#define PABOOST
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////  

Uncomment PABOOST si vous avez un HopeRF RFM92W ou RFM95W, ou un Modtronix inAir9B (si inAir9, laisser commenté) ou un NiceRF1276. Si vous avez un autre module radio non listé, essayez d'abord en laissant PABOOST commenté, puis voir si la réception des paquets est correcte avec un SNR raisonnablement élevé (par exemple 6 à 10 dB) à quelques mètres de la passerelle. Sinon, essayez avec PABOOST sans commentaire.

Premier essai: un simple exemple de programme Ping-Pong
=======================================================

Comme suggéré par certaines personnes, nous fournissons ici un simple programme Ping-Pong à télécharger sur un tableau Arduino. Tout d'abord, installez l'IDE Arduino 1.6.6. Vérifiez que la bibliothèque du tableau AVR n'est pas au-dessus de 1.6.9 car il pourrait y avoir un problème de compilation autrement. Puis, dans votre dossier d'esquisse, copiez le contenu du dossier Arduino de la distribution.

Exécutez la passerelle avec:

    > sudo ./lora_gateway
    
Avec l'IDE Arduino, ouvrez l'esquisse Arduino_LoRa_Ping_Pong, compilez-le et téléchargez-le sur une carte Arduino. Vérifiez d'abord votre module radio, voir «Connecter un module radio à votre périphérique» ci-dessus.

L'appareil s'exécute en mode LoRa 1 et possède une adresse 8. Ouvrez le Serial Monitor (38400 bauds) pour voir la sortie de l'Arduino. Il envoie "Ping" à la passerelle en demandant un ACK tous les 10s. Si l'ACK est reçu, alors il affichera "Pong reçu de la passerelle!" Sinon il affiche "No Pong!".

Notez que dans la plupart des scénarios opérationnels, la demande d'ACK à partir de la passerelle est coûteuse. Regardez les exemples suivants pour voir comment nous envoyons habituellement des données sans demander ACK.

**Remarque pour les cartes Arduino low-cost/clone**. Si vous obtenez une carte Arduino économique, comme celles vendues par la plupart des fabricants chinois, la connectivité USB est probablement basée sur le CH340 ou le CH341. Pour que votre Arduino à faible coût soit visible pour votre IDE Arduino, vous avez besoin du pilote spécifique. Regarder http://sparks.gogo.co.nz/ch340.html or http://www.microcontrols.org/arduino-uno-clone-ch340-ch341-chipset-usb-drivers/. Pour MacOS, vous pouvez regarder http://www.mblock.cc/posts/run-makeblock-ch340-ch341-on-mac-os-sierra Qui fonctionne pour MacOS jusqu'à Sierra. Pour les utilisateurs de MacOS qui ont la version précédente des pilotes CH34x et rencontrant la panique du noyau avec Sierra, n'oubliez pas de supprimer l'installation précédente du pilote: "sudo rm -rf /System/Library/Extensions/usb.kext".


Un exemple simple d'appareil terminal qui envoie périodiquement de la température à la passerelle
==============================================================================

Voir [la vidéo ici](https://www.youtube.com/watch?v=YsKbJeeav_M).

Tout d'abord, installez l'IDE Arduino 1.6.6. Vérifiez que la bibliothèque du tableau AVR n'est pas au-dessus de 1.6.9 car il pourrait y avoir un problème de compilation autrement. Puis, dans votre dossier d'esquisse, copiez le contenu du dossier Arduino de la distribution.

Avec l'IDE Arduino, ouvrez l'esquisse Arduino_LoRa_Simple_temp, compilez-le et téléchargez-le sur une carte Arduino. Vérifiez d'abord votre module radio, voir «Connecter un module radio à votre périphérique» ci-dessus.

L'appareil final s'exécute en mode LoRa 1 et possède l'adresse 8. Il enverra des données à la passerelle.

La configuration par défaut utilise un filtre de clé d'application défini à [5, 6, 7, 8].

Utiliser un capteur de température (par exemple LM35DZ) et brancher l'axe A0 (analogique 0). Vous pouvez utiliser une broche d'alimentation pour alimenter votre capteur de température si vous n'êtes pas préoccupé par l'économie d'énergie. Sinon, vous pouvez utiliser 8 numériques (l'esquisse définit cette broche HIGH lors de la lecture de la valeur, puis la remet à LOW) et active le mode faible consommation (décommenter #define LOW_POWER), voir ci-dessous.

Pour les applications de faible puissance, le Pro Mini de Sparkfun est certainement un bon choix. Cette carte peut être soit dans la version 5V ou 3.3V. Avec le Pro Mini, il est préférable d'utiliser vraiment la version 3.3V fonctionnant à 8MHz que la consommation d'énergie sera réduite. La puissance du module radio peut être obtenue à partir de la broche VCC qui est alimentée en 3.3v lorsque l'alimentation USB est utilisée ou lorsque l'alimentation non réglementée est connectée à la broche RAW. Si vous alimentez votre Pro Mini avec la broche RAW vous pouvez utiliser par exemple 4 piles AA pour obtenir 6V. Si vous utilisez une batterie rechargeable vous pouvez facilement trouver 3.7V Li-Ion packs. Dans ce cas, vous pouvez injecter directement dans la broche VCC mais assurez-vous que vous avez dessoudé le cavalier d'isolation de puissance, voir le schéma Pro Mini sur la page Web Arduino. Pour économiser plus d'énergie, vous pouvez retirer l'alimentation.

La version actuelle de faible puissance pour la carte Arduino utilise la bibliothèque RocketScream Low Power (https://github.com/rocketscream/Low-Power) et peut prendre en charge la plupart des plates-formes Arduino bien que la plateforme Pro Mini présentera probablement la meilleure économie d'énergie (nous Mesuré 124uA courant en mode veille avec le led d'alimentation enlevé). Vous pouvez buid la version basse puissance en décommentant l'instruction de définition de compilation LOW_POWER. Ensuite, définissez "int idlePeriodInMin = 10;" Au nombre de minutes entre 2 réveil. Par défaut, il est de 10 minutes.

Pour le cas particulier de Teensy 31/32, le mode d'économie d'énergie utilise la bibliothèque Snooze fournie par le package Teensyduino. Vous pouvez mettre à niveau la bibliothèque Snooze depuis leur github. Avec Teensy, vous pouvez utiliser le mode HIBERNATE en décommentant "USE_HIBERNATE" dans le fichier Snooze.h de la librairie Snooze et en décommentant LOW_POWER_HIBERNATE dans l'exemple de température.

Pour la spéciale de l'Arduino Zéro, le réveil de la carte du mode de sommeil profond est fait avec le RTC. Par conséquent, la bibliothèque RTCZero de https://github.com/arduino-libraries/RTCZero est utilisée et vous devez l'installer avant de pouvoir compiler l'exemple de l'Arduino Zero.

Selon le type de capteur, le calcul de la température réelle peut être modifié en conséquence. Voici l'instruction pour le LM35DZ: http://www.instructables.com/id/ARDUINO-TEMPERATURE-SENSOR-LM35/

La configuration par défaut utilise également l'EEPROM pour stocker le dernier numéro de séquence de paquet afin de le récupérer lorsque le capteur est redémarré / redémarré. Si vous souhaitez redémarrer avec un numéro de séquence de paquets de 0, il suffit de commenter la ligne "#define WITH_EEPROM"

Une fois clignotée, la sonde de température Arduino enverra à la passerelle le message suivant: \!#3#20.4 (20.4 est la température mesurée si vous n'avez pas la même valeur) préfixé par la clé d'application toutes les 10 minutes (avec un certain intervalle de randomisation) . Ceci déclenche au stade de traitement de la passerelle l'enregistrement sur le canal ThingSpeak par défaut (le canal de test que nous fournissons) dans le champ 3. A la passerelle, 20.4 sera enregistré sur le canal de test ThingSpeak fourni dans le champ 3 du canal. Si vous allez à https://thingspeak.com/channels/66794, vous devriez voir la valeur rapportée.

Le programme a été testé sur Arduino Uno, Mega2560, Nano, Pro Mini, Mini, Due, Zero. Nous avons également testé sur le Teensy3.1 / 3.2 et le Nexus Ideetron. La lib SX1272 a été modifiée pour changer la broche SPI_SS de 2 à 10 lorsque vous compilez pour les Mini Pro, Mini (Nexus), Nano ou Teensy.


**Remarque pour les cartes Arduino low-cost/clone**. Si vous obtenez une carte Arduino peu coûteuse, comme celles vendues par la plupart des fabricants chinois, la connectivité USB est probablement basée sur le CH340 ou le CH341. Pour que votre Arduino à faible coût soit visible pour votre IDE Arduino, vous avez besoin du pilote spécifique. Regardez http://sparks.gogo.co.nz/ch340.html ou http://www.microcontrols.org/arduino-uno-clone-ch340-ch341-chipset-usb-drivers/. Pour MacOS, vous pouvez regarder http://www.mblock.cc/posts/run-makeblock-ch340-ch341-on-mac-os-sierra qui fonctionne pour MacOS jusqu'à Sierra. Pour les utilisateurs MacOS qui ont la version précédente des pilotes CH34x et rencontrant la panique du noyau avec Sierra, n'oubliez pas de supprimer l'installation précédente du pilote: "sudo rm -rf /System/Library/Extensions/usb.kext".


Un dispositif final interactif pour envoyer des messages LoRa avec l'IDE Arduino
========================================================================

Avec l'IDE Arduino, ouvrez l'esquisse Arduino_LoRa_InteractiveDevice. Ensuite, compilez-le et téléchargez-le sur une carte Arduino. Il est préférable d'utiliser une plate-forme Arduino plus puissante pour construire le périphérique interactif sinon des problèmes de stabilité peuvent survenir (et surtout avec plus de mémoire RAM comme MEGA, le Uno, ATMega328P, sera très instable en raison de la petite quantité de mémoire).

Par défaut, le périphérique interactif possède l'adresse 6 et s'exécute en mode LoRa 1.

Entrez "\!SGSH52UGPVAUYG3S#1#21.6" (sans les guillemets) dans la fenêtre d'entrée et appuyez sur RETURN

La commande sera envoyée à la passerelle et vous devriez voir la passerelle pousser les données vers le canal de test ThingSpeak. Si vous allez à https://thingspeak.com/channels/66794, vous devriez voir la valeur rapportée.

Lorsque vous testez avec l'appareil final interactif, vous ne devez pas utiliser l'option --wappkey pour le script post-processing python post_processing_gw.py sinon votre commande ne sera pas acceptée car seule la chaîne de texte sans services de journalisation sera reçue et affichée lorsque --wappkey est défini.

    > sudo ./lora_gateway | python ./post_processing_gw.py -t | python ./log_gw


Utiliser un Arduino comme passerelle LoRa
=========================================

La passerelle peut également être basée sur une carte Arduino, comme décrit dans la page Web. Avec l'IDE Arduino, ouvrez l'esquisse Arduino_LoRa_Gateway, compilez le code et transférez-le sur une carte Arduino. Suivez ensuite les instructions sur l'utilisation de la carte Arduino comme passerelle. Il est préférable d'utiliser une plate-forme Arduino plus puissante (et avec plus de mémoire RAM comme MEGA) pour construire la passerelle.

Fonctionnement en bande 433 MHz
===============================

Lorsque votre module radio peut fonctionner dans la bande 433 MHz (par exemple lorsque la radio est basée sur la puce SX1276 ou SX1278, comme l'inAir4 de Modtronics), vous pouvez tester le fonctionnement à 433 MHz comme suit:

- sélectionnez la ligne "#define BAND433" dans Arduino_LoRa_temp ou Arduino_LoRa_Simple_temp
- compilez lora_gateway.cpp avec "#define BAND433"
- ou exécutez simplement votre passerelle avec "lora_gateway --mode 1 --freq 433.0" pour être sur le même paramètre pour Arduino_LoRa_temp et Arduino_LoRa_Simple_temp
- il ya 4 canaux dans la bande 433MHz: 433.3MHz comme CH_00_433, 433.6MHz comme CH_01_433, 433.9MHz comme CH_02_433 et 434.3MHz comme CH_03_433

Montage de votre dossier Dropbox
================================

Avec sshfs:

- Regarder http://mitchtech.net/dropbox-on-raspberry-pi-via-sshfs/. Pas besoin de "sudo gpasswd-a pi fuse" sur Jessie.
    
    > sudo apt-get install sshfs
    
- puis autoriser l'option 'user_allow_other' dans /etc/fuse.conf
    
Avec Dropbox uploader:

- regarder http://anderson69s.com/2014/02/18/raspberry-pi-dropbox/
- regarder http://raspi.tv/2013/how-to-use-dropbox-with-raspberry-pi
- regarder https://github.com/andreafabrizi/Dropbox-Uploader
- mais pas encore testé et pas encore pris en charge

ANNEXE A
=======

Modes LoRa prédéfinis (à partir du Libelium initial SX1272.h)

| mode | BW | SF |
|------|----|----|
| 1    | 125| 12 |
| 2    | 250| 12 |
| 3    | 125| 10 |
| 4    | 500| 12 |
| 5    | 250| 10 |
| 6    | 500| 11 |
| 7    | 250|  9 |
| 8    | 500|  9 |
| 9    | 500|  7 |
| 10   | 500|  8 |

Des canaux prédéfinis dans la bande 868MHz, 915MHz et 433MHz (la plupart d'entre eux depuis le Libelium initial SX1272.h, sauf ceux marqués d'un *)

| ch | F(MHz) | ch | F(MHz) | ch | F(MHz) |
|----|--------|----|--------|----|--------|
| 04 | 863.2* | 00 | 903.08 | 00 | 433.3* |
| 05 | 863.5* | 01 | 905.24 | 01 | 433.6* |
| 06 | 863.8* | 02 | 907.40 | 02 | 433.9* |
| 07 | 864.1* | 03 | 909.56 | 03 | 434.3* |
| 08 | 864.4* | 04 | 911.72 |  - |   -    |
| 09 | 864.7* | 05 | 913.88 |  - |   -    |
| 10 | 865.2  | 06 | 916.04 |  - |   -    |
| 11 | 865.5  | 07 | 918.20 |  - |   -    |
| 12 | 865.8  | 08 | 920.36 |  - |   -    |
| 13 | 866.1  | 09 | 922.52 |  - |   -    |
| 14 | 866.4  | 10 | 924.68 |  - |   -    |
| 15 | 867.7  | 11 | 926.84 |  - |   -    |
| 16 | 867.0  | 12 | 915.00 |  - |   -    |
| 17 | 868.0  |  - |   -    |  - |   -    |
| 18 | 868.1* |  - |   -    |  - |   -    |
|  - |   -    |  - |   -    |  - |   -    |


    
ATTENTION
=========

- Il n'y a actuellement aucun contrôle sur le temps d'émission pour la passerelle et l'appareil final. Lorsque vous utilisez la bibliothèque pour créer des périphériques, vous devez vous assurer que le temps de transmission de votre appareil ne dépasse pas le temps de transmission maximal légal défini dans la réglementation de votre pays (par exemple, ETSI définit un cycle de service de 1%, soit 36s/hour).

- Bien que la bande de 900 MHz soit prise en charge (principalement pour la bande ISM américaine), la bibliothèque n'implémente pas le mécanisme de saut de fréquence ni le temps de séjour limité (par exemple 400ms par transmission).


Matériel didactique
====================

Rendez-vous sur https://github.com/CongducPham/tutorials et consultez le didacticiel "Low-cost-LoRa-GW-step-by-step".

Regardez notre [FAQ](https://github.com/CongducPham/tutorials/blob/master/FAQ.pdf)!

Obtenez la version avancée de la passerelle avec de nombreuses fonctionnalités supplémentaires
==========================================================================

Regardez le [repertoire gw_advanced](https://github.com/CongducPham/LowCostLoRaGw/tree/master/gw_advanced) et suivez les instructions.

