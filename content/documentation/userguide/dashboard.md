---
date: 2016-09-13T09:00:00+00:00
title: Dashboard application 
---

You can build a full application with Waziup, without programming!
In this tutorial, we'll learn how to build a soil monitoring application able to display the soil moisture and to send notifications on SMS, twitter and voice messages.
More advanced dashboards can be created with [Kibana](tutorials/software/Kibana_tutorial.pdf).

Create a user
-------------

The first thing to do is to create a login and a password.
Click on “Go to dashboard” button.
This will lead you to a page as shown below.
 
![Waziup login page](images/login.png)

You can create a new account by clicking on “Register” of by using a social network OpenId procedure.
All communications will be secured by SSL. 

Sensors
-------

Clicking on the “Sensors” menu entry will lead you to the sensors page.
 
![Waziup sensors page](images/sensor_view.png)

As show in the picture, this page displays the list of the current sensors.
It shows their names, owners, last values and status.
The status displays “ACTIVE” if the sensor has sent data in the last 2 hours, otherwise “INACTIVE” is displayed.
The green button above allows adding new sensors.
It is also possible to search one specific sensor by using its service name through the list of sensors.
For example we can see in the Figure 3 that UPPA_Sensor is searched from the list of sensors, all sensors with the same name are shown in the search results.
Once displayed, a list of actions is available for each sensors: View, Edit and Delete.

By clicking on the add button, a modal window is opened, shown in Figure 4. This window allows creating a new sensor, with the name, position, location, type and service path. The service path represents the group of assets the sensor belongs to. The type should always be set to “Sensing Device” for sensors.


Notifications
-------------

The notifications allow you to program SMS messages triggered by events on the sensors.
For instance, if a sensor value becomes too high, an SMS will be sent to the user.
The notification view is shown below.

 
![Notification page](images/notifs.png)

You can add a new notification by clicking on the “Add” button, as shown in Figure 8.
You will be asked for a description of the notification, a phone number, a message, a sensor name and attribute, an expression and an expiration date.
The Expression contains the condition for sending the message.
The syntax used it the “Simple Query Language” from FIWARE Orion.
The language allows to express conditions on sensor values.
The Sensors and attributes have to be selected.
Several sensors and attributes can be selected.
The attribute name can then be used in the expression.
Examples of expressions include “TC==10”, “TC==10..30”, “TC>30”, “Color==orange,red”.
The list of operators is: “==”, “!=”, “>”, “<”, “>=”, “<=”.
Several conditions can be concatenated with “;”, for example: “TC>30; HUM<20”.
The Message field contains the message to be sent to the user.
It can contain variables, which will be replaced by their values when the message is sent.
For example, you can include the current value of a sensor in the message with “Field sensor value is ${TC}”.

 
![New notification](images/new_notif.png)

By clicking on a a specific notification, you can access the detailed view, shown below.
It contains all the data provided data creation time.
It also contains two additional fields: the time sent and the last notification time.
These two values identify how many times the notification was sent to the use (if any), and when.
 
![Notification details](images/notif.png)

