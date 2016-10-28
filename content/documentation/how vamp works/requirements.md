---
date: 2016-09-13T09:00:00+00:00
title: Requirements
---

Vamp's components work together with elements in your architecture to handle orchetstration, routing, persistence and metrics aggregation. To achieve this, Vamp requires access to a container scheduler, key value store, Elastic Search and HAProxy.

## Container scheduler  (orchestration)
Vamp talks directly to your choice of container scheduler. Currently we support [Mesos/Marathon](/documentation/installation/mesos-marathon), [DC/OS](/documentation/installation/dcos), [Kubernetes](/documentation/installation/kubernetes) and [Rancher](/documentation/installation/rancher). In case you’re “greenfield” and don’t have anything selected or running yet, check [which container scheduler?](/documentation/how-vamp-works/which-container-scheduler)

## Key value store
Vamp depends on a key-value (KV) store for non-direct communication between Vamp and instances of the Vamp Gateway Agent (VGA). There is no direct connection between Vamp and the VGA instances, all communication is done by managing specific KV in the store.  When Vamp needs to update the HAProxy configuration (e.g. when a new service has been deployed) Vamp will generate the new configuration and store it in the KV store. The VGAs read specific valuea and reload HAProxy instances accordingly.
Currently we support:

* **ZooKeeper** ([apache.org - zookeeper](https://zookeeper.apache.org/)).  
Vamp and VGAs can use an existing DC/OS ZooKeeper cluster.
* **etcd** ([coreos.com - etcd](https://coreos.com/etcd/docs/latest/))  
Vamp and VGAs can use an existing Kubernetes etcd cluster.
* **Consul** ([consul.io](https://www.consul.io/))

## Elastic Search (persistence and metrics)
Vamp uses Elastic Search (ES) for persistence (e.g. for artifacts and events) and for aggregating the metrics used by Vamp workflows and the Vamp UI. As Vamp is not demanding in ES resources, it can comfortably work with an existing ES cluster.  
Currently we use Logstash to format and send data to Elastic Search, but you could also opt for an alternative solution.

## HAProxy  (routing)
Each Vamp Gateway Agent (VGA) requires its own instance of HAProxy. This is a hard requirement, so to keep things simple we provide a Docker container with both Vamp Gateway Agent (VGA) and HAProxy ([hub.docker.com - magneticio/vamp-gateway-agent](https://hub.docker.com/r/magneticio/vamp-gateway-agent/)).  

{{< note title="What next?" >}}
* Find out how to [install Vamp](/documentation/installation)
* High level pointers for [choosing a container scheduler](/documentation/how-vamp-works/which-container-scheduler)
{{< /note >}}

