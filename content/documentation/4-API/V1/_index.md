---
date: 2018-04-11T09:00:00+00:00
title: V1 API Reference
menu:
  main:
    title: API Reference
    name: docapi
    parent: v1docapi
    weight: 4
---

The API documentation is available at https://api.waziup.io/docs.
With this website, you can explore and interact with all the endpoints of the Waziup API.


Preliminaries
=============

The first step is to install the "cURL" command.
Curl is a very neat command to interact with REST APIs, using the HTTP protocol.
If not already installed on your system, it can be found here: https://curl.haxx.se/
For Windows, it can be downloaded [here](https://curl.haxx.se/windows/).
Unzip the file somewhere. You can then open a "Command" window, and go in the "bin" folder than you extracted.
The commands below can now be copy-pasted and executed in the command window.
You can also install the [jq command](https://stedolan.github.io/jq/download/). It allows to pretty-print JSON informations.

Tutorials
=========

Once the preliminaries completed, head to the following tutorials:

- [Access control](access_control)
- [Sensor management](sensor_management)
- [Notifications](notifications)
- [Gateways](gateways)


Library
=======

If your application is written in Javascript, you can use the [Waziup library](https://github.com/Waziup/waziup-js) instead of using directly the API.
It's easier!
All documentation is provided in the README files in the repository.

Migration from previous version
===============================

If you have an application using previous versions of the API, use the [migration guide](./migration_guide_v1.1).


