---
url: /fr/documentation/tutorials/push-data

---

Pousser les données des capteurs
================================

Ce tutoriel vous aidera à transférer vos données de capteurs sur la plate-forme Waziup.
Pour communiquer avec la plate-forme Waziup, vous utiliserez le protocole **Http**, toute bibliothèque capable d'envoyer une requête Http peut être utilisée.

Créez votre capteur
-------------------

Vous pouvez créer un capteur mesurant la température et la pression (avec des valeurs initiales) comme ça:

**URL:** http://broker.waziup.io/v2/entities 

**method:** POST

**Headers:** 

* Content-Type: application/json
* Fiware-Service: waziup
* Fiware-ServicePath:/wazihack

**Body:**
```
{
  "id": "Sensor1",
  "type": "SensingDevice",
  "temperature": {
    "value": 23,
    "type": "Number"
  },
  "pressure": {
    "value": 720,
    "type": "Number"
  }
}
```

* Id: l'id de votre capteur
* Type: le type de votre capteur

Dans l'exemple ci-dessus, le capteur mesure la température et la pression.
Pour chaque mesure, nous ajoutons un attribut:

```
"temperature": {
  "value": 23,
  "type": "Number"
 }
```

* value: est la valeur de votre capteur de température
* type: est le type de la valeur comme Number

Vous pouvez ajouter autant d'attributs que votre capteur.

**La réponse** que vous obtiendrez du serveur sera:

```
201 created
```

Exemple de requête de curl:

```
$ curl http://broker.waziup.io/v2/entities -s -S --header 'Content-Type: application/json' --header 'Fiware-ServicePath:/wazihack' --header 'Fiware-Service: waziup' -X POST -d @- <<EOF
{
  "id": "Sensor1",
  "type": "SensingDevice",
  "temperature": {
    "value": 23,
    "type": "Number"
  },
  "pressure": {
    "value": 720,
    "type": "Number"
  }
}
EOF
```


Obtenez vos données de capteurs
-------------------------------

Pour vérifier vos données de capteur:

**URL:** http://broker.waziup.io/v2/entities/&lt;yourSensorId&gt;

Exemple:  http://broker.waziup.io/v2/entities/Sensor1 

**method:** GET

**Headers:** 

* Fiware-Service: waziup
* Fiware-ServicePath:/wazihack

**La réponse**
  
```  
code: 200 OK
body:
{
  "id": "Sensor1",
  "type": "SensingDevice",
  "pressure": {
     "type": "Number",
     "value": 720,
     "metadata": {}
  },
  "temperature": {
     "type": "Number",
     "value": 23,
     "metadata": {}
  }
}
```   
Exemple de requête curl:
```
$ curl http://broker.waziup.io/v2/entities/Sensor1 --header 'Fiware-ServicePath:/wazihack' --header 'Fiware-Service:waziup' -X GET
```

 
Mettre à jour la valeur de votre capteur
----------------------------------------

**URL:** http://broker.waziup.io/v2/entities/&lt;yourSensorId&gt;/attrs/&lt;yourSensorAttribute&gt;/value  

Exemple:

* yourSensorId is : Sensor1
* yourSensorAttribute is: temperature

L'URL is:
http://broker.waziup.io/v2/entities/Sensor1/attrs/temperature/value

**Method:** PUT

**Headers:** 

* Content-Type: text/plain
* Fiware-Service: waziup
* Fiware-ServicePath:/wazihack

**Body:** contains the new sensor value.

Par exemple, la température est de 25 maintenant, donc vous mettez sur le corps:
```
25
```    

**La réponse:**
```  
code: 204 No Content
```

Exemple de requête de curl:
```
$ curl http://broker.waziup.io/v2/entities/Sensor1/attrs/temperature/value -s -S --header 'Content-Type: text/plain' --header 'Fiware-ServicePath:/wazihack' --header 'Fiware-Service:waziup' -X PUT -d 27
```

## Récupérer les dernières données de capteur insérées

**URL:** http://broker.waziup.io/v2/entities/&lt;yourSensorId&gt;/attrs/&lt;yourSensorAttribute&gt;/value

Exemple:
URL: http://broker.waziup.io/v2/entities/Sensor1/attrs/temperature/value

**Method:** GET
**Headers:** 

* Accept:text/plain
* Fiware-Service: waziup
* Fiware-ServicePath: /wazihack

**La réponse:**
```
code: 200 OK
body: 25
```

Exemple curl:
```
$ curl http://broker.waziup.io/v2/entities/Sensor1/attrs/temperature/value --header 'Fiware-ServicePath:/wazihack' --header 'Fiware-Service:waziup' -X GET
```

## Comment supprimer votre capteur:

Si vous souhaitez supprimer votre capteur:

**URL:** http://broker.waziup.io/v2/entities/&lt;yourSensorId&gt;

Exemple:  http://broker.waziup.io/v2/entities/Sensor1 

**Method:** DELETE

**Headers:**

* Fiware-Service: waziup
* Fiware-ServicePath:/wazihack

**La réponse:**
```
code: 204 No Content        
```

Exemple curl:
```
curl http://broker.waziup.io/v2/entities/Sensor1 --header 'Fiware-ServicePath:/wazihack' --header 'Fiware-Service:waziup' -X DELETE

```

Liens
-----

La référence à l'API NGSI:
http://telefonicaid.github.io/fiware-orion/api/v2/latest/ 
