---
date: 2017-03-21T23:55:13Z
title: La mise en oeuvre
url: /fr/documentation/how-waziup-works/implementation
---

La plate-forme Waziup Cloud a été mise en œuvre avec une technologie de pointe, tout en gardant à l'esprit les défis à relever.

<center> ![Implémentation de Waziup](/images/implem.png)</center>
<center>*Implémentation de Waziup*</center>


La figure présente la mise en œuvre de la plate-forme Waziup.
La plate-forme Waziup utilise trois couches "Cloud" distinctes (en bleu dans l'image):

- "Infrastructure en tant que service" (IaaS),
- "Conteneur en tant que service" (CaaS),
- "Plate-forme en tant que service" (PaaS).

La première couche est fournie par [OpenStack](https://www.openstack.org/). 
Son rôle principal est de fournir des machines virtuelles (VM), dans lequel nous exécutons la plate-forme complète.
Cette couche est utile car la plupart des fournisseurs de Cloud (Amazon, Rackspace ...) utilisent les machines virtuelles comme unités de base de vente.
La deuxième couche est fournie par [Kubernetes] (http://kubernetes.io/).
Le rôle de cette couche est de fournir des conteneurs, tels que des conteneurs Docker.
Ces conteneurs offrent une virtualisation légère et ultra-rapide pour les applications et les micro-services.
Les conteneurs eux-mêmes fonctionnent à l'intérieur des machines virtuelles.
La troisième et dernière couche de nuages est fournie par [Deis] (http://deis.io/).
Il fournit des services aux développeurs, tels que la compilation et le déploiement et l'application.
Toutes les applications poussées par les utilisateurs seront compilées avec Deis et hébergées dans des conteneurs sur Kubernetes.

Pour accéder à la plate-forme, les utilisateurs et les composants externes doivent passer par le gestionnaire d'authentification et d'autorisation, qui est [KeyCloak] (http://www.keycloak.org/).
Les composants externes doivent également passer par l'API.
Les téléphones mobiles peuvent se connecter à la plate-forme via le back-end mobile.
Le back-end mobile dessert les données vers les terminaux mobiles, et interfère également avec les composants SMS et les commandes vocales.
Enfin, la passerelle peut envoyer ses données au courtier de données, qui est [FIWARE Orion] (https://fiware-orion.readthedocs.io).
Les données sont distribuées aux applications qui le demandent.
Orion interface avec la base de données et le traitement des données ([Elastic Search] (https://www.elastic.co/)), pour l'analyse des données historiques.

