---
date: 2016-09-13T09:00:00+00:00
title: Implementation
url: /documentation/how-waziup-works/implementation
---

The Waziup Cloud platform has been implemented with state of the art technology, while keeping in mind the challenges at hand.

<center> ![Waziup implementation](/images/implem.png)</center>
<center>*Waziup implementation*</center>


The Figure presents the implementation of the Waziup platform stack.
The Waziup platform uses three distinct Cloud layers (in blue in the picture):

- "Infrastructure as a Service" (IaaS),
- "Container as a Service" (CaaS),
- "Platform as a Service" (PaaS). 

The first layer is provided by [OpenStack](https://www.openstack.org/). 
Its main role is to provide Virtual Machines (VMs), in which we run the full platform.
This layer is useful because most of Cloud vendors (Amazon, Rackspace…) use the VMs as basic selling units.
The second layer is provided by [Kubernetes](http://kubernetes.io/).
The role of this layer is to provide containers, such as Docker containers.
Those containers provide light-weight and utra-fast virtualization for applications and micro-services.
The containers themselves are running inside the VMs.
The third and final Cloud layer is provided by [Deis](http://deis.io/).
It provides services to developers, such as compiling and deploying and application.
All the applications pushed by the users will be compiled with Deis and hosted in containers on Kubernetes.

To access the platform, the users and external components need to go through the Authentication and Authorization manager, which is [KeyCloak](http://www.keycloak.org/).
The external components also need to go through the API.
Mobile phones can connect to the platform through the mobile back-end.
The mobile back-end serves the data to mobile front-ends, and also interfaces with the SMS and voice commands components.
Finally, the Gateway is able to push its data to the data broker, which is [FIWARE Orion](https://fiware-orion.readthedocs.io).
The data is distributed to the applications requesting it.
Orion also interfaces with the database and the data processing ([Elastic Search](https://www.elastic.co/)), for historical data analysis.

