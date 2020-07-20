---
title: WaziGate User Manual 
layout: singletoc
menu:
  main:
    title: WaziGate
    name: docwazigate
    parent: documentation 
    weight: 2
---

Overview
========

This document will guide you through the steps to assemble your Wazigate and configure it in order to connect to the Waziup Cloud.
This documentation is available in [PDF format](/docs/WaziGate_User_Manual-V1.0.pdf).

Prepare the Gateway Hardware
============================

If you have a Raspberry PI and want to setup your WaziGate yourself this section is for you.
If you already have your Wazigate in a box, just [skip](#flash-the-wazigate) this section.

What do you need to start?
--------------------------

You need the following *hardware* to start:

- A Raspberry Pi (Model 3B+ is recommended)
- An SD card (minimum 8 GB)
- A power supply for the raspberry pi (usually 5.1V, 2+A)
- A LoRa antenna
- A LoRa Hat such as WaziHat

![Hardware elements](media/image43.png)

You also need the following *software*:
 
- [Wazigate ISO image](https://downloads.waziup.io/WaziGate_latest.zip)
- [Balena Etcher](https://www.balena.io/etcher/)

Assemble the WaziGate
---------------------

There are only two simple steps to assemble your WaziGate.

{{%action%}}
**Step \#1:** Attach the heat sinks. 
{{%/action%}}

As WaziGate can perform Edge processing on you data, it is always a good idea to attach heat sinks in order to avoid overheating.
Raspberry PI can have 3 heatsinks, on the 3 processors.

![Heat sink mounting](media/image36.png)

{{%action%}}
**Step \#2:** Mount a WaziHat on the Raspberry PI.
{{%/action%}}

Be careful to align correctly the pins in the arrays.

![WaziHat mounted](media/image28.png)


{{%warning%}}
**Note:** If you do not have a ***Wazihat*** board and want to use your own LoRa module, please refer to [this documentation](https://github.com/CongducPham/tutorials/blob/master/Low-cost-LoRa-GW-step-by-step.pdf).
{{%/warning%}}


Flash the WaziGate 
==================

{{%action%}}
**Step \#1:** Download the latest version of the [Wazigate ISO image](https://downloads.waziup.io/WaziGate_latest.zip).
{{%/action%}}

![Save Wazigate ISO image](media/image34.png)

{{%action%}}
**Step \#2:** Download [Balena Etcher](https://www.balena.io/etcher/) and install it on your PC.
{{%/action%}}


![Balena etcher](media/image10.png)


{{%action%}}
**Step \#3:** Open the ***Balena Etcher*** tool and select the downloaded zip file.
{{%/action%}}

![Select the ISO image](media/image22.png)

{{%action%}}
**Step \#4:** Insert your SD card to your PC and when appear, select it in **Etcher**
{{%/action%}}

![Select the SD card drive](media/image17.png)

{{%warning%}}
 **Warning:** Your Micro SD card must be at least **8 GB**. **16 GB** is better.     
{{%/warning%}}
          
If your laptop does not have the SD card reader, you need a USB adapter to connect your Micro SD card to your PC.  

{{%action%}}
**Step \#5:** Click on **Flash** to start flashing.
{{%/action%}}

![Flashing...](media/image27.png)

{{%action%}}
**Step \#6:** When Flashing is done, remove your Micro SD card and insert it into your raspberry pi.
{{%/action%}}

![Flashing complete](media/image15.png)

Congratulations! Your hardware is now ready.


Powering up Wazigate
====================

{{%action%}}
**Step \#1:** Attach the antenna
{{%/action%}}

{{%warning%}}
**Very Important**: always connect the antenna first, before powering up your device.
{{%/warning%}}

![Antenna attached](media/image41.png)

{{%action%}}
**Step \#2:** Plug the power cable (micro usb) into the gateway and plug the adapter to the outlet.
{{%/action%}}

![Power adapter](media/image14.png)

You should see a light is on and another light next to it is actively blinking.


Configuration
=============

Find the Wazigate Web UI
------------------------

{{%action%}}
**Step \#1:** Find the wazigate hotspot
{{%/action%}}

When you power up Wazigate for the first time, it usually does some self-configs and reboots itself.
So, be patient, it might take a couple of minutes for you to see the Wazigate WiFi hotspot to connect to.                  
                                
The WiFi hotspot has a similar name of what you see in the photo: ***WAZIGATE\_XXXXX***. 
XXXXX usually is the ID of your gateway.                   

![Select WaziGate hotspot](media/image26.png)

{{%action%}}
**Step \#2:** Connect to the Wazigate WiFi hotspot
{{%/action%}}

![Enter hotspot password](media/image38.png)

The default password for the hotspot is ***loragateway***            
Enter the password and click on connect.                        
                                
{{%action%}}
**Step \#3:** Open the Wazigate Web UI.
{{%/action%}}

Wazigate is configured through a web user interface.
When you connect to the Wazigate hotspot, you need to open your browser and go to one of the following addresses:

- [http://192.168.200.1](http://192.168.200.1)
- [http://wazigate.local/](http://wazigate.local/)

Then you should see something like this.

![WaziGate login page](media/image6.png)

Please enter the default username and password and click on **Login**.

{{%warning%}}
For security reasons, please change the default password as soon as you can see the profile page. This page can be found in the menu at the top-right corner of the screen.
{{%/warning%}}

![Change your password](media/image20.png)



Registration with the Cloud
---------------------------

{{%action%}}
**Step \#1:** Login for the first time.
{{%/action%}}

When you login for the first time, you should see something like this.

![First login](media/image18.png)

**Note:** Setup wizard is also accessible from the side menu.

![Setup wizard](media/image31.png)


{{%warning%}}
If you do not have an account on [Waziup dashboard](https://dashboard.waziup.io/), you need to create one first.
{{%/warning%}}

A Waziup account enables you to receive all your sensor data in your dashboard and manage your Wazigate remotely.

{{%action%}}
**Step \#2:** Configure Wazigate to be recognized by the Cloud.
{{%/action%}}

Once you click on Yes in the previous page, you should see something like this:

![Cloud registration](media/image32.png)

{{%action%}}
**Step \#3:** Give a nice name to your gateway
{{%/action%}}

![Gateway name](media/image40.png)

***Gateway Name*** is a custom name that you give to your gateway to be able to identify this particular gateway from your other gateways.
It can be anything like *Fish Farm gateway*, *Water Control Gateway*, *Ali's Field Gateway*, and so on.
After writing, hit the **Enter** button on your keyboard or click on the ![](media/image39.png) icon to save your values.

{{%action%}}
**Step \#4:** Set WaziCloud credentials in Wazigate
{{%/action%}}

Click on the ***[Empty]*** value next to the *Email Address / Login* and enter your waziup dashboard email address and save it.

![Set up login and password](media/image12.png)

Do the same thing for password as well.
When you save successfully both login and password values, click on the **Next** button.


 
Connecting to the Internet
--------------------------

{{%action%}}
**Step \#1:** Select Wifi network and enter password.
{{%/action%}}

If you plan to connect your Wazigate through another way like Ethernet cable or 3G/4G dongle, then just click on **Skip**.

![Wifi config](media/image30.png)

Once Wazigate found all the available WiFi networks in range, click on the network that you want to connect to and enter its password in the box.

{{%action%}}
**Step \#3:** Click on Connect and Finish.
{{%/action%}}

![Connect Wifi](media/image4.png)

{{%warning%}}
**Warning:** Once you setup your WaziGate to connect to a WiFi network, you will lose the Hotspot connection.
{{%/warning%}}

![Hotspot disconnected](media/image16.png)

If you enter your WiFi password correctly and the internet is available, after a few minutes you will be able to see it in your WaziCloud dashboard.

{{%warning%}}
**Note:** If Wazigate does not manage to connect to your WiFi due to wrong credentials or not being in the range of the WiFi router, it will rollback to the hotspot mode and you need to connect to it again and start over. *This might take a few minutes depending on the router.*
{{%/warning%}}

Connect to your gateway
-----------------------

At this stage, your gateway should have access to internet. However in order to connect to it,we need to find its IP.
If you have OLED installed on raspberry pi the IP will be shown directly on the screen

![OLED IP](media/image50.jpg)

Otherwise you can find it by following this simple tutorial:
- Download AngryIP Scanner [here](https://angryip.org/download)
- Connect your PC/Laptop on the same Wi-Fi that the raspberry pi is connected to
- Scan the IPs

The IP of the gateway should be in the result

![IP scanner](media/image51.png)

Use a web browser on your laptop and open http://<gateway IP>

Verify Gateway Registration
---------------------------

{{%action%}}
**Step \#1:** Open the waziup dashboard
{{%/action%}}

Go to the [Waziup](https://waziup.io) website.

![Waziup.io website](media/image35.png)

{{%action%}}
**Step \#2:** Click on "Go to Dashboard" and enter your credentials and Login.
{{%/action%}}


![Register a user](media/image37.png)

{{%action%}}
**Step \#3:** Click on Gateways.
{{%/action%}}

![Gateways](media/image19.png)

If everything went well so far, you should see your gateway in the list.

{{%action%}}
**Step \#4:** Click on your gateway.
{{%/action%}}

Your gateway details will open.

{{%action%}}
**Step \#5:** Then click on the "Remote access" button.
{{%/action%}}

![Gateway details](media/image25.png)

{{%action%}}
**Step \#5:** Logging into your Wazigate.
{{%/action%}}

![Remote login](media/image8.png)

If you see something like this, then Congratulations! :) You made it.                   
Now you can simply manage your gateway remotely through your Waziup dashboard.

Annex
=====

Connect with Ethernet cable to PC
---------------------------------

This section will guide you to connect your Wazigate to your PC using an Ethernet cable.
This is useful to access the WaziGate UI for configuration.
You should have the following hardware:

- A Waziup gateway with power cable (mini USB)
- A laptop/PC with an RJ45 slot or adapter
- A RJ45 cable (simple network cable)
- Internet access on your laptop/PC

First, connect the RJ45 cable between your laptop/PC and the WaziGate.

In order to connect from your computer to the WaziGate, we need to activate the DHCP service on your computer.
The local DHCP will attribute an IP address to the WaziGate.
This option is usually called "Share the internet connection" on your computer.
The following sections show the procedure for Windows, Mac and Linux.

### Windows

On Windows, do the following:

{{%action%}}
**Step \#1:** Open Control panel.
{{%/action%}}

Press  shortcut key combination Windows + R , type “control” and click ok button

![Control panel](media/image44.png)

Here click on "Network and Internet" menu and then "Network and sharing center".

{{%action%}}
**Step \#2:** Select sharing connection.
{{%/action%}}

Click on your internet connection and go to “Properties”.

![Select connection](media/image46.png)

{{%action%}}
**Step \#3:** Allow sharing connection.
{{%/action%}}

Switch to the “Sharing” tab and check the box to allow other users to connect to the internet through your computer.

![Allow sharing W.](media/image47.png)

The WaziGate should now have an IP. You can connect to it using this link: http://wazigate.local.


### Linux

On Linux, do the following:

{{%action%}}
**Step \#1:** Open connection editor.
{{%/action%}}

Open the connection editor  through the terminal using the comand:
```
  nm-connection-editor
```
<br>

If `nm-connection-editor` if not present, you need to install it.

{{%action%}}
**Step \#2:** Sharing connection.
{{%/action%}}

When it opens, select the wired connection item, clicking the edit button. In that menu, switch to the IPv4 tab, and select the method: ‘shared to other computers’

![Allow sharing L.](media/image48.jpg)

After that, save everything and connect your cable if you haven’t already, and DHCP should kick-in and set everything up for you.

The WaziGate should now have an IP. You can connect to it using this link: http://wazigate.local.

**Note:** if you need to get the IP address of the connection, you can use ifconfig. You’ll only need this if DHCP doesn’t automatically configure everything.

### Mac

On Mac, do the following:

{{%action%}}
**Step \#1:** Open Sharing menu.
{{%/action%}}

-	Open System Preferences. It’s typically found on your dock, if not, it’s in your Applications folder.
-	In System Preferences, under Internet & Wireless, go into the Sharing menu.

{{%action%}}
**Step \#2:** Sharing connection.
{{%/action%}}

In the Sharing menu, choose Internet Sharing from the list on the left. You will see Internet Sharing options.

![Allow sharing M.](media/image49.jpg)

Select to share your connection from Wi-Fi, to computers using Ethernet.
After that, click on the Internet Sharing checkbox to enable the service.

The WaziGate should now have an IP. You can connect to it using this link: http://wazigate.local.
