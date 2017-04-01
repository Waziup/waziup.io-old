---
date: 2017-03-21T23:54:54Z
title: Architecture et composants
url: /fr/documentation/how-waziup-works/architecture
---


WAZIUP est une plateforme IoT et Cloud basée sur Kubernetes.
Regardons à l'intérieur pour voir comment il est construit.

<center> ![Architecture Waziup](/images/archi.png)</center>
<center> *Architecure Waziup*</center>


Waziup a quatre domaines fonctionnelles:

- Plateforme Application,
- Plateforme IoT,
- Sécurité et confidentialité,
- Analyse de flux et de données

La plateforme Application
-------------------------

Waziup vous permet de développer une application IoT et de la déployer dans le Cloud et dans la passerelle.
Tout ce que vous avez à faire est de fournir le code source de votre application dans n'importe quelle langue, Waziup fait le reste.
Un outil de développement rapide d'applications (RAD) peut être utilisé, tel que Node-Red.

L'orchestre s'occupera de la compilation de votre application.
Il déploiera ensuite l'application dans l'environnement d'exécution Cloud.
Il instancie également les services nécessaires à l'application.
La dernière tâche de l'orchestrateur est de demander le capteur et les connexions des sources de données à partir des composants IoT.



La plateforme IoT
-----------------

Le module de découverte de capteurs est chargé de récupérer une liste de capteurs qui correspond au besoin de l'application.
Sur le côté gauche du diagramme, les propriétaires de capteurs peuvent enregistrer leurs capteurs avec la plate-forme.
Les capteurs sélectionnés pour chaque application fourniront leurs données via le pont IoT et le préprocesseur.
Le pont IOT est chargé de se connecter directement aux capteurs via le réseau sans fil.
Le préprocesseur contient les routines de prétraitement des données, telles que le nettoyage, l'extrapolation, l'agrégation et la moyenne des mesures des capteurs.


Analyse de flux et de données
-----------------------------

Le courtier de données est chargé de collecter et de distribuer les données des capteurs aux applications.
Les données historiques peuvent être stockées à l'aide du gestionnaire de stockage.
Les sources de données externes telles que les API Internet peuvent également être connectées directement au courtier de données.
En outre, l'analyse et la visualisation des données sont effectuées à l'aide du composant dédié.

Sécurité et confidentialité
---------------------------

Le domaine Sécurité et confidentialité comprend trois éléments:

- Le gestionnaire d'identité,
- Le gestionnaire d'autorisation,
- Le gestionnaire de confidentialité.

Le premier est chargé de fournir l'identification, les rôles et les connexions des utilisateurs.
Le gestionnaire d'autorisation fournit la politique d'accès pour chacune des ressources WAZIUP.
Enfin, le Privacy Manager fournit des services pour la confidentialité des communications et l'anonymisation des données.