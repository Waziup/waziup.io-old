---
date: 2016-09-13T09:00:00+00:00
title: Test LoRa device 
menu:
  main:
    title: Test LoRa
    name: docwazigatelora
    parent: docwazigate
    weight: 5
---

You need to get a WaziDev and [install it](/documentation/wazidev/).
Make sure to program your WaziDev to send LoRa messages (check the Arduino console to see the messages).
Once this is done, your WaziGate should already receive them, and forward the messages to the Waziup Cloud.

Open the Logs window to see the messages:

![Lora logs](../images/loraLogs.png)

If you see something like: `Received data (from 9):  {'TC': '9.02'}`: Congratulation! Your data is received by the gateway.

