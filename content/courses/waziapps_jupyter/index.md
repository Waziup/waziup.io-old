---
date: 2020-07-24T09:00:00+00:00
title: How to develop a WaziApp
menu:
  main:
    title: WaziApp for Jupyterlab
    name: waziapps_jupyter
    parent: courses
    weight: 1
---

___________________________________________________________________________________________________________________

A Wazigate Application for JupyterLab
=====================================

Description
-----------
JupyterLab is a interactive development environment that runs in your browser. It can be used for notebooks, code and data. A modular design and flexible interface allows for extensions that expand and enrich functionality. It supports different workflows, for example in data science, scientific computing or machine learning, to only name a few. It also supports different kernels for programming languages, python is preinstalled.

Waziup/wazigate-jupyterlab is an Application for the WaziGate, created as Docker image. It contains the basic packages needed for data science tasks. 

**Link to Github repository:**	[waziup/wazigate-jupyterlab](https://github.com/Waziup/wazigate-jupyterlab_armv7l)

![Screeshot of Jupyterlab with linear-regression-demo.ipynb](./media/notebook.png)

There is no login needed for this JupyterLab, so it is not recommended to deploy the Application in public networks. In the future it will run on Unix sockets, to solve this issue.

Till now the container is still on 32-bit (armv7l), this platform is deprecated and not well maintained in 2021. Later it will be upgraded to 64-bit (armv8), which is well maintained.
  

___________________________________________________________________________________________________________________

Download the App from DockerHub
-------------------------------

You can just download the build docker image from Dockerhub.

```
docker pull waziup/wazigate-jupyterlab
```

___________________________________________________________________________________________________________________

Build and run Docker image for JupyterLab
-----------------------------------------

If you want to build it from source you have to follow these steps.

1. Download the repository to your local machine:

```
git clone https://github.com/Waziup/wazigate-jupyterlab_armv7l.git
```

2. Install docker and issue the following commands

```
docker buildx create --name rpibuilder --platform linux/arm/v7
docker buildx use rpibuilder 
docker buildx inspect –bootstrap
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
```

3. Navigate to the repository:

```
cd wazigate-jupyterlab_armv7l
```

4. Issue the following command to build the docker image from the [Dockerfile](https://github.com/Waziup/wazigate-jupyterlab_armv7l/blob/main/Dockerfile "Dockerfile"):

```
docker buildx build –platform linux/arm/v7 -t waziup/wazigate-jupyterlab_armv7l:latest –load .
```

5. To copy the image via SSH to the raspberry pi with the following command:

```
docker save <id_of_build_image> | gzip | pv | ssh pi@<ip_of_pi_in_local_network> docker load
```

6. It can occur that the name of the repository is lost, so tag the image appropriate to the docker-compose.yml

```
docker tag <id_of_build_image> waziup/wazigate-jupyterlab_armv7l:latest
```

7. Afterwards, start the application with via the UI of the WaziGate or run the following command, to see the logs in console:

```
docker-compose up
```

___________________________________________________________________________________________________________________

Contained packages
------------------

Currently the container is shipped with "python:3.9.9-slim-buster" as base image. Due to the fact that there is no version of miniconda and the conda-forge channel, it will be downgraded to 3.7.12 or 3.6. 

As a package manager **pip** is recommended, for non-python packages use **apt-get** .

Here is an overview of the included pip-packages:

```
# pip freeze
anyio==3.4.0
argcomplete==1.12.3
argon2-cffi==21.3.0
argon2-cffi-bindings==21.2.0
attrs==21.2.0
Babel==2.9.1
backcall==0.2.0
bleach==4.1.0
certifi==2021.10.8
cffi==1.15.0
charset-normalizer==2.0.9
cycler==0.11.0
debugpy==1.5.1
decorator==5.1.0
defusedxml==0.7.1
entrypoints==0.3
fonttools==4.28.5
glibc==0.6.1
idna==3.3
importlib-metadata==4.10.0
importlib-resources==5.4.0
ipykernel==6.6.0
ipython==7.30.1
ipython-genutils==0.2.0
jedi==0.18.1
Jinja2==3.0.3
json5==0.9.6
jsonschema==4.3.2
jupyter-client==7.1.0
jupyter-core==4.9.1
jupyter-server==1.13.1
jupyterlab==3.2.5
jupyterlab-pygments==0.1.2
jupyterlab-server==2.9.0
kiwisolver==1.3.2
MarkupSafe==2.0.1
matplotlib==3.5.1
matplotlib-inline==0.1.3
mistune==0.8.4
nbclassic==0.3.4
nbclient==0.5.9
nbconvert==6.3.0
nbformat==5.1.3
nest-asyncio==1.5.4
notebook==6.4.6
numpy==1.21.5
packaging==21.3
pandas==1.3.5
pandocfilters==1.5.0
parso==0.8.3
pexpect==4.8.0
pickleshare==0.7.5
Pillow==8.4.0
prometheus-client==0.12.0
prompt-toolkit==3.0.24
ptyprocess==0.7.0
pycparser==2.21
Pygments==2.10.0
pyparsing==3.0.6
pyrsistent==0.18.0
python-dateutil==2.8.2
pytz==2021.3
pyzmq==22.3.0
requests==2.26.0
scipy @ file:///wheels/scipy-1.7.3-cp37-cp37m-linux_armv7l.whl
Send2Trash==1.8.0
six==1.16.0
sniffio==1.2.0
terminado==0.12.1
testpath==0.5.0
tornado==6.1
traitlets==5.1.1
typing_extensions==4.0.1
urllib3==1.26.7
wcwidth==0.2.5
webencodings==0.5.1
websocket-client==1.2.3
zipp==3.6.0
```

New packages can be installed via the terminal, included in JupyterLab, for example:

```
pip install <name_of_package>
apt-get install <name_of_package>
```

Or inside a cell of a notebook, don't forget to put an exclamation mark in front:

```
!pip install <name_of_package>
!apt-get install <name_of_package> -y
```
___________________________________________________________________________________________________________________

Usage
-----

**Tutorial - How to use JupyterLab**

Many online resources are available, explaining the usage of JupyterLab in detail. One of them is the [official documentation](https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html "Official documentation").  

**Storage**

There is a persistent storage directory in the home directory of JupyterLab, named "permanentWorkspace" use it to save all notebooks and files you want to keep.
Due to the fact, that JupyterLab runs in a docker container on your RPI and there can be updates to the docker image, this is the folder to keep your files. The files are mapped to a folder (/var/lib/waziapp) on the host operating system.

**Example notebooks**

Some example notebooks are shipped with the git, you can find them [here](https://github.com/Waziup/wazigate-jupyterlab_armv7l/blob/main/notebooks "JupyterLab notebooks"). They are also inside the image, located inside the "permanentStorage" folder. For example the "simple-linear-regression-notebook.ipynb" from Phillip Bauch [1]. 

**Install useful packages**

One of the example notebooks shows how to install some useful packages. You can find it [here](https://github.com/Waziup/wazigate-jupyterlab_armv7l/blob/main/notebooks/install_ml_packages.ipynb "JupyterLab install_ml_packages.ipynb"). It shows how to install tensorflow, keras and pycaret. These packages have a big dependency list and would increase size of the docker image. 

**Retrieve values from the WaziCloud**

All steps, how to retrieve values from WaziCloud, is also explained in a notebook, you can find it [here](https://github.com/Waziup/wazigate-jupyterlab_armv7l/blob/main/notebooks/get_values.ipynb "JupyterLab get_values.ipynb").

1. Get desired values via the **curl** command. 

You can get an overview about the possible queries from WaziCloud by visiting [Swagger](https://api.waziup.io/docs/#/Sensors/get_devices__device_id__sensors__sensor_id__values "Swagger").
All you need is your **device_id** and the **sensor_id**, you can find them by visiting the [WaziCloud](https://dashboard.waziup.io/ "WaziCloud").

Here is an example:

```
response = !curl -s -X GET "https://api.waziup.io/api/v2/devices/0242ac1200023852/sensors/temperatureSensor_0/values" -H "accept: application/json;charset=utf-8"
print ("This is the response: \n\n", response)
````

2. We can create a **list** from the **JSON** to organize our values:

```
import json
# Opening JSON file

print(type(response))
rep_str = str(response).replace("'",'')
print(type(rep_str))

# create JSON list
response_list = json.loads(rep_str)

# Print first value
print(response_list[0][0])
```

3. Or an **NumPy ndarray**:

```
import numpy as np

temp_vals = np.array([])

for n in range(len(response_list[0])):
    temp_vals = np.append(temp_vals, response_list[0][n]["value"], axis=None)

print("Temperature values: ", temp_vals)
```

4. Plot the values, with **Matplotlib**:

````
import matplotlib.pyplot as plt

plt.plot(temp_vals)
plt.show()
````

___________________________________________________________________________________________________________________

References:
-----------

[1] https://github.com/philippbauch/simple-linear-regression-notebook