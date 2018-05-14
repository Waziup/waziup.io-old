---
date: 2016-09-13T09:00:00+00:00
title: Architecture and components
menu:
  main:
    title: Architecture
    parent: howwaziupworks
    weight: 1
---

WAZIUP is an IoT and Cloud platform based on Kubernetes.
Let's look inside to see how it is built.

<center> ![Waziup architecture](/images/archi.png)</center>
<center> *Waziup architecture*</center>


Waziup has four functional domains:

- Application platform,
- IoT platform,
- Security and privacy,
- Stream & data analytic

Application platform
--------------------

Waziup allows you to develop an IoT application and deploy it in the Cloud and in the Gateway.
All you have to do is provide the source code of your application in any language, Waziup does the rest.
A rapid application development (RAD) tool can be used, such as Node-Red.

The orchestrator will take care of compiling your application.
It will then deploy the application in the Cloud Execution Environment.
It will also instantiate the services needed by the application.
The last task of the orchestrator is to request the sensor and data sources connections from the IoT components.

IoT platform
------------

The sensor discovery module is in charge of retrieving a list of sensors that matches the application need.
On the left side of the diagram, sensor owners can register their sensors with the platform.
The sensors selected for each application will deliver their data through the IoT bridge and pre-processor.
The IoT bridge is in charge of connecting directly to the sensors through the wireless network.
The pre-processor contains the routines for pre-processing the data, such as cleaning, extrapolating, aggregating and averaging the sensors measures.

Stream & data analytic
----------------------

The data broker is in charge of collecting and distributing the data from the sensors to the applications.
Historical data can be stored using the Storage manager. 
External data sources such as Internet APIs can also be connected directly to the data broker.
Furthermore, data analytics and visualizations are performed using the dedicated component.

Security and privacy
--------------------

The Security and Privacy domain contains three components:

- the Identity Manager, 
- the Authorization Manager,
- the Privacy Manager.

The first one is in charge of providing the identification, the roles and the connections of the users.
The Authorization Manager provides the access policy for each of the WAZIUP resources.
Finally the Privacy Manager provides services for the privacy of communication and also the anonymization of data. 
