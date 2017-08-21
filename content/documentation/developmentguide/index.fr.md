---
url: /fr/documentation/developmentguide/
---

# Guide de Développement pour la plate-forme logicielle

## Expérience avec swagger pour WAZIUP REST API

Nous avons développé Waziup API avec Swagger. Vous pouvez trouver des informations complètes sur [github](https://github.com/Waziup/Platform/tree/master/APIs).

## Le courtier WAZIUP (broker)

Le courtier WAZIUP est un [courtier de données](https://github.com/Waziup/Platform/tree/master/broker). [FIWARE Orion](https://github.com/Waziup/Platform/tree/master/broker/orion) est utilisé comme courtier de contexte pour Waziup.


### Données historiques

Cette API fournit des données historiques sur les mesures des capteurs. Plus d'[info](https://github.com/Waziup/Platform/tree/master/broker/comet)

### Enregistrement des capteurs

[Cygnus](https://github.com/Waziup/Platform/tree/master/broker/cygnus) Cygnus est utilisé comme abonné et évier de données Orion, afin de sauvegarder les données historiques dans MongoDB.


Le test du courtier et les API historiques peuvent être trouvés ici.

## Visualisation
Plus d'[information](https://github.com/Waziup/Platform/tree/master/visualisation).

## Gestion de l'identité et contrôle d'accès
Plus d'[information](https://github.com/Waziup/Platform/tree/master/identity).

