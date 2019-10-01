---
title: Waziup API V2 Migration guide
menu:
  main:
    title: V2 Migration guide
    name: migrataion_guideV2
    parent: v2docapi
    weight: 10
---


This document will guide you through the update of your gateway or application to the new API V2 (see https://github.com/Waziup/Platform/blob/master/ChangeLog).
This version brings a lot of novelties:
- Gateway registration
- Actuators support
- Projects support
- Calibration of sensors online
- Detailled permissions for devices/gateways/projects
- Better data endpoint

All endpoints are described in the various sections.

Renamings
=========
If you have an application working with V1.1, in this version two renamings has been done:
- Everthing previously named "Sensor" has been renamed "Device".
- Everything previously named "Measurement" has been renamed "Sensor".

Indeed, the term "Device" reflects better the reality: an Arduino board.


