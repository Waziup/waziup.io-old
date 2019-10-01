---
date: 2016-09-13T09:00:00+00:00
title: Connect by cable to your WaziGate 
menu:
  main:
    title: Connect by cable
    name: docwazigateconnect
    parent: docwazigate
    weight: 2
---

This tutorial will guide you to configure and test your Waziup gateway for the first time.
You should have the following hardware:

- A WaziGate with power cable (mini USB),
- A WaziDev with batteries,
- A laptop PC with Internet access,
- A RJ45 cable (simple network cable).

Share the internet
==================

**Just connecting the cable between your PC and the gateway is NOT enough to access the gateway.
You NEED to configure "internet sharing" on the PC, in order to attribute an IP to your gateway.**

The first step is to configure your PC to provide connectivity to your gateway. Follow those steps:

- Connect gateway to power. The gateway should boot automatically.
- Connect RJ45 cable between the PC and the gateway.
- Configure the network sharing panel on your PC.

For a MAC
---------

Go to System Preferences > Sharing:

![Mac sharing](../images/MacSharing.png)

Select the connection you want to share from, and select Ethernet:

![Mac sharing2](../images/MacSharing2.png)

Click again on “Internet sharing”. The green light will show and Internet Sharing will change to On.

For Linux
---------

Open the program `nm-connection-editor`.
You may need to install the package `network-manager-gnome`. 

![Linux sharing](../images/LinuxSharing.png)

Then select the wired connection, and select "Shared to other computers" in IPV4 Settings.


For Windows
-----------

On windows, go to the Network and Sharing Centre in the Control Panel, “Change adapter settings,” right-click the adapter that has the Internet connection (for example WiFi), and click Properties.

In the Properties box, click the sharing tab and tick the “Allow other network users to connect …” box. Next, click the drop-down under “Home networking connection,” and select the ethernet adapter.

![Windows sharing](../images/WindowsSharing.jpg)

Connect to your gateway
=======================

At this stage, our gateway should have access to internet. 
On systems equipped with Avahi, you can already use this address: http://wazigate.local/admin

Otherwise, you need to find its IP. 

- Install AngryIP Scanner: https://angryip.org/download/#mac
- Scan the IPs from 192.168.2.1 to 192.168.2.254

The IP of the gateway should be in the results. 
Use a web browser on your laptop and open http://<gateway IP>/admin. Here are the default login and password (they can be changed later):

- Login: admin
- Password: loragateway

The admin panel should open. You can check that the gateway has access to the internet by clicking on the “Internet” button.

