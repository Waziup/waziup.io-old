---
date: 2016-09-13T09:00:00+00:00
title: Deploy your first blueprint
---
## Overview

If everything went to plan, you should have your Vamp installation up and running. If not, please follow the [Vamp hello world](/documentation/installation/hello-world) quick setup steps. Now we're ready to check out some of Vamp's features. 

#### In this tutorial we will:  

1. Deploy a monolith, using either the Vamp UI or the Vamp API
* Check out the deployed application  
* Get some metrics on the running application  
* Change the scale and load-balancing
* Chaos monkey!    

## In depth

### Step 1: Deploy a monolith

Imagine you or the company you work for still use monolithic applications. I know, it sounds far fetched...
This application is conveniently called *Sava monolith* and is at version 1.0.  

You've managed to wrap your monolith in a Docker container, which lives in the Docker hub under `magneticio/sava:1.0.0`. Your app normally runs on port `8080` but you want to expose it under port `9050` in this case. Let's deploy this through Vamp using the following simple blueprint. Don't worry too much about what means what: we'll get there.

```yaml
---
name: sava:1.0
gateways:
  9050: sava/webport
clusters:
  sava:
    services:
      breed:
        name: sava:1.0.0
        deployable: magneticio/sava:1.0.0
        ports:
          webport: 8080/http
      scale:
        cpu: 0.2       
        memory: 64MB
        instances: 1
```


#### Deploy using the Vamp UI

1. In the Vamp UI, go to the **blueprints** tab, click the **+ Create** button. Paste in the above blueprint and press **+ Create**.  
  * Vamp will store the blueprint and make it available for deployment. 
  
2. Press the **Deploy as** button.
  * You'll be prompted to give your deployment a name, let's call it **sava**
  
2. Press **Deploy**.

![](/images/screens/tut1_deploy-v090.gif)

#### Deploy using the Vamp API

You can use your favorite tools like Postman ([getpostman.com](https://www.getpostman.com/)), HTTPie ([github.com/jakubroztocil - httpie](https://github.com/jakubroztocil/httpie)) or Curl to post this blueprint directly to the `api/v1/deployments` endpoint of Vamp.

{{< note title="Note!" >}}
* Take care to set the correct `Content-Type: application/x-yaml` header on the POST request. Vamp is kinda
strict with regard to content types, because we support JSON and YAML so we need to know what you are sending.   
* If you run on Docker machine, use `docker-machine ip default` instead of `localhost`, e.g.
  ```
  http POST http://`docker-machine ip default`:8080/api/v1/deployments Content-Type:application/x-yaml < sava_1.0.yaml
  ```
{{< /note >}}

* Using `curl`
```
curl -v -X POST --data-binary @sava_1.0.yaml -H "Content-Type: application/x-yaml" http://localhost:8080/api/v1/deployments
```

* Using `httpie`
```
http POST http://localhost:8080/api/v1/deployments Content-Type:application/x-yaml < sava_1.0.yaml
```

After POST-ing, Vamp should respond with a `202 Accepted` message and return a JSON blob. This means Vamp is trying to deploy your container. You'll notice some parts are filled in for you, like a default scale, a default routing and of course a UUID as a name.

{{< tip >}}
You can use the RESTful API to create a deployment with a custom name - simple `PUT` request to `http://localhost:8080/api/v1/deployments/DEPLOYMENT_CUSTOM_NAME`
{{< /tip >}}

### Step 2: Check out the deployed application 

You can follow the deployment process of our container by checking the `/api/v1/deployments` endpoint and checking when the `state` field changes from `ReadyForDeployment` to `Deployed`. You can also check Marathon's GUI.

When the application is fully deployed you can check it out at Vamp host address + the port that was assigned in the blueprint, e.g: `http://10.26.184.254:9050/`. It should report a refreshing hipster lorem ipsum ([hipsterjesus.com](http://hipsterjesus.com/)) upon each reload.

![](/images/screens/monolith1.png)

### Step 3: Get some metrics on the running application

Using a simple tool like Apache Bench ([apache - ab](https://httpd.apache.org/docs/2.2/programs/ab.html)) we can put some load on our application and see some of the metrics flowing into the dashboard. Use the following command to send 10000 requests using 15 threads to our Sava app.

```bash
ab -k -c 15 -n 10000 http://localhost:9050/
```
or
```bash
ab -k -c 15 -n 10000 http://`docker-machine ip default`:9050/
```

You should see the metrics spike and some pretty charts being drawn:

![](/images/screens/tut1_metrics-v090.gif)

### Step 4: Change scale and load-balancing

Vamp will automatically load-balance services. Let's change the scale of the service by selecting "3" in the **instances** field. Now Vamp will automatically scale up the number of running instances (of course permitting underlying resources) and load-balance these to the outside world using the gateway feature.

![](/images/screens/tut1_scale-v090.gif)

### Step 5: Chaos monkey

Now let's try something fun. Go to the Marathon UI (on port 9090) and find the Sava container running. Now select destroy to kill the container. Watch Vamp detecting that issue and making sure that the defined number of instances is spun up again as soon as possible, while making sure the loadbalancing routing rules are also updated to reflect the changed IP's and ports of the instances.

{{< note title="What next?" >}}
* Let's [run a canary release in the second part of this getting started tutorial →](/documentation/tutorials/run-a-canary-release/)
{{< /note >}}

