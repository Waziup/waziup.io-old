---
date: 2016-09-13T09:00:00+00:00
title: Frameworks and tools
url: /why-use-waziup/waziup-compared-to/frameworks-and-tools
---

# Waziup compared to...

# FIWARE IoT Stack 
[This stack] (http://fiware-iot-stack.readthedocs.io/en/latest/) is similar to WAZIUP in terms of components adapting FIWARE ecosystem. It allows you to connect devices and receive data, integrating all device protocols and connectivity methods, understanding and interpreting relevant information. It isolates data processing and application service layers from the device and network complexity, in terms of access, security and network protocols.


These are the main benefits of solutions 'powered by the FIWARE IoT Stack':

* Simple sensor data integration
* Device-independent APIs for quick app development & lock-in prevention
* Modular
* Scalable. High available
* Open & standards based. FIWARE compliant

A main difference between this stack and WAZIUP is the use of KeyCloak as security component in WAZIUP.

# OPEN IOT STACK FOR JAVA DEVELOPERS

Eclipse IoT is the open source technology that makes it easy for Java developers to create IoT applications. Similar to WAZIUP, this stack considers that open source is key for the Internet of Things, and it offers tools to faciliate and make it simple the use of IoT for both users and developers.

## IoT Constrained Device Stack

[Eclipse IoT] (https://iot.eclipse.org) provides a set of libraries that can be deployed on a constrained embedded device to provide a complete IoT development stack.

### Hardware abstraction
In order to ensure portability, an IoT device needs to include a software layer that enables access to the hardware features of the MCU, such as flash memory, GPIOs, serial interfaces, etc.

Eclipse Edje provides an high-level API for accessing hardware features provided by microcontrollers (e.g GPIO, ADC, MEMS, etc.). It can directly connect to native libraries, drivers, and board support packages provided by silicon vendors.
### Communication
An IoT device requires drivers and protocols that allow to connect it to a wired or wireless protocol, and therefore enable communication.

Eclipse Paho provides an implementation of the MQTT protocol.
Mosquitto is an iot.eclipse.org project. Eclipse Mosquitto™ is an open source (EPL/EDL licensed) message broker that implements the MQTT protocol versions 3.1 and 3.1.1. MQTT provides a lightweight method of carrying out messaging using a publish/subscribe model. This makes it suitable for "Internet of Things" messaging such as with low power sensors or mobile devices such as phones, embedded computers or microcontrollers like the Arduino.
### Remote Management
There are many cases where an IoT device needs to be remotely controlled, for example to upgrade its firmware or to monitor its battery level.

Eclipse Wakaama provides an implementation of the OMA LWM2M standard.

## IoT Gateway & Smart Device Stack
The IoT gateway acts as the aggregation point for a group of sensors and actuators to coordinate the connectivity of these devices to each other and to an external network. An IoT gateway can be a physical piece of hardware or functionality that is incorporated into a larger “Thing” that is connected to the network. For example, an industrial machine might act like a gateway, and so might a connected automobile or a home automation appliance.

### Eclipse Kura
Eclipse Kura provides a general purpose middleware and application container for IoT gateway services. An IoT gateway stack based on Eclipse Kura would include the following

* Operating System: Linux (Ubuntu/Ubuntu Core, Yocto-based linux distribution), Windows.
* Application Container or Runtime Environment: Eclipse Equinox or Eclipse Concierge (OSGi Runtime).
* Communication & Connectivity: Eclipse Kura includes APIs to interface with the gateway I/Os (e.g. Serial, RS-485, BLE, GPIO, etc.) and support for many field protocols that can be used to connect to devices, e.g MODBUS, CAN bus, etc.
* Network Management: Eclipse Kura provides advanced networking and routing capabilities over a wide-range of interfaces (cellular, Wi-Fi, Ethernet, etc.).
* Data management & Messaging: Eclipse Kura implements a native MQTT-based messaging solution, that allows application running on the gateway to transparently communicate with a Cloud Platform, without having to deal with the availability of the network interfaces, or how to represent IoT data. Support for additional messaging protocols is available through the built-in Apache Camel message routing engine.
* Remote Management: Eclipse Kura provides a remote management solution based on the MQTT protocol, that allows to monitor the overall health of an IoT gateway, in addition to control (install, update, modify settings) the software it’s running.

### Eclipse 4diac
Eclipse 4diac provides an industrial-grade open source infrastructure for distributed industrial process measurement and control systems based on the IEC 61499 standard. 4DIAC is ideally suited for Industrie 4.0 and Industrial IoT applications in a manufacturing setting.

The IEC 61499 standard defines a domain specific modeling language for developing distributed industrial control solutions by providing a vendor independent format and for simplifying support for controller to controller communication.

## IoT Cloud Platform Stack
The Eclipse IoT Community has a number of projects that are focused on providing the functionality required for IoT cloud platforms.

The IoT Cloud Platform represents the software infrastructure and services required to enable an IoT solution. An IoT Cloud Platform typically operates on a cloud infrastructure (e.g. OpenShift, AWS, Microsoft Azure, Cloud Foundry) or inside an enterprise data center and is expected to scale both horizontally, to support the large number of devices connected, as well as vertically to address the variety of IoT solutions. The IoT Cloud Platform will facilitate the interoperability of the IoT solution with existing enterprise applications and other IoT solutions.

## Cloud stacks
### Eclipse Kapua
Eclipse Kapua is a modular platform providing the services required to manage IoT gateways and smart edge devices. Kapua provides a core integration framework and an initial set of core IoT services including a device registry, device management services, messaging services, data management, and application enablement.

The goal of Eclipse Kapua is to create a growing ecosystem of micro services through the extensions provided by other Eclipse IoT projects and organizations.

### Eclipse OM2M
Eclipse OM2M is an IoT Platform specific for the telecommunication industry, based on the oneM2M specification.

It provides a horizontal Common Service Entity (CSE) that can be deployed in an M2M server, a gateway, or a device. Each CSE provides Application Enablement, Security, Triggering, Notification, Persistency, Device Interworking, Device Management.

## Open source components for IoT Cloud Platforms
### Connectivity & Message Routing
IoT platforms need to be able to interact with very large numbers of devices and gateways using different protocols and data formats, but then normalize it to allow for easy integration into the rest of the enterprise.

* Eclipse Hono provides a uniform API for interacting with devices using arbitrary protocols, as well as an extensible framework to add other protocols.
* Eclipse Mosquitto provides an implementation of an MQTT broker.

### Device Management
An IoT platform should have the ability to provision new software updates and manage the devices.

* Eclipse Leshan provides an implementation of the OMA LWM2M device management protocol

### Device Registry
A central registry helps to identify and authenticate the devices/gateways running in an IoT solution

* Eclipse hawkBit provides the management tools to roll out software updates to devices and gateways

### Analytics
Outside of the Eclipse IoT community there are many open source options for data analytics and visualization, including Apache Hadoop, Apache Spark, and Apache Storm. Within the Eclipse community, Eclipse BIRT provides support for dashboards and reporting of data stored in a variety of data repositories.

### Application Enablement
Ability to consolidate and analyze data, and to create reports, graphs, and dashboards by exposing Application Programming Interfaces (API).

* Eclipse Hono helps to expose consistent APIs for consuming telemetry data or sending commands to devices, so as to rationalize IoT application development.

{{< note title="What next?" >}}
* [Try Waziup](/documentation/installation/hello-world)
* [Use cases](/why-use-wziup/use-cases/) -  some Waziup solutions to practical problems
* Find out [how Waziup works](/documentation/how-waziup-works/architecture-and-components)
{{< /note >}}

