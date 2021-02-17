---
title: A ReactJS App with Waziup
layout: single
menu:
  main:
    title: A ReactJS app with Waziup 
    parent: wazicloud
    weight: 6
aliases:
  - /tutorials/software/fullstackapp/
---

{{% warning %}}
Warning, this tutorial is in development.
{{% /warning %}}

This tutorial shows you how to develop a full ReactJS app with Waziup.
Only a few steps are necessary to get your application running with Waziup!

First, you need first to install [npm](https://www.npmjs.com/) and [yarn](https://classic.yarnpkg.com) on your system.
Then, download the Waziup Dashboard app: https://github.com/Waziup/waziup-dashboard.

Run your ReactJS app
====================

Your app can be run locally with:
```
yarn start
```

However, you need to run it against the Waziup APIs to make it work properly!
Your app will take all the data about devices and sensors from the Waziup APIs.
Start it this way:
```
API_SERVER_URL=https://api.waziup.io/api KEYCLOAK_URL=https://keycloak.waziup.io/auth yarn start
```

You should now access the app in your browser at http://localhost:3000



