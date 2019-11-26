---
title: Configure your WaziDev
menu:
  main:
    title: Configure your WaziDev
    parent: docwazidev
    weight: 1
---

This section will guide you through the installation of Arduino IDE and its configuration for the WaziDev.

Install Arduino IDE
-------------------

You can get different versions of Arduino IDE from the [Download page](http://diy.waziup.io/assets/src/sketch.zip) on the Arduino Official website.
You must select your software, which is compatible with your operating system (Windows, IOS, or Linux).
After your file download is complete, unzip the file to install the Arduino IDE.

Install the libraries and examples
----------------------------------

Download [this file](https://github.com/Waziup/iot-course/archive/master.zip).
Unzip the file and copy the content as follows. All examples from the zip should go in the "exemples" folder or Arduino:

![Copy exemples](../images/copyExamples.png)

The libraries of the zip should go in the "libraries" Arduino folder:

![Copy libraries](../images/copyLibraries.png)

**Attention**: before proceeding, make sure that your Arduino folders contains all the files, as shown on the pictures above.
For instance, the folder "libraries" should contain a subfolder "SX1272".
Your programs will not compile if you don't make sure.


Configure the Arduino IDE
-------------------------

Next step is to start the arduino IDE. On Linux, you need to start it in root.
In the menu "Tools", you need to select:

- **Board**: `Arduino Pro or Mini`,
- **Processor**: `ATMega328p (3.3v, 8MHz)`.

The **port** depends on the system:

- Linux: **Port** `/dev/ttyUSB0`
- MacOS: **Port** `/dev/cu.usbserialXXXXX`
- Windows: **Port** `COM3` or higher.

When the WaziDev USB cable is connected to the laptop, the port should appear, and disappear when disconnected.

**Atention: If you don't see the corresponding port in the Port menu, [you need to install the drivers](https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/)**


Your Arduino Tools menu should look like this:

![Tools menu](../images/ideConfig.png)

Be **extra careful** when selecting the board, processor, and port.
You will not be able to program the board if something is wrong here.

Test your configuration
-----------------------

To test your configuration, select a program in the examples menu.
For example, Select "Files/Examples/01 Basic/Blink".
Then click on the arrow button.
This will compile and upload your program on the WaziDev.

If everything goes well, your WaziDev should display a blue blinking led!


For more informations on programming your board with Arduino IDE, go to http://diy.waziup.io.
