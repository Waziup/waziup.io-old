---
date: 2016-09-13T09:00:00+00:00
title: Install from scratch
menu:
  main:
    title: Install from scratch
    name: docwazigateinstallscratch
    parent: docwazigate 
    weight: 11
---

This tutorial show you haw to install your WaziGate from scratch.
Installing your WaziGate will be performed in two steps:

- Install Raspbian OS
- Install the WaziGate software itself.

Install Raspbian
================

To install the Wazigate on a Raspberry PI, you need to do the following instructions:

1. Get latest Raspbian Strech image:
```
wget https://downloads.raspberrypi.org/raspbian_lite_latest
```

2. Flash it on an SD card. You can find the instructions here: https://www.raspberrypi.org/documentation/installation/installing-images/

3. After flashing the SD card, open it on you PC and create a file named **ssh** without extention on the SD card. If it has multiple partitions, just create it on anyone you are allowed to.

4. Connect the PI with an Ethernet cable to your PC and find it's IP address. You can use either **nmap** or [Angry IP Scanner](http://angryip.org/) which is available for Windows/Mac/Linux/Android to determine the assigned IP addresses.

5. SSH into the pi. Windows users can use https://putty.org/
Usually the default credential for raspbian is:

```
- user: pi
- password: raspberry
```
**Note:** Alternatively, you can just connect a screen, a keyboard and a mouse to your raspberry PI and work with it just like a regular computer.

***Install WaziGate***

Run the following code on your raspberry PI terminal:

```
{ curl -fsSL https://raw.githubusercontent.com/Waziup/waziup-gateway/master/setup/get_waziup.sh ;} | bash
```
This script downloads and installs everything that your PI needs to turn it into a Wazigate.


This will take a while. Time to grab a cup of tea.
Once finished, reboot your gateway:
```
sudo reboot
```

Then you can access your Wazigate UI on http://wazigate.local/
;)
