---
date: 2020-07-24T09:00:00+00:00
title: How to develop a WaziApp
menu:
  main:
    title: Basic WaziApp tutorial
    name: waziapps
    parent: courses
    weight: 1
---

{{% warning %}}
WaziApps are possible with WaziGate V2 only.
{{% /warning %}}

This course guides you to step through development of a **simple app** running on the Wazigate platform.
What you will learn:

- **How do WaziApps work?**: You will learn about the structure of the WaziGate and how to utilize docker containers for your applications
- **Preparing the RPI for development of WaziApps**: You will setup the Wazigate Firmware, install the IDE and communicate to the WaziGate through SSH and FTP
- **Develop a WaziApp in Python, GoLang and Javascript**: You will learn how to install and run apps on the WaziGate, how to make APIs for your app and how to create docker image for your App.

______


Prerequisites
=============

You need to be familiar with:

- Raspberry PI
- A general knowledge of sensor nodes (e.g. Arduino, ESP, etc)
- Docker container concept
- A basic knowledge of programming (in either Python, Go or Javascript)

You will need the following Hardware:

- A Raspberry pi
- An SD Card (at least 8GB)
- Internet Connection


Level: **Intermediate**

______

How do WaziApps work?
=====================

Wazigate uses a microservice architecture to manage its Apps.
This architecture allows each application to operate independently in isolation which makes the development and maintenance much simpler than a monolithic architecture.

{{< youtube id="_9XPc4W4SuI" >}}

