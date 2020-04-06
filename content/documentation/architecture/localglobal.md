---
date: 2016-09-13T09:00:00+00:00
title: Clouds locaux et mondiaux
#menu:
#  main:
#    title: Local and global Clouds
#    parent: howwaziupworks
#    weight: 2
---

WAZIUP utilise le concept des Clouds locaux et globaux.
L'objectif est que, même sans accès à Internet, votre déploiement IoT devrait continuer à fonctionner!

<center> ![Waziup local and global](/images/localglobal.png)</center>
<center> *Waziup local and global deployements*</center>

On the left hand side of the picture, the application is designed by the developer.
It is pushed on the Waziup Cloud platform.
The orchestrator then takes care of compiling and deploying the application in the various Cloud execution environments.
Furthermore, the orchestrator drives the instantiation of the services in the Cloud.
A special file called the *manifest* is also describing which part of the application need to be installed locally, together with corresponding services.
The local application can then connect to the gateway and collect data from the sensors.
This local application part will take care of providing the service, even in the case of interruption of Internet access.
