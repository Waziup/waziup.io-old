---
date: 2016-09-13T09:00:00+00:00
title: Using the Vamp CLI
---

Vamp's command line interface (CLI) can be used to perform basic actions against the Vamp API. The CLI was
primarily developed to work in continuous delivery situations. In these setups, the CLI takes care of automating (canary) releasing new artifacts to Vamp deployments and clusters.

#### See also
* [Full list of available CLI commands](/documentation/cli/cli-reference/)

## Installation

Check [run vamp](/documentation/installation/) for details on how to install the Vamp CLI on your platform. 

## Configuration

After installation, set Vamp's host location. This location can be specified as a command line option (`--host`)

```bash
vamp list breeds --host=http://192.168.59.103:8080
```

...or via the environment variable `VAMP_HOST`
```bash
export VAMP_HOST=http://192.168.59.103:8080
```

## Simple commands

The basic commands of the CLI, like `list`, allow you to do exactly what you would expect:

```
> vamp list breeds
NAME                     DEPLOYABLE
catalog                  docker://zutherb/catalog-frontend
checkout                 docker://zutherb/monolithic-shop
product                  docker://zutherb/product-service
navigation               docker://magneticio/navigation-service:latest
cart                     docker://zutherb/cart-service
redis                    docker://redis:latest
mongodb                  docker://mongo:latest
monarch_front:0.1        docker://magneticio/monarch:0.1
monarch_front:0.2        docker://magneticio/monarch:0.2
monarch_backend:0.3      docker://magneticio/monarch:0.3
```

```
> vamp list deployments
NAME                                    CLUSTERS
1272c91b-ba29-4ad1-8d09-33cbaa8f6ac2    frontend, backend
```


## CI and chaining

In more complex continuous integration situations you can use the CLI with the `--stdin` flag to chain a bunch of commands together. You could for instance:

* get an "old" version of a breed with `inspect`
* generate a new breed based on the previous one, while inserting a new deployable
* create the breed in the backend

```
vamp inspect breed frontend:${OLD} | \
vamp generate breed --deployable mycompany/frontend:${NEW} frontend:${NEW} --stdin | \
vamp create breed --stdin
```

Once you have the new breed stored, you can insert it into a running deployment at the right position, i.e:

* get a blueprint from a running deployment with `inspect` and `--as_blueprint`
* generate a new blueprint with `generate` while inserting a new breed
* deploying the result with `deploy`

```
vamp inspect deployment $DEPLOYMENT --as_blueprint | \
vamp generate blueprint --cluster frontend --breed frontend:${NEW} --stdin | \
vamp deploy --deployment $DEPLOYMENT --stdin
```

---------
#### See also
* [Full list of available CLI commands](/documentation/cli/cli-reference/)