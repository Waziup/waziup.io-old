---
date: 2017-03-22T15:44:56Z
title: IoT Challenge L'élevage du poisson
url: /fr/resources/iot-challenge/endDevice
---

## Dispositif de noeud final

Notre équipe a déjà commencé le projet pendant plusieurs semaines.
Maintenant, nous avons la première version de notre périphérique (passerelle et noeud de périphérique final). Dans cet article, je présente le nœud du périphérique final avec le matériau utilisé, l'assemblage électronique et la partie logicielle.
 
 * * *

## Partie électronique

Le dispositif d'extrémité (noeud de capteur) est une bouée contenant une boîte avec l'ensemble électronique.
Ce dispositif recueille des informations sur l'eau (température, PH et oxygène dissous) et l'envoie à la passerelle IoT via une connexion LoRa.

Comme il ne peut pas être branché à une prise électrique, l'appareil doit avoir sa propre alimentation électrique pour fonctionner.
Nous décidons d'ajouter une batterie et un panneau solaire fixé sur le haut de la bouée.

Pour le microcontrôleur nous utilisons un arduino Pro Mini dans sa version 3.3V. Ce choix a été fait pour la comsuption basse puissance du Pro Mini, sa petite taille et la facilité de développement sur elle (Arduino).
{{< figure src="/images/iot-challenge/20161118_164330.jpg" >}}

Un des défis dans ces zones rurales isolées était la nécessité de travailler sur une longue distance et des infrastructures pauvres. Le déploiement d'IoT dans ce contexte doit utiliser une communication sans fil longue portée entre le périphérique et la passerelle et des dispositifs autonomes à faible coût d'énergie. Nous décidons d'utiliser les réseaux étendus de faible puissance *LoRa*. Dans ce but, nous ajoutons un module LoRa sur le noeud: le module inAir9.

Nous utilisons les capteurs atlas DO oxygène, et l'atlas PH pour l'oxygène dissous et les mesures PH. Les deux capteurs viennent avec un petit circuit pour préciser la mesure et le calibrer (Ezo PH et Ezo DO).
Ces deux capteurs sont câblés au bus arduino via I2C qui est un bus série maître-esclave.

Pour la température, nous choisissons le DS28BT qui utilisent le bus 1 fil. Nous décidons également d'ajouter un capteur de température et d'humidité dans notre boîte pour détecter un pic élevé probable de température ou d'humidité qui va endommager notre circuit.


La dernière chose que nous ajoutons au circuit est un diviseur de tension pour obtenir la tension de sortie de la batterie et ainsi contrôler son niveau de charge.

Après un prototype de montage de circuit, nous choisissons de commander une carte de circuit imprimé plutôt que de souder directement le composant ensemble.

Ci-dessous nous avons le schéma de circuit et le schéma Pcb.

{{< figure src="/images/iot-challenge/circuit.png" title="Circuit Schema">}}
{{< figure src="/images/iot-challenge/pcb.png" title="PCB Schema">}}

Pendant la période de réception de notre carte de circuit, nous construisons la bouée. Il est composé d'une boîte étanche, de flotteur de polystyrène et de plaques de plexigas pour lier l'ensemble.
Le flotteur est bloqué en deux plaques de plexiglas et la boîte est vissée sur une dalle.
Une tige de plastique a également été ajoutée sous la bouée pour y fixer les capteurs. Ainsi, les capteurs seront entièrement submergés sous 30 cm d'eau.

{{< figure src="/images/iot-challenge/box_polystyrene.png">}}

Et quelques jours plus tard, nous avons reçu notre circuit imprimé et commencer à souder les composants.

{{< figure src="/images/iot-challenge/20170116_170718.jpg" title="PCB Schema">}}

Après la soudure, la coupe et le forage, c'est notre dernière boîte.

{{< figure src="/images/iot-challenge/final_box.png" title="Final Box">}}

 * * *

## Partie logicielle

### Bibliothèque utilisée

Pour communiquer via le bus I2C entre le capteur PH, le capteur DO et l'Arduino, [wire](https://www.arduino.cc/en/Reference/Wire) library.

L'une des parties délicates était de gérer la communication LoRa avec la passerelle. Nous utilisons la [bibliothèque LoRa](https://github.com/CongducPham/LowCostLoRaGw) Ce qui a grandement facilité le travail. Cette bibliothèque est développée par Congduc Pham qui est également membre du projet Waziup.


### Économie d'énergie
L'une des plus grandes contraintes auxquelles nous sommes confrontés est la nécessité de sauver le pouvoir.
Donc nous décidons d'obtenir des données de capteur à un taux d'environ 2 lectures par heure. Le reste du temps, le microcontrôleur et les capteurs doivent être dans une sorte de "mode veille". Cependant, nous choisissons de ne pas utiliser le mode veille disponible sur les capteurs (PH et DO) qui consomment encore un peu.
 Nous venons de couper l'approvisionnement en cas de besoin.
 
Sur l'arduino le mode veille est assisté par des interruptions, sans eux juste une réinitialisation peut réveiller l'Arduino.
Dans notre cas, nous utilisons l'interruption temporisateur du chien de garde pour gérer le mode veille.
Le minuteur de chien de garde est une petite minuterie qui force un redémarrage complet du système si elle ne reçoit pas un signal "ok" du microcontrôleur. L'avantage de cette minuterie est
Que c'est toujours runing même lorsque le système est entièrement mis en mode veille. C'est donc un bon moyen de contrôler et de réveiller le système périodiquement.

### Défaillance du système
Nous utilisons également la minuterie watchdog dans son but principal: détecter et récupérer de dysfonctionnement informatique. En cas de boucles instables, le chien de garde ne reçoit pas de signal «ok» du microcontrôleur
Et ainsi déclenchera un redémarrage de l'arduino. Il empêche les défaillances matérielles ou logicielles.

Malheureusement, j'ai passé plusieurs heures à déboguer un problème ennuyeux avec le minuteur de surveillance Arduino Pro Mini. Je découvre finalement que le problème ne provient pas de mon code, mais du bootloader original de ma carte Arduino.

Je simule une boucle infinie qui déclenche le chien de garde mais au lieu de reseting une fois l'arduino, il bloque le chargeur de démarrage dans une boucle de réinitialisation infinie.
Et donc rien ne fonctionne plus sur l'Arduino:
Je ne peux pas télécharger de nouveaux Sketch et ne peut pas réinitialiser l'arduino manuellement avec le bouton de réinitialisation. J'ai du couper déconnecter l'alimentation pour pourvoir récupérer l'Arduino.
La solution que j'ai utilisée est de clignoter un nouveau bootloader sur la carte. J'ai pris le bootloader (optiboot) de l'Arduino UNO qui utilise la même puce (atmega328) que l'arduino Pro Mini et il résout le problème.
