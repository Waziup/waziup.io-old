#Pushing data from sensors to the Waziup platform

This tutorial will help you to push your sensors data to the Waziup platform.
To communicate with waziup platform you will use the **Http protocol**, any library that is able to send Http request can be used.

##Create your sensor

You can create a sensor measuring temperature and pressure (with initial values) like that:

**URL:** http://broker.waziup.io/v2/entities 

**method:** POST

**Headers:** 

*	Content-Type: application/json
*	Fiware-Service: waziup
*	Fiware-ServicePath:/wazihack

**Body:**

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


* Id: your sensor id
* Type: your sensor type

In the example above, the sensor is measuring temperature and pressure. for each maesure we add an attribut:

    "temperature": {
      "value": 23,
      "type": "Number"
     }

* value: is the value of your temperature sensor
* type: is type of the value like Number

You can add as much attributes as your sensor have.

**The response** that you will get from the server will be:
        
    201 created

##Get your sensors data
To check you sensor data:

**URL:** http://broker.waziup.io/v2/entities/yourSensorId

Example:  http://broker.waziup.io/v2/entities/Sensor1 

**method:** GET

**Headers:** 

*	Content-Type: application/json
*	Fiware-Service: waziup
*	Fiware-ServicePath:/wazihack

**The response**
    
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
    
##Update your sensor value
**URL:** http://broker.waziup.io/v2/entities/yourSensorId/attrs/yourSensorAttribute/value  

Example if:

* yourSensorId is : Sensor1
* yourSensorAttribute is: temperature

the Url is:
http://broker.waziup.io/v2/entities/Sensor1/attrs/temperature/value

**Method:** PUT

**Headers:** 
* Content-Type: text/plain
* Fiware-Service: waziup
* Fiware-ServicePath:/wazihack

**Body:** contains the new sensor value.

For example the temperature is 25 now, so you put on the body:
    
    25
    
**The response:**
    
    code: 204 No Content

##Retrieve your last sensor data inserted

**URL:** http://broker.waziup.io/v2/entities/yourSensorId/attrs/yourSensorAttribute/value

Example:
URL: http://broker.waziup.io/v2/entities/Sensor1/attrs/temperature/value

**Method:** GET
**Headers:** 
* Accept:text/plain
* Fiware-Service: waziup
* Fiware-ServicePath: /wazihack

**The response:**

    code: 200 OK
    body: 25

## How to remove your sensor:

If you would like to remove your sensor:

**URL:** http://broker.waziup.io/v2/entities/yourSensorId

Example:  http://broker.waziup.io/v2/entities/Sensor1 

**Method:** DELETE

**Headers:**
* Fiware-Service: waziup
* Fiware-ServicePath:/wazihack

**The response:**

    code: 204 No Content    
    
##Subscriptions?


##Links:
The reference to the NGSI API:
http://telefonicaid.github.io/fiware-orion/api/v2/latest/ 
