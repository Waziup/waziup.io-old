---
date: 2018-04-11T09:00:00+00:00
title: Notifications 
menu:
  main:
    name: docdashnotifs
    title: Notifications
    parent: docdashboard
    weight: 5
---

The notifications allow you to program SMS or Twitter messages, triggered by events on your sensors.
For instance, if a sensor value becomes too high, a SMS will be sent to the user.
The notification list is shown below.
 
![Notification page](../images/notifs.png)

For each notification, you can see its name, ID, sensor name and condition.
Let's create a notification for your sensor!
Click on the “Add notification” button.

![New notification](../images/notif_new.png)

You need to select your sensor id in the list, and then the measurement id.
For instance, select *MySensor* and *TC*, to make a notification on the temperature measured by MySensor.

The next field contains the condition for sending the message.
Examples of expressions include “TC==10”, “TC==10..30”, “TC>30”, “Color==orange,red”.
The list of operators is: “==”, “!=”, “>”, “<”, “>=”, “<=”.
Several conditions can be concatenated with “;”, for example: “TC>30; HUM<20”.
The Message field contains the message to be sent to the user.
It can contain variables, which will be replaced by their values when the message is sent.
For example, you can include the current value of a sensor in the message with “Field sensor value is ${TC}”.

The next step is to select the users you want to send it to.
Select your own username here.
Finaly, select the social media to send one.
Remember, your account need to be configured with your phone number and Twitter account to receive messages.

Once this is done, you can validate.
You should be able to see your notification in the list.
You can click on that notification to view the details.

![New notification](../images/notif.png)


Did you receive anything?
You should see the number of times this notification was sent, and the time for the last sending in the box "Status".


