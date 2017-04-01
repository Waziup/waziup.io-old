---
date: 2017-03-22T00:39:48Z
title: Gestion des bovins
url: /fr/documentation/mvps/cattle
---

**Découvrez ici comment construire un collier pour suivre les bovins**

Le vol de bétail est un phénomène récurrent causant de nombreux problèmes aux agriculteurs en Afrique.
Afin de prévenir le broutage des bovins en Afrique, WAZIUP a proposé un prototype basé sur des avancées technologiques récentes, notamment LoRa.
Ce prototype repose sur une plate-forme LoRa IoT à faible coût intégrée qui se compose d'une seule passerelle low-cost (LoRa) avec des capacités de post-traitement, communiquant avec des terminaux low-cost (LoRa) et back-ended avec un IoT plate-forme cloud.

Principe
=========

Le prototype est basé sur le réseau LoRa avec une communication single hop où les bovins sont assimilés comme noeuds finaux qui envoient périodiquement des données à une passerelle LoRa.
La passerelle envoie des informations relatives à la situation des vaches au fermier via la plateforme WAZIUP en nuage si la connectivité Internet est disponible, ou directement au smartphone ou à la tablette du fermier via WiFi ou Bluetooth autrement.
Un collier conçu intégrant notre dispositif LoRa intégré est fixé autour du cou de la vache.
Ce collier intègre un système de balise qui déclenchera une alarme dans le cas où un risque est observé.

Collier conçu
---------------

L'idée de collier peut ne pas être l'innovation majeure dans la construction de ce prototype.
Cependant, la grande majorité des colliers conçus pour la gestion des bovins ne correspondent pas bien à ce qui est attendu dans le contexte du broutage des bovins en Afrique.
Cela est dû à plusieurs raisons, et le plus important est qu'ils sont facilement amovibles et les voleurs peuvent couper le collier sans la sensibilisation des agriculteurs.
Pour surmonter ce problème, nous concevons le collier de telle sorte que lorsqu'il est coupé ou enlevé, l'agriculteur sera informé.
Nous avons d'abord choisi une ceinture robuste et, plus important encore, nous avons passé le fil d'alimentation du périphérique LoRa autour du cou avec la ceinture (Fig 2b).
Un message de balise est envoyé à la passerelle lorsque le connecteur mâle (MC) et le connecteur femelle (FC) du câble d'alimentation sont connectés.
Lorsque la passerelle reçoit le message balise cela signifie que tout va bien avec le collier.

![collar](/documentation/mvps/cattle_images/collar.png)
![strap](/documentation/mvps/cattle_images/strap.png)

Système de balisage
-------------
Un message de balise est envoyé par les périphériques finaux à la passerelle quand theye MC est connecté au FC.
Le message de balise est un compteur BC (Beacon Counter) qui prend une valeur comprise entre 0 et 65536.
Les étoiles BC à 0, augmente de 1 à chaque balise, retourne à 0 après 65536 balises.
L'appareil final est conçu pour envoyer, lorsqu'il est sous tension, un message de balise toutes les 10 min.
La passerelle LoRa stocke le message de balise reçu et le traite afin de détecter si une alarme doit être déclenchée ou non.
Le résultat du traitement peut être envoyé au nuage WAZIUP si la connectivité Internet est disponible ou directement au smartphone ou à la tablette du fermier (via bluetooth ou wifi) sinon.
La réception d'un message balise signifie que le dispositif terminal qui l'envoie est dans la plage de la passerelle.
Si les vaches sont hors de portée, ou le collier est déconnecté ou endommagé, une alarme sera soulevée.

![Moo](/documentation/mvps/cattle_images/moo.png)

Déploiement
-----------

Les Prototypes sont déployés au CIMEL (Mbakhana, à 6 km de l'UGB) au Sénégal.
Une passerelle LoRa sera placée jusqu'à l'édifice de la bibliothèque UGB (hauteur de 90 mètres) et quelques colliers avec des périphériques LoRa mis en place autour du cou d'un animal identifié.
Un collier va envoyer activement et périodiquement des "balises" à la passerelle.

Matériaux
---------

1. Passerelle LoRa

- Raspberry PI (1B / 1B + / 2B / 3B)
- Module radio LoRa: Notre prototype est testé et peut fonctionner avec différents modules radio LoRa: Libelium SX1272 LoRa, le HopeRF RFM92W / 95W, le Modronix inAir9 / 9B et le NiceRF SX1276.
- Antenne: Longue antenne de l'Antenne Scan fonctionnant sur 824-894 MHz

![Antenna](/documentation/mvps/cattle_images/antenna.png)
                  
2. Dispositifs terminaux LoRa
- Arduino Nano ou Pro Mini: Pour réduire la taille du collier, les terminaux doivent être petits, alors nous devons utiliser de très petits microcontrôleurs comme arduino nano ou pro mini.

![Nano](/documentation/mvps/cattle_images/nano.png)
![Pro Mini](/documentation/mvps/cattle_images/pro_mini.png)

- Module radio LoRa + antenne

Notre prototype est testé et il peut fonctionner avec différents modules radio LoRa: Libelium SX1272 LoRa, le HopeRF RFM92W / 95W, le Modronix inAir9 / 9B et le NiceRF SX1276.
Pour les terminaux, nous utilisons une petite antenne fonctionnant sur 868MHz.

![Antennas](/documentation/mvps/cattle_images/antennas.jpg)

