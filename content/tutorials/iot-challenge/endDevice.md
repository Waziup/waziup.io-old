---
date: 2017-01-16T09:00:00+00:00
title: IoT Challenge Fish Farming
url: /resources/iot-challenge/endDevice
---

## End node device

Our team have already start the project for several weeks.
 Now we have the first version of our device (gateway and end device node). In this article I present the end device node with the material used, the electronic assembly and the software part.
 
 * * *

## Electronic part

The end device (sensor node) is a buoy containing a box with the electronic assembly.
This device gather information about water (temperature, PH and dissolved oxygen) and send it to the IoT gateway through LoRa connection.

As it cannot be connect to an electrical outlet, the device needs to have his own power supply to operate. 
We decide to add a battery and a solar panel wich is fixed on the top of the buoy.


For the microcontroller we use an arduino Pro Mini in his 3.3V version. This choice has been made for the low power comsuption of the Pro Mini, his small size and the ease of development on it (Arduino).
{{< figure src="/images/iot-challenge/20161118_164330.jpg" >}}

One of the challenges in this isolated rural areas was the necessity to work over a long distance and poor infrastructure. Deploying IoT in this context must use long range wireless communication between device and gateway
and autonomous low cost energy devices. We decide to use the low-power wide area networks *LoRa*. In that purpose we add a LoRa module on the node : the inAir9 module.

We use the sensors atlas DO oxygen, and atlas PH for dissolved oxygen and PH measurements. The two sensors come with a small circuit to precise the measure and calibrate it (Ezo PH and Ezo DO).
This two sensors are wired to the arduino via I2C bus that is a master-slave serial bus. 

For temperature we choose the DS28BT whom use the 1 wire bus. We also decide to add a temperature and humidity sensor into our box to detect a probable high peak of temperature or humidity which will damaged our circuit. 


The last thing we add to the circuit is a voltage divider to get the voltage output of the battery and so control his level of charge.

After some prototype circuit assembly we choose to order a printed circuit board rather than directly solder the component together.

Below we have the circuit schema and the Pcb schema.

{{< figure src="/images/iot-challenge/circuit.png" title="Circuit Schema">}}
{{< figure src="/images/iot-challenge/pcb.png" title="PCB Schema">}}

During the time receiving our circuit board, we build the buoy. It is composed of a watertight box, polystyrene float and slabs of plexigas to bound the overall.
The float is blocked into two slabs of plexiglas and the box is screwed to one slab.
A rod of plastic has also been added under the buoy to attached the sensors on it. So the sensors will be fully submerged under 30 cm of water.

{{< figure src="/images/iot-challenge/box_polystyrene.png">}}

And few days later we received our printed circuit board and start soldering the components.

{{< figure src="/images/iot-challenge/20170116_170718.jpg" title="PCB Schema">}}

After soldering, cutting and drilling this is our final box.

{{< figure src="/images/iot-challenge/final_box.png" title="Final Box">}}

 * * *

## Software part

### Library Used

To communicate via I2C bus between PH sensor, DO sensor and the Arduino , we use the [wire](https://www.arduino.cc/en/Reference/Wire) library.

One of the tricky part was to handle LoRa communication with the gateway. We use this [LoRa library](https://github.com/CongducPham/LowCostLoRaGw) which greatly facilitated the work. This library is developed by Congduc Pham who is also member of the Waziup Project.


### Power save
One of the biggest constraint we face is the necessity to save power.
So we decide to get data from sensor at a rate of about 2 reads by hour. The rest of the time the microcontroller and the sensors need to be in a kind of "sleep mode". However we choose to not using the sleep mode avalaible on the sensors (PH and DO) which still consume a little.
 We just cut off the supply when needed.
 
On the arduino the sleep mode is assisted by interrupts, without them just a reset can wake the Arduino up. 
In our case we use the watchdog timer interrupt to handle the sleep mode.
The watch dog timer is a small timer that force a full system restart if it not receive an "ok" signal from the microcontroller. The advantage of this timer is
that it's always runing even when the system is entirely put in sleep mode. So it's a good way to control and wake up the system periodically.

### System failure
We also use the watchdog timer in his main purpose : detect and recover from computer malfunction. In case of unstable loops the watchdog wont receive an "ok" signal from the microcontroller
and so will trigger a reboot of the arduino. It prevents hardware or software failure.

Unfortunately I have spent several hours debugging an annoying issue with the Arduino Pro Mini watchdog timer. I finally find out that the issue didn't come from my code, but from the original bootloader
of my Arduino board. 

I simulate an infinite loop that trigger the watchdog but instead of reseting once the arduino, it blocks the bootloader into an infinite reset loop. 
And so nothing works anymore on the Arduino:
I cannot upload new Sketch and cannot reset the arduino manually with the reset button. I had to disconnect the power to recover the Arduino.
The solution I used is to flash a new bootloader on the board. I took the bootloader (optiboot) of the Arduino UNO which uses the same chip (atmega328) as the arduino Pro Mini and it solves the problem.



