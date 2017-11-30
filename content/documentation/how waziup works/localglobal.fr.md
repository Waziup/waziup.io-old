---
date: 2017-03-21T23:55:38Z
title: Clouds locaux et mondiaux
url: /fr/documentation/how-waziup-works/localglobal
---

WAZIUP utilise le concept des Nuages locaux et globaux.
L'objectif est que, même sans accès à Internet, votre déploiement IoT devrait continuer à fonctionner!


<center> ![Waziup local et global](/images/localglobal.png)</center>
<center> *Déploiement Waziup local et global*</center>

Sur le côté gauche de l'image, l'application est conçue par le développeur.
Il est poussé sur la plate-forme Waziup Cloud.
L'orchestre s'occupe ensuite de la compilation et du déploiement de l'application dans les différents environnements d'exécution Cloud.
En outre, l'orchestreur pilote l'instanciation des services dans le Cloud.
Un fichier spécial appelé *manifest* décrit également la partie de l'application qui doit être installée localement, ainsi que les services correspondants.
L'application locale peut alors se connecter à la passerelle et collecter des données à partir des capteurs.
Cette partie d'application locale s'occupera de la fourniture du service, même en cas d'interruption de l'accès à Internet.


