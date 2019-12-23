**[1. Overview](#overview) 3**

[**2. Prepa** **your WAZIGate**](#prepare-the-gateway-hardware) **3**

> **[2. 1 What do you need to start?](#what-do-you-need-to-start) 3**
>
> **[2. 1 Assembly the WaziGate](#assemble-the-wazigate) 4**

**[3 Flashing the WaziGate software
image](#flashing-the-wazigate-software-image) 7**

**[4. Powering up Wazigate](#section-2) 12**

**[5. Configuration](#configuration) 15**

> [5.1 Find the Wazigate Web UI](#find-the-wazigate-web-ui) 15
>
> [5.2 Gateway Registration](#gateway-registration-to-cloud) 18
>
> [5.3 Connecting to the Internet](#connecting-to-the-internet) 22
>
> [5.4 Verify Gateway Registration](#verify-gateway-registration) 24

**1. Overview**
===============

This document guides you to assemble your Wazigate and configure it in
order to connect to the Waziup Cloud.

2. Prepare the Gateway Hardware
===============================

  ----------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![](media/media/image5.png){width="0.4270833333333333in" height="0.4305555555555556in"}   If you have a raspberry pi and want to setup your wazigate yourself this section is for you. If you already have your Wazigate in a box, just [[skip]{.underline}](#section-2) this section.
  ----------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. 1 What do you need to start?
-------------------------------

You need the following hardware to start:

![](media/media/image43.png){width="5.875in"
height="3.601120953630796in"}

I.  A Raspberry Pi (Model 3B+ is recommended for this version)

II. An SD card (minimum 8 GB)

III. A power supply for the raspberry pi (usually 5.1V, 2+A)

IV. A LoRa antenna

V.  A LoRa Hat like WaziHat

2. 1 Assemble the WaziGate
--------------------------

  ----------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#1:** Attach the heatsink. It is always a good idea to attach a heatsink in order to avoid overheating.
  ----------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------

### 

![](media/media/image36.png){width="5.166666666666667in"
height="3.885333552055993in"}

  ----------------------------------------------------------------------------------------- ---------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#2:** Mount a Wazihat on the Raspberry pi
  ----------------------------------------------------------------------------------------- ---------------------------------------------------

![](media/media/image28.png){width="5.180555555555555in"
height="3.6143405511811024in"}

  ----------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------
  ![](media/media/image5.png){width="0.4270833333333333in" height="0.4305555555555556in"}   **Note:** If you do not have a ***Wazihat*** board and want to use your own LoRa module, please take this image as the wiring reference:
  ----------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------

![](media/media/image21.png){width="6.243055555555555in"
height="2.640538057742782in"}

Ref:
[[CongducPham-Low-cost-LoRa-GW-step-by-step.pdf]{.underline}](https://github.com/CongducPham/tutorials/blob/master/Low-cost-LoRa-GW-step-by-step.pdf)

3 Flashing the WaziGate software image 
======================================

  ----------------------------------------------------------------------------------------- ----------------------------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#1:** Download ***Balena Etcher*** and install it on your PC
  ----------------------------------------------------------------------------------------- ----------------------------------------------------------------------

From this link \[
[[https://www.balena.io/etcher/]{.underline}](https://www.balena.io/etcher/)
\] you can download ***Balena Etcher*** tool for your PC according to
your operating system.

![](media/media/image10.png){width="5.380208880139983in"
height="3.7521544181977253in"}

  ----------------------------------------------------------------------------------------- --------------------------------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#2:** Download the latest version of **Wazigate** firmware image
  ----------------------------------------------------------------------------------------- --------------------------------------------------------------------------

Wazigate Image:
[[https://www.waziup.io/downloads/WaziGate\_V1.0.zip]{.underline}](https://www.waziup.io/downloads/WaziGate_V1.0.zip)

![](media/media/image34.png){width="3.377935258092738in"
height="2.2395833333333335in"}

  ----------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#3:** Open the ***Balena Etcher*** tool and select the downloaded zip file
  ----------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------

![](media/media/image22.png){width="6.270833333333333in"
height="3.5555555555555554in"}

  ----------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#4:** Insert your SD card to your PC and when appear, select it in **Etcher**
  ----------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------

![](media/media/image17.png){width="4.5625in"
height="3.872819335083115in"}

+----------------------------------+----------------------------------+
| ![](media/media/image5.p         | **Note 1:** Your Micro SD card   |
| ng){width="0.4270833333333333in" | must be at least **8 GB**.       |
| height="0.4305555555555556in"}   |                                  |
|                                  | **Note 2:** Some laptops have SD |
|                                  | Card reader. If your laptop does |
|                                  | not have the SD card reader. You |
|                                  | might need a USB adapter to      |
|                                  | connect your Micro SD card to    |
|                                  | your PC. Something like these:   |
+----------------------------------+----------------------------------+

  ----------------------------------------------------------------------------- ------------------------------------------------------------------------------ ------------------------------------------------------------------------------
  ![](media/media/image2.png){width="1.9375in" height="1.7638888888888888in"}   ![](media/media/image23.png){width="1.9375in" height="1.7222222222222223in"}   ![](media/media/image13.png){width="1.9375in" height="1.4583333333333333in"}
  ----------------------------------------------------------------------------- ------------------------------------------------------------------------------ ------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------- -----------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#5:** Click on **Flash** to start flashing.
  ----------------------------------------------------------------------------------------- -----------------------------------------------------

![](media/media/image42.png){width="6.270833333333333in"
height="3.9305555555555554in"}

![](media/media/image27.png){width="6.270833333333333in"
height="3.9166666666666665in"}

  ----------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#6:** When Flashing is done, remove your Micro SD card and insert it into your raspberry pi.
  ----------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------

![](media/media/image15.png){width="6.270833333333333in"
height="4.055555555555555in"}

  ------------------------------------------------------------------------------------------ ----------------------------------------------
  ![](media/media/image33.png){width="0.4270833333333333in" height="0.3472222222222222in"}   Congratulations! Now your hardware is ready.
  ------------------------------------------------------------------------------------------ ----------------------------------------------

 

4. Powering up Wazigate
=======================

  ----------------------------------------------------------------------------------------- ----------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#1:** Attach the antenna
  ----------------------------------------------------------------------------------------- ----------------------------------

![](media/media/image29.png){width="5.291666666666667in"
height="2.997438757655293in"}

  ----------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------
  ![](media/media/image5.png){width="0.4270833333333333in" height="0.4305555555555556in"}   **Very Important**: always connect the antenna first, before powering up your device.
  ----------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------

![](media/media/image41.png){width="5.034722222222222in"
height="3.812988845144357in"}

  ----------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#2:** Plug the power cable (micro usb) into the gateway and plug the adapter to the outlet.
  ----------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------

![](media/media/image14.png){width="6.270833333333333in"
height="4.583333333333333in"}

You should see a light is on and another light next to it is actively
blinking.

5. Configuration
================

5.1 Find the Wazigate Web UI
----------------------------

  ----------------------------------------------------------------------------------------- -------------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#1:** Find the wazigate hotspot to connect to
  ----------------------------------------------------------------------------------------- -------------------------------------------------------

+----------------------------------+----------------------------------+
| When you power up Wazigate for   | ![](media/media/image26.p        |
| the first time, it usually does  | ng){width="2.3715277777777777in" |
| some self-configs and reboots    | height="3.600021872265967in"}    |
| itself. So, be patient, it might |                                  |
| take a couple of minutes for you |                                  |
| to see the Wazigate WiFi hotspot |                                  |
| to connect to.                   |                                  |
|                                  |                                  |
| The WiFi hotspot has a similar   |                                  |
| name of what you see in the      |                                  |
| photo:                           |                                  |
|                                  |                                  |
| **WAZIGATE\_XXXXX**              |                                  |
|                                  |                                  |
| Where xxxxx usually is the ID of |                                  |
| your gateway.                    |                                  |
+----------------------------------+----------------------------------+

  ----------------------------------------------------------------------------------------- ----------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#2:** Connect to the Wazigate WiFi hotspot
  ----------------------------------------------------------------------------------------- ----------------------------------------------------

![](media/media/image38.png){width="3.5711811023622047in"
height="2.3433530183727034in"}

+----------------------------------+----------------------------------+
| ![](media/media/image5.p         | **Note 1:** The default password |
| ng){width="0.4270833333333333in" | for the hotspot is               |
| height="0.4305555555555556in"}   | **loragateway**                  |
|                                  |                                  |
|                                  | Enter the password and click on  |
|                                  | connect.                         |
|                                  |                                  |
|                                  | **Note 2:** Depending on the     |
|                                  | operating system you use, the    |
|                                  | interface might be different     |
|                                  | from what you see in the photos. |
+----------------------------------+----------------------------------+

  ----------------------------------------------------------------------------------------- -------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#3:** Opening the Wazigate Web UI
  ----------------------------------------------------------------------------------------- -------------------------------------------

Wazigate is configured through a web user interface. When you connect to
the Wazigate hotspot, you need to open your browser and go to one of the
following addresses:

[[http://192.168.200.1]{.underline}](http://192.168.200.1)

[[http://wazigate.local/]{.underline}](http://wazigate.local/)

Then you should see something like this.

![](media/media/image6.png){width="5.368055555555555in"
height="3.0317924321959757in"}

Please enter the default username and password and click on **Login**.

  ----------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![](media/media/image5.png){width="0.4270833333333333in" height="0.4305555555555556in"}   **Note:** For security reasons, please change the default password as soon as you can see the profile page. This page can be found in the menu at the top-right corner of the screen.
  ----------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](media/media/image20.png){width="5.086132983377078in"
height="3.1597222222222223in"}

5.2 Gateway Registration to Cloud
---------------------------------

  ----------------------------------------------------------------------------------------- ----------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#1:** Login for the first time
  ----------------------------------------------------------------------------------------- ----------------------------------------

When you login for the first time, you should see something like this.

**Note:** Setup wizard is also accessible from the side menu.

![](media/media/image18.png){width="5.645833333333333in"
height="2.2534722222222223in"}

![](media/media/image31.png){width="5.625in"
height="2.3090277777777777in"}

+----------------------------------+----------------------------------+
| ![](media/media/image5.p         | **Note:** If you do not have an  |
| ng){width="0.4270833333333333in" | account on Waziup dashboard, you |
| height="0.4305555555555556in"}   | need to create one first         |
|                                  | following this link:             |
|                                  | [[https://                       |
|                                  | dashboard.waziup.io/]{.underline |
|                                  | }](https://dashboard.waziup.io/) |
|                                  |                                  |
|                                  | By clicking on                   |
|                                  | **[Register]{.underline}**, you  |
|                                  | can create an account.           |
+----------------------------------+----------------------------------+

A Waziup account enables you to receive all your sensor data in your
dashboard and manage your Wazigate remotely.

  ----------------------------------------------------------------------------------------- ----------------------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#2:** Configure Wazigate to be recognized by the cloud
  ----------------------------------------------------------------------------------------- ----------------------------------------------------------------

Once you click on Yes in the previous page, you should see something
like this:

![](media/media/image32.png){width="5.583333333333333in"
height="2.767361111111111in"}

  ----------------------------------------------------------------------------------------- ------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#3:** Give a nice name to your gateway
  ----------------------------------------------------------------------------------------- ------------------------------------------------

![](media/media/image40.png){width="4.588542213473316in"
height="3.2680293088363954in"}

***Gateway Name*** is a custom name that you give to your gateway to be
able to identify this particular gateway from your other gateways. It
can be anything like *Fish Farm gateway*, *Water Control Gateway*,
*Ali's Field Gateway*, and so on.

**Note:** After writing, hit the **Enter** button on your keyboard or
click on the ![](media/media/image39.png){width="0.19670166229221347in"
height="0.1788199912510936in"} icon to save your values.

  ----------------------------------------------------------------------------------------- -----------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#4:** Set WaziCloud credentials in Wazigate
  ----------------------------------------------------------------------------------------- -----------------------------------------------------

Click on the ***[Empty]{.underline}*** value next to the *Email Address
/ Login* and enter your waziup dashboard email address and save it.

![](media/media/image12.png){width="5.756944444444445in"
height="3.2514304461942256in"}

Do the same thing for password as well.

![](media/media/image1.png){width="6.445087489063867in"
height="3.642361111111111in"}

  ----------------------------------------------------------------------------------------- ---------------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#5:** Cloud credentials saved, going Next
  ----------------------------------------------------------------------------------------- ---------------------------------------------------

When you save successfully both login and password values, click on the
**Next** button.

![](media/media/image11.png){width="5.895833333333333in"
height="3.329873140857393in"}

 

5.3 Connecting to the Internet
------------------------------

  ----------------------------------------------------------------------------------------- ----------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#1:** WiFi Configuration
  ----------------------------------------------------------------------------------------- ----------------------------------

If you plan to connect your Wazigate through another way like Ethernet
cable or 3G/4G dongle, then just click on **Skip**.

![](media/media/image9.png){width="5.545258092738408in"
height="3.1319444444444446in"}

  ----------------------------------------------------------------------------------------- ----------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#2:** Connecting to WiFi
  ----------------------------------------------------------------------------------------- ----------------------------------

![](media/media/image30.png){width="6.270833333333333in"
height="3.5416666666666665in"}

One Wazigate finds all the available WiFi networks in its range, click
on the network that you want to connect to and enter its password in the
shown box.

  ----------------------------------------------------------------------------------------- -------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#3:** Click on Connect and Finish
  ----------------------------------------------------------------------------------------- -------------------------------------------

![](media/media/image4.png){width="6.270833333333333in"
height="3.5416666666666665in"}

  ----------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------
  ![](media/media/image5.png){width="0.4270833333333333in" height="0.4305555555555556in"}   **Warning:** Once you try to connect to a WiFi network, you will lose the control on Wazigate.
  ----------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------

![](media/media/image16.png){width="2.3645833333333335in"
height="0.9352810586176727in"}

If you enter your WiFi password correctly and the internet is available,
after a few minutes you will be able to see it in your WaziCloud
dashboard.

  ----------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![](media/media/image5.png){width="0.4270833333333333in" height="0.4305555555555556in"}   **Note:** If Wazigate does not manage to connect to your WiFi due to wrong credentials or not being in the range of the WiFi router, it will rollback to the hotspot mode and you need to connect to it again and start over. *This might take a few minutes depending on the router.*
  ----------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5.4 Verify Gateway Registration
-------------------------------

  ----------------------------------------------------------------------------------------- -----------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#1:** Open the waziup dashboard
  ----------------------------------------------------------------------------------------- -----------------------------------------

Go to the [[https://waziup.io]{.underline}](https://waziup.io) website

![](media/media/image35.png){width="5.583333333333333in"
height="3.1812018810148732in"}

  ----------------------------------------------------------------------------------------- ------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#2:** Click on "Go to Dashboard"
  ----------------------------------------------------------------------------------------- ------------------------------------------

Enter your credentials and Login

![](media/media/image37.png){width="5.495714129483814in"
height="3.1006944444444446in"}

  ----------------------------------------------------------------------------------------- ---------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#3:** Click on Gateways
  ----------------------------------------------------------------------------------------- ---------------------------------

![](media/media/image19.png){width="5.670138888888889in"
height="3.204861111111111in"}

If everything went well so far, you should see your gateway in the list.

  ----------------------------------------------------------------------------------------- -------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#4:** Click on your gateway
  ----------------------------------------------------------------------------------------- -------------------------------------

Then click on the "REMOTE ACCESS" button

![](media/media/image25.png){width="5.958333333333333in"
height="3.365171697287839in"}

  ----------------------------------------------------------------------------------------- ------------------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#5:** Logging into your Wazigate
  ----------------------------------------------------------------------------------------- ------------------------------------------

![](media/media/image8.png){width="5.21875in" height="2.0625in"}

Enter your Wazigate username and password and click Login

  ----------------------------------------------------------------------------------------- -------------------------------
  ![](media/media/image3.png){width="0.4846937882764654in" height="0.3958333333333333in"}   **Step \#6:** Wazigate Web UI
  ----------------------------------------------------------------------------------------- -------------------------------

![](media/media/image7.png){width="6.270833333333333in"
height="3.5416666666666665in"}

+----------------------------------+----------------------------------+
| ![](media/                       | If you see something like this,  |
| media/image24.png){width="0.5in" | then Congratulations! :)         |
| height="0.4027777777777778in"}   |                                  |
|                                  | You made it.                     |
+----------------------------------+----------------------------------+

Now you can simply manage your gateway remotely through your Waziup
dashboard.
