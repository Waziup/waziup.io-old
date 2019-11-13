---
date: 2016-09-13T09:00:00+00:00
title: WaziGate Install
menu:
  main:
    title: Install
    name: docwazigateinstall
    parent: docwazigate 
    weight: 1
---

Installing your WaziGate can be performed in two steps:

- Install Raspbian OS
- Install the WaziGate software itself.

Install Raspbian
================

To install the Wazigate on a Raspberry pi, you need to do the following instructions:

1. Get latest Raspbian Strech image:
```
wget https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2019-04-09/2019-04-08-raspbian-stretch-lite.zip
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
**Note:** if you think this is hard to do for you, just connect a screen, keyboard and mouse to your raspberry pi and work with it just like a regular computer. The important thing is to have internet connectivity on your pi.

***Install WaziGate***

1. If you need to remotely manage your Wazigate, first create an account on https://remote.it/ it's free ;)
Then run the follwoing code on your raspberry pi terminal:

```
{ echo REMOTE='"email@example.com password"'; curl -fsSL https://raw.githubusercontent.com/Waziup/waziup-gateway/master/setup/get_waziup.sh ;} | bash
```
Where `email@example.com` is your user name on remote.it and `password` is your password. This script downloads and installs everything that your pi needs to turn it into a Wazigate.

2. If you don't want a remote management on your wazigate just run this code instead:

```
curl -fsSL https://raw.githubusercontent.com/Waziup/waziup-gateway/master/setup/get_waziup.sh | bash
```

This will take a while. Time to grab a cup of tea.
Once finished, reboot your gateway:
```
sudo reboot
```
Then you can access your Wazigate UI on http://wazigate.local/