**Useful links:**
- [https://www.waziup.io/](https://www.waziup.io/)
- [https://microservices.io/](https://microservices.io/)
- [https://man7.org/linux/man-pages/man7/unix.7.html](https://man7.org/linux/man-pages/man7/unix.7.html)
- [https://docs.docker.com/](https://docs.docker.com/)

_____

Preparing the development environment
=====================================

Setup Wazigate Firmware
-----------------------
In this section we learn how to set up our development environment.
We need to flash a Raspberry pi with Wazigate Firmware, configure it, install the required tools and finally prepare our PC.

{{< youtube id="sDGtdnWmSxg" >}}

In order to flash the Raspberry pi, we go to [waziup.io/downloads](https://www.waziup.io/downloads/) and download the latest SD card image.
We use [Etcher tool](https://www.balena.io/etcher/) to flash the downloaded image on the SD card. After flashing is done, we insert the SD card into the raspberry pi and turn it on.

___

Setup communication channels
----------------------------
When we boot a Raspberry pi with Wazigate Firmware for the first time, it goes to WiFi access point mode by default.
We can either connect to the pi through the access point or use an Ethernet cable to reach the pi.
Using Ethernet is recommended for development as it is more reliable.
You can either wire it like this to your local router:

![router connection](./media/router.png)

Or you can just connect the cable directly to your PC.
In this case, **remember to share your Ethernet connection in the PC networking settings** in order to allow the PI to connect to your PC as a client.


If you want to communicate to your pi through WiFi, here is how to configure your Wazigate to connect to your local WiFi connection.
On our PC we should see a wireless network that starts with **WAZIGATE**. Connect to it, the default password is **loragateway** .

{{< youtube id="I0D3J_yS65o" >}}

When the pi is in WiFi access point mode, the default IP address is: 192.168.200.1

______

Find the Wazigate’s IP address
------------------------------

When we connect our pi through Ethernet or WiFi, we need to find its IP address to be able to work with it.
One of the tools that helps us to find the IP address of our pi is [Angry IP Scanner](https://angryip.org/).


{{< youtube id="BHqr2ZdNR5k" >}}

______

Alternatively, we can use Nmap to find the IP address. It is initially developed for Unix, but now you can [install it](https://nmap.org/book/inst-windows.html) on windows machines as well.
On Debian based machines you can install it this way:

```
sudo apt-get install nmap
```

Here is how to use it to find the IP address of the pi:

{{< youtube id="685nJvFS2LE" >}}

______

IDE installation
----------------

You can use any IDE that suits you for developping WaziApps.
Here I show what I use and how I upload my code to the pi.
I use [Visual Studio Code](https://code.visualstudio.com/) which is multi-platform and has tons of extensions.


{{< youtube id="dSjVa8t3Wp0" >}}

______

Install FTP on Wazigate
-----------------------

FTP comes handy when we want to copy files to/from our pi.

{{< youtube id="UlB6Yl8_Zvc" >}}

 We can install it easily by running the following code in the terminal of the pi:

```
sudo apt-get install -y pure-ftpd
sudo groupadd ftpgroup
sudo usermod -a -G ftpgroup $USER
sudo chown -R $USER:ftpgroup "$PWD"
sudo pure-pw useradd upload -u $USER -g ftpgroup -d "$PWD" -m <<EOF
loragateway
loragateway
EOF
sudo pure-pw mkdb
sudo service pure-ftpd restart
```

___________________________________________________________________________________________________________________


A Wazigate Application in Python
================================

Install and run the Python sample App
-------------------------------------

{{< youtube id="29c5jDzKjlE" >}}

___________________________________________________________________________________________________________________

Make a “Hello world” API
------------------------

{{< youtube id="I746t7khNnk" >}}

- **Default password:** loragateway
- **The App folder:** ~/waziup-gateway/apps/waziup/hello-world-python/
- **Change the ownership:** sudo chown pi -R .
- **Start the container:** docker-compose up -d
- **Shell into the container:** sudo docker exec -it <container_name> sh
- **Start the App inside the container:** python /root/src/main.py

___________________________________________________________________________________________________________________

Make APIs to handle POST/PUT/DELETE requests
--------------------------------------------

{{< youtube id="xAAP8joIQZw" >}}

- **Start the container:** docker-compose up -d
- **Shell into the container:** sudo docker exec -it <container_name> bash
- **Start the App inside the container:** python /root/src/main.py

___________________________________________________________________________________________________________________

Configure “docker-compose.yml” file
-----------------------------------

{{< youtube id="eCvEY5iW8ZE" >}}

___________________________________________________________________________________________________________________

Configure “package.json” file
-----------------------------

{{< youtube id="mcXV39jiLZo" >}}

___________________________________________________________________________________________________________________

Package and build the docker image for the Python App
-----------------------------------------------------

{{< youtube id="Xwx2buIgpIY" >}}


- **Build our app:** docker-compose build

___________________________________________________________________________________________________________________

Push the App image to the docker hub
------------------------------------

{{< youtube id="FP9NvT4ORVU" >}}

The used commands:
```
docker login
docker push <the_full_image_name_with_tag>
```

___________________________________________________________________________________________________________________

How the update mechanism works in WaziGate
------------------------------------------

{{< youtube id="2F4MPkSPg4Y" >}}

___________________________________________________________________________________________________________________

A Wazigate Application in GoLang
================================

Install and run the Go sample App
---------------------------------

{{< youtube id="KA6x7ejbqS4" >}}

___________________________________________________________________________________________________________________

Make a “Hello world” API
------------------------

{{< youtube id="tBqswILTBek" >}}

- **Default password:** loragateway
- **The App folder:** ~/waziup-gateway/apps/waziup/hello-world-go/
- **Change the ownership:** sudo chown pi -R .
- **Start the container:** docker-compose up -d
- **Shell into the container:** sudo docker exec -it <container_name> sh
- **Build and start the App inside the container:** go build -o start . && ./start

___________________________________________________________________________________________________________________

Make APIs to handle POST/PUT/DELETE requests
--------------------------------------------

{{< youtube id="DuYrJ7Vbz_Y" >}}

- **Start the container:** docker-compose up -d
- **Shell into the container:** sudo docker exec -it <container_name> sh
- **Build and start the App inside the container:** go build -o start . && ./start

**Tip:**  Wazigate-system is actually a WaziApp that is written in Go Lang and its UI is based on REACT.

Please check out its repository to see real-world examples: https://github.com/Waziup/wazigate-system

___________________________________________________________________________________________________________________

Configure “docker-compose.yml” file
-----------------------------------

{{< youtube id="JO0JmJSuzlo" >}}

___________________________________________________________________________________________________________________

Configure “package.json” file
-----------------------------

{{< youtube id="XaPMs3Oex04" >}}

___________________________________________________________________________________________________________________

Package and build the docker image for the GoLang App
-----------------------------------------------------

{{< youtube id="LSKgJ0_r-lA" >}}

**Build our app:** docker-compose build

___________________________________________________________________________________________________________________

Push the App image to the docker hub
------------------------------------

{{< youtube id="i1D72i-eNLg" >}}

The used commands:
```
docker login
```
```
docker push <the_full_image_name_with_tag>
```

___________________________________________________________________________________________________________________


How the update mechanism works in WaziGate
------------------------------------------

{{< youtube id="2F4MPkSPg4Y" >}}

___________________________________________________________________________________________________________________

A Wazigate Application in Javascript
====================================

Install and run the Javascript sample App
-----------------------------------------

{{< youtube id="Kwic3IBsO1I" >}}

___________________________________________________________________________________________________________________

Make a GET Request API call
---------------------------

{{< youtube id="FPDjTaf7aL8" >}}

- **Default password:** loragateway
- **The App folder:** ~/waziup-gateway/apps/waziup/hello-world-js/
- **Change the ownership:** sudo chown pi -R .
- **Start the container:** docker-compose up -d
- **API lists:**
    - [Wazigate-System](https://raw.githack.com/Waziup/wazigate-system/master/docs/index.html)
	- [Wazigate-Edge](https://raw.githack.com/Waziup/wazigate-edge/v2/www/docs/index.html)

___________________________________________________________________________________________________________________


Call an API on the Edge to list all registered devices on Wazigate
------------------------------------------------------------------

{{< youtube id="fzNecUyA5zc" >}}

- **Default password:** loragateway
- **The App folder:** ~/waziup-gateway/apps/waziup/hello-world-js/
- **Change the ownership:** sudo chown pi -R .
- **Start the container:** docker-compose up -d
- **API lists:**
  -	[Wazigate-System](https://raw.githack.com/Waziup/wazigate-system/master/docs/index.html)
  -	[Wazigate-Edge](https://raw.githack.com/Waziup/wazigate-edge/v2/www/docs/index.html)
 
**Notes:**
	You can also make your WaziApp entirely based on other popular Javascript libraries like REACT as the UI of the [Wazigate-System](https://github.com/Waziup/wazigate-system) and [Wazigate-Edge](https://github.com/Waziup/wazigate-edge) are made with REACT.
	Please check out the Waziup-JS library that we use ourselves, it makes the life easier: https://www.npmjs.com/package/waziup-js


Configure “docker-compose.yml” file

{{< youtube id="EcX77Yfl760" >}}

___________________________________________________________________________________________________________________

Configure “package.json” file
-----------------------------

{{< youtube id="q4rczBY3VVs" >}}

___________________________________________________________________________________________________________________

Package and build the docker image for the App
----------------------------------------------

{{< youtube id="-xIH582UIeE" >}}


**Build our app:** docker-compose build

___________________________________________________________________________________________________________________

Push the App image to the docker hub
------------------------------------

{{< youtube id="lFOzNH5xS4k" >}}

**The used commands:**
```
docker login
```
```
docker push <the_full_image_name_with_tag>
```

___________________________________________________________________________________________________________________

How the update mechanism works in WaziGate
------------------------------------------

{{< youtube id="2F4MPkSPg4Y" >}}






























