Pushing data from sensors to the Waziup platform

This tutorial will help you to push your sensors data to the Waziup platform.
To communicate with waziup platform you will use the Http protocol, any library that is able to send Http request can be used.

#Create your sensor#

You can create a sensor measuring temperature and pressure (with initial values) like that:
It is a POST http request:
URL: http://broker.waziup.io/v2/entities 
Headers: 
•	Content-Type: application/json
•	Fiware-Service: waziup
•	Fiware-ServicePath:/wazihack

Body:
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


Id: your sensor id
Type: your sensor type
If your sensor is measuring temperature and pressure
"temperature": {
    "value": 23,
    "type": "Number"
  },

The value of your temperature sensor
It is type like: Number
You can add as much attributes as your sensor have

Update your sensor value
URL
http://broker.waziup.io/v2/entities/<yourSensorId>/attrs/<yourSensorAttribute>/value
Example:
YourSensorId is : Sensor1
yourSensorAttribute is: temperature
http://broker.waziup.io/v2/entities/Sensor1/attrs/temperature/value
Method: PUT
Headers 
•	Content-Type: text/plain
•	Fiware-Service: waziup
•	Fiware-ServicePath:/wazihack

Body: contains the new sensor value
For example the temperature is 25 now, so you put on the body:
25
Retrieve your last sensor data inserted
URL: http://broker.waziup.io/v2/entities/Sensor1/attrs/temperature/value

Method: GET
Headers: 
•	Accept: application/json
•	Fiware-Service: waziup
•	Fiware-ServicePath:/wazihack




To retrieve the list of sensors:
URL: http://broker.waziup.io/v2/entities 
Method: GET
Headers:
•	Accept: application/json
•	Fiware-Service:waziup
•	Fiware-ServicePath:/wazihack

How to remove your sensor:
If you would like to remove your sensor:
URL: http://broker.waziup.io/v2/entities/<yourSensorId>
Example:  http://broker.waziup.io/v2/entities/Sensor1 

Method: DELETE
Headers:
•	Fiware-Service: waziup
•	Fiware-ServicePath:/wazihack

Subscription

http://api.waziup.io/v1/data/subscriptions 
curl http://api.waziup.io/v1/data/subscriptions -X GET

Links:
The reference to the NGSI API
http://telefonicaid.github.io/fiware-orion/api/v2/latest/ 
