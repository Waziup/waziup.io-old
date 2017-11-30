---
date: 2017-03-22T15:41:38Z
Title: Cadres et outils
url: /fr/why-use-waziup/waziup-compared-to/frameworks-and-tools
---

# Waziup comparé à...

# La Pile FIWARE IoT  
[Cette pile] (http://fiware-iot-stack.readthedocs.io/en/latest/) est similaire à WAZIUP en termes de composants adaptant l'écosystème FIWARE. Il vous permet de connecter des périphériques et de recevoir des données, en intégrant tous les protocoles et méthodes de connectivité, en comprenant et en interprétant les informations pertinentes. Il isole le traitement des données et les couches de service d'application à partir de la complexité du périphérique et du réseau, en termes d'accès, de sécurité et de protocoles réseau.


Ce sont les principaux avantages des solutions alimentées par FIWARE IoT Stack ':

* Intégration simple des données du capteur
* API indépendantes du périphérique pour le développement rapide
   d'applications et la prévention de verrouillage
* Modulaire
* Scalable. Haute disponibilité
* Ouvert et basé sur les normes. Conformité FIWARE

La principale différence entre cette pile et WAZIUP est l'utilisation de KeyCloak comme composant de sécurité dans WAZIUP.

# OPEN IOT STACK POUR LES DEVELOPPEURS JAVA

Eclipse IoT est la technologie open source qui permet aux développeurs Java de créer facilement des applications IoT. Semblable à WAZIUP, cette pile considère que open source est la clé de l'Internet des choses, et elle offre des outils pour faciliter et faciliter l'utilisation d'IoT pour les utilisateurs et les développeurs.

## IoT Constrained Device Stack

[Eclipse IoT] (https://iot.eclipse.org) fournit un ensemble de bibliothèques qui peuvent être déployées sur un périphérique intégré contraint pour fournir une pile de développement complète IoT.

### Abstraction matérielle
Afin d'assurer la portabilité, un périphérique IoT doit inclure une couche logicielle qui permet d'accéder aux fonctionnalités matérielles de la MCU, telles que la mémoire flash, les GPIO, les interfaces série, etc.

Eclipse Edje fournit une API de haut niveau pour accéder aux fonctionnalités matérielles fournies par les microcontrôleurs (p. Ex. GPIO, ADC, MEMS, etc.). Il peut se connecter directement à des bibliothèques, des pilotes et des packages de support de cartes fournis par des fournisseurs de silicium.
### La communication
Un périphérique IoT nécessite des pilotes et des protocoles qui permettent de le connecter à un protocole filaire ou sans fil, et donc de permettre la communication.

Eclipse Paho fournit une implémentation du protocole MQTT.
Mosquitto est un projet iot.eclipse.org. Eclipse Mosquitto ™ est un courtier de messages à code source ouvert (EPL / EDL) qui implémente les versions de protocole MQTT 3.1 et 3.1.1. MQTT fournit une méthode légère de transmission de messagerie à l'aide d'un modèle de publication / abonnement. Cela le rend adapté aux messages "Internet de choses" tels que les capteurs à faible puissance ou les appareils mobiles tels que les téléphones, les ordinateurs embarqués ou les microcontrôleurs comme l'Arduino.
### Gestion à distance
Il existe de nombreux cas où un périphérique IoT doit être contrôlé à distance, par exemple pour mettre à niveau son microprogramme ou pour surveiller son niveau de batterie.

Eclipse Wakaama fournit une implémentation de la norme OMA LWM2M.

## IoT Gateway & Smart Device Stack
La passerelle IoT agit comme point d'agrégation pour un groupe de capteurs et d'actionneurs pour coordonner la connectivité de ces appareils entre eux et avec un réseau externe. Une passerelle IoT peut être une partie physique du matériel ou de la fonctionnalité qui est incorporée dans une "Thing" plus grande qui est connectée au réseau. Par exemple, une machine industrielle pourrait être une passerelle et une automobile connectée ou un appareil domotique.

### Eclipse Kura
Eclipse Kura fournit un middleware et un conteneur d'applications à usage général pour les services de passerelle IoT. Une pile de passerelle IoT basée sur Eclipse Kura comprendrait les éléments suivants

* Système d'exploitation: Linux (Ubuntu / Ubuntu Core, distribution linux basée sur Yocto), Windows.
* Conteneur d'application ou Runtime Environment: Eclipse Equinox ou Eclipse Concierge (OSGi Runtime).
* Communication et connectivité: Eclipse Kura comprend des API pour interagir avec les E / S de passerelle (p. Ex. Serial, RS-485, BLE, GPIO, etc.) et support pour de nombreux protocoles de terrain qui peuvent être utilisés pour se connecter à des périphériques, par exemple MODBUS, CAN Bus, etc.
* Gestion de réseau: Eclipse Kura fournit des fonctionnalités avancées de réseautage et de routage sur une large gamme d'interfaces (cellulaire, Wi-Fi, Ethernet, etc.).
* Gestion des données et messagerie: Eclipse Kura implémente une solution de messagerie native MQTT qui permet à l'application s'exécutant sur la passerelle de communiquer de manière transparente avec une plate-forme Cloud, sans avoir à gérer la disponibilité des interfaces réseau ou comment représenter les données IoT . Le support pour les protocoles de messagerie supplémentaires est disponible via le moteur de routage des messages Apache Camel intégré.
* Gestion à distance: Eclipse Kura fournit une solution de gestion à distance basée sur le protocole MQTT, qui permet de surveiller la santé globale d'une passerelle IoT, en plus de contrôler (installer, mettre à jour, modifier les paramètres) le logiciel qu'il exécute.

### Eclipse 4diac
Eclipse 4diac fournit une infrastructure open source de qualité industrielle pour des systèmes de mesure et de contrôle de processus industriels distribués basés sur la norme CEI 61499. 4DIAC est idéal pour Industrie 4.0 et Industrial IoT applications dans un environnement de fabrication.

La norme CEI 61499 définit un langage de modélisation spécifique au domaine pour développer des solutions de contrôle industriel distribuées en fournissant un format indépendant du fournisseur et pour simplifier le support de la communication du contrôleur au contrôleur.

## IoT Cloud Platform Stack
La communauté Eclipse IoT a un certain nombre de projets axés sur la fonctionnalité requise pour les plates-formes cloud d'IoT.

La plate-forme IoT Cloud représente l'infrastructure logicielle et les services requis pour permettre une solution IoT. Une plate-forme IoT Cloud fonctionne généralement sur une infrastructure en nuage (par exemple, OpenShift, AWS, Microsoft Azure, Cloud Foundry) ou à l'intérieur d'un centre de données de l'entreprise et devrait marquer à la fois horizontalement, pour supporter le grand nombre de périphériques connectés, ainsi que verticalement Aborder la variété des solutions IoT. La plate-forme IoT Cloud facilitera l'interopérabilité de la solution IoT avec les applications d'entreprise existantes et d'autres solutions IoT.

## Les Cloud Stack
### Eclipse Kapua
Eclipse Kapua est une plate-forme modulaire fournissant les services nécessaires pour gérer les passerelles IoT et les périphériques Smart Edge. Kapua fournit un cadre d'intégration de base et un ensemble initial de services IOT principaux, y compris un registre de périphériques, des services de gestion de périphériques, des services de messagerie, la gestion de données et l'activation des applications.


L'objectif d'Eclipse Kapua est de créer un écosystème croissant de micro-services grâce aux extensions fournies par d'autres projets et organisations Eclipse IoT.

### Eclipse OM2M
Eclipse OM2M est une plate-forme IoT spécifique à l'industrie des télécommunications, basée sur la spécification oneM2M.

Il fournit une entité de service commune (CSE) horizontale qui peut être déployée dans un serveur M2M, une passerelle ou un périphérique. Chaque CSE fournit l'activation de l'application, la sécurité, le déclenchement, la notification, la persistance, l'interfonctionnement des périphériques, la gestion des périphériques.

## Composants Open Source pour IoT Cloud Platforms
### Connectivité et routage des messages
Les plates-formes IoT doivent être en mesure d'interagir avec un très grand nombre de périphériques et de passerelles en utilisant différents protocoles et formats de données, mais la normaliser pour faciliter l'intégration dans le reste de l'entreprise.

* Eclipse Hono fournit une API uniforme pour interagir avec des périphériques utilisant des protocoles arbitraires, ainsi qu'un cadre extensible pour ajouter d'autres protocoles.
* Eclipse Mosquitto fournit une implémentation d'un courtier MQTT.

### Gestion d'appareils
Une plate-forme IoT devrait pouvoir fournir de nouvelles mises à jour logicielles et gérer les périphériques.

* Eclipse Leshan fournit une implémentation du protocole de gestion de périphérique OMA LWM2M

### Registry Device
Un registre central aide à identifier et à authentifier les périphériques / passerelles fonctionnant dans une solution IoT

* Eclipse hawkBit fournit les outils de gestion pour déployer les mises à jour logicielles sur les périphériques et les passerelles

### Analytics
En dehors de la communauté Eclipse IoT, il existe de nombreuses options open source pour l'analyse et la visualisation des données, y compris Apache Hadoop, Apache Spark et Apache Storm. Dans la communauté Eclipse, Eclipse BIRT prend en charge les tableaux de bord et les rapports de données stockées dans une variété de référentiels de données.

### Application Enablement
Possibilité de consolider et d'analyser des données, et de créer des rapports, des graphiques et des tableaux de bord en exposant les interfaces de programmation d'applications (API).

* Eclipse Hono contribue à exposer des API cohérentes pour consommer des données de télémétrie ou envoyer des commandes à des périphériques afin de rationaliser le développement d'applications IoT.

{{< note title="What next?" >}}
* [Essayer Waziup](/documentation/installation/hello-world)
* [Cas d'utilisation](/why-use-wziup/use-cases/) -  auelques solutions de Waziup aux problèmes pratiques.
* Trouver [comment fonctionne Waziup](/documentation/how-waziup-works/architecture)
{{< /note >}}
