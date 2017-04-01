---
date: 2017-03-22T15:45:09Z
title: IoT Challenge Fish Farming
url: /fr/resources/iot-challenge/overall
---

## Description du projet
L'objectif du projet est de donner des informations aux pisciculteurs situés dans les pays à faible revenu sur la qualité de l'eau dans leurs étangs et de soutenir les décisions. À partir des informations recueillies dans la littérature, les informations pertinentes pour la surveillance des étangs piscicoles sont: température de l'eau, oxygène dissous, PH, alcalinité, ammoniac, solides dissous totaux, dioxyde de carbone. Cependant, couvrir tous ces paramètres est très coûteux alors qu'aucune mesure n'est actuellement faite dans l'étang africain ciblé. Pour notre premier prototype, nous allons simplement récupérer la température, l'oxygène dissous et le PH et cibler un essai dans une pisciculture en Afrique, au Ghana.
## La solution
Notre solution est divisée en 3 parties:

- Une bouée équipée de capteurs pour la qualité de l'eau et la surveillance du système, ainsi qu'une récolte d'énergie renouvelable et une connectivité basée sur LoRa à la passerelle
- Une passerelle intelligente pour collecter, prétraiter et envoyer en toute sécurité des données vers le cloud. Les fonctionnalités avancées liées à la gestion des périphériques et à la prise en charge du débranchement des nuages ​​avec la livraison des applications locales sont prévues pour être ajoutées au deuxième tour.
- Un nuage pour traiter, stocker et fournir l'accès aux données via des interfaces Web ou des applications mobiles

L'appareil électronique avec les capteurs sera attaché à une bouée flottante et placé dans un étang. L'appareil sera alimenté par l'énergie solaire avec un panneau solaire sur le dessus de la bouée. L'appareil recueillera les informations nécessaires et l'enverra à la passerelle IoT.
 Des discussions initiales ont eu lieu avec le pisciculteur africain (pisciculture de chats) pour discuter de la conception de la bouée.
 
La passerelle assure la connectivité entre les capteurs et le nuage. Il prétraite les données, les stocke dans une base de données locale et les envoie au nuage. Plusieurs options sont disponibles pour la sécurité, parmi lesquelles la clé d'authentification et le cryptage des données.


Le cloud est composé d'un courtier IoT et d'un gestionnaire de stockage. Le courtier Iot fournit des mécanismes pub / sub pour gérer (recevoir et fournir) des informations. Il fournit également un système de messagerie basé sur l'abonnement. Le gestionnaire de stockage du nuage est destiné à stocker et récupérer des données. Le nuage fournira également une API pour obtenir un accès aux données.
À la fin, les services fournis aux clients seront:

- Visualisation et exploration de données sur une interface Internet
- L'envoi d'un sms ou voicecall quand une donnée dépasse les seuils définis par l'utilisateur. L'application mobile est également une option, mais la pénétration des smartphones est encore faible du côté des utilisateurs finaux.


Ces services aideront le fermier à maintenir son étang. Cela l'aidera à savoir quand traiter l'eau, changer le niveau d'eau ou nourrir les poissons. L'amélioration de la qualité de l'eau augmentera la productivité de la ferme en réduisant le taux de mortalité des poissons et en fournissant un état de croissance optimal pour les poissons.