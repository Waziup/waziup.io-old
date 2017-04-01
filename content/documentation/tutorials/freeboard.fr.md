---
url: /fr/documentation/tutorials/freeboard
---

# TUTORIAL POUR LA VISUALISATION DE FREEBOARD

Ce tutoriel vous aidera à créer votre tableau de bord Freeboard pour visualiser les données que vous appuyez sur la plate-forme WAZIUP.

Il y a 2 options:

1- vous pouvez utiliser le Freeboard hébergé sur la plate-forme WAZIUP (même identifiant et mot de passe que la plate-forme WAZIUP)

2- vous pouvez utiliser votre propre compte Freeboar

## Option 1 - Créer un tableau de bord sur la plateforme waziup
### Création de votre tableau de bord
Avec cette option, il est obligatoire d'utiliser un google chrome navigateur web.
Rendez-vous sur http://freeboard.waziup.io/

Vous trouverez un tableau de bord franc vide, prêt à être personnalisé.
### Étape 1 - Configurer la source de données
Tout d'abord, nous devons configurer la source de données pour obtenir vos données de la plate-forme WAZIUP.
N'oubliez pas que vos données doivent déjà être appuyées sur la plate-forme WAZIUP (voir le didacticiel sur la façon de pousser vos données).

Une source de données correspond à un capteur.
Vous devez configurer autant de sources de données que de capteurs que vous voulez surveiller.

Cliquez sur le bouton "ajouter" sous DATASOURCES.

Ensuite, il vous sera demandé de sélectionner un type. Choisissez FIWARE Orion.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/freeboard/datasource2.JPG?raw=true)

Ensuite, vous pouvez choisir le nom de vos données. Par exemple "my_temperature_sensor"

Dans Host: port, out: `broker.waziup.io`

ThingProxy doit être "yes"

Sous le service de fiware et le chemin de service de fiware, mettez celui que vous avez choisi pour pousser les données sur la plate-forme.
Par exemple: waziupservice et / yourEmpresa

Laisser x-auth-token vide

Le type et l'ID sont les mêmes que ceux utilisés pour pousser les données sur la plate-forme.
Par exemple: mysensors et temperature1

Avancé doit être "non".

Enfin, choisissez le temps de rafraîchissement dont vous avez besoin, par exemple 5 secondes.

Cliquez ensuite sur Enregistrer. Répétez cette procédure pour chaque capteur que vous devez surveiller.

Lorsque vous avez configuré toutes vos sources de données (vous pouvez les voir sous DATASOURCES), passez à l'étape suivante.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/freeboard/data_added.JPG?raw=true)

### Étape 2 - Configuration du panneau

Maintenant nous devons configurer le panneau pour visualiser les données.

Cliquez sur ADD PANE.

Un nouveau panneau apparaît, pour le moment il est vide.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/freeboard/add_pane.jpg?raw=true)

Cliquez sur le bouton pour configurer la taille et le nom du panneau.
Il peut être de 1 ou 2 colonnes.
Vous pouvez également le supprimer en cliquant sur le bouton Corbeille.

Cliquez sur le bouton + pour ajouter une visualisation des données.
Vous pouvez choisir plusieurs types de visualisation. Pour cet exemple, nous sélectionnerons Gauge.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/freeboard/temperature%20gauge.JPG?raw=true)

Choisissez un titre pour votre visualisation, par exemple: "température dans mon bassin d'eau numéro 1"

Pour avoir une valeur, cliquez sur "+ datasource" et sélectionnez dans la liste la source de données que vous voulez voir dans ce panneau.

Sélectionnez les unités et la valeur min / max pour avoir une meilleure visualisation personnalisée.

Cliquez sur Enregistrer, et vous verrez la jauge indiquant les données (température dans cet exemple).

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/freeboard/temperature_panel.JPG?raw=true)

Répétez cette opération pour chaque visualisation que vous souhaitez voir.

Vous pouvez également ajouter du texte et des images pour illustrer votre tableau de bord.


### Étape 3 - Enregistrez et publiez le tableau de bord

Maintenant, avant de quitter la page, vous devez enregistrer votre tableau de bord.

Ne rafraîchissez jamais la page avant de l'enregistrer, car vous perdrez tout!

Cliquez sur le bouton Enregistrer, sélectionnez Pretty et téléchargez le fichier .json.
Appelons ce fichier "example_dashboard.json"

Puis, téléchargez ce fichier sur waziup github dans Platform/master/UIManager/freeboard/

Une fois votre tableau de bord téléchargé sur Github, vous pouvez le visualiser en suivant ce lien:

http://freeboard.waziup.io/index.html#source=https://raw.githubusercontent.com/Waziup/Platform/master/UIManager/freeboard/example_dashboard.json#/

Il vous suffit de remplacer "example_dashboard" par le nom réel de votre fichier.

C'est tout ! Si vous souhaitez le modifier, vous devez procéder à l'étape 3 à nouveau.

## Option 2 - Créer un tableau de bord en dehors de la plateforme waziup
### Création de votre tableau de bord
Rendez-vous sur https://freeboard.io/. Créez un compte ou utilisez le vôtre si vous en avez déjà un.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/freeboard/new_dashboard.JPG?raw=true)

Choisissez un nom pour votre tableau de bord et cliquez sur "créer un nouveau".

### Étape 1 - Configurer la source de données
Cette étape est la même que l'option 1
### Étape 2 - Configuration du panneau
Cette étape est la même que l'option 1
### Étape 3 - Enregistrez et publiez le tableau de bord
Avec cette option, vous n'avez pas besoin d'enregistrer ou de publier votre tableau de bord.
Il est automatiquement enregistré dans votre compte et le lien pour y accéder est le lien dans votre navigateur.
Rafraîchir la page ne vous fera pas perdre vos données.

