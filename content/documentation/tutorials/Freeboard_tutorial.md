# TUTORIAL FOR FREEBOARD VISUALISATION

This tutorial will help you to create your Freeboard dashboard to visualize the data you are pushing on WAZIUP platform.

There is 2 options :
* you can use the hosted Freeboard on WAZIUP platform (same id and password as WAZIUP platform)
* you can use your own Freeboard account

## Option 1 -  Create dashboard on waziup platform
### Creating your dashboard
Go to http://freeboard.waziup.io/

You will find an empty freeboard dashboard, ready to be customised.  
### Step 1 - Configure data source
First, we need to configure the data source to get your data from WAZIUP platform.
Remember, your data should already been pushed on WAZIUP platform (see tutorial on how to push your data).

One datasource correspond to one sensor.
You have to configure as many data source as sensors that you want to monitor.

Click on the "add" button on under DATASOURCES.

Then you will be asked to select a type. Choose FIWARE Orion.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/datasource.JPG?raw=true)


Then you can choose the name of your data. For exemple "my_temperature_sensor"

In Host:port, put : 217.77.95.64:30026

ThingProxy must be "yes"

Under fiware service and fiware service path, put the one you choosed for pushing the data on the platform.
For example: waziupservice and /waziupservicepath

Leave x-auth-token empty

Type and ID are the same that you used for pushing the data on the platform.
For example: mysensors and temperature1

Advanced must be "no".

Finally, choose the refreshing time that you need, for example 5 seconds.

Then click on Save. Repeat this procedure for every sensor that you need to monitor.

When you have all your datasources configured (you can see them under DATASOURCES), you can go to next step.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/data_added.JPG?raw=true)

### Step 2 - Configure panel

Now we need to configure panel to visualize the data.

Click on ADD PANE.

A new panel appears, for the moment it is empty.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/add_pane.jpg?raw=true)

Click on the key button to configure the size and the name of the panel.
It can be 1,2 or 3 columns big.
You can also delete it by clicking on the trash button.

Click on the + button to add a data visualisation.
You can choose several types of visualisation. For this example we will select Gauge.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/temperature%20gauge.JPG?raw=true)

Choose a title for your visualisation, for example : "temperature in my water pond number 1"

To have a value, click on "+datasource" and select in the list the datasource that you want to see in this panel.

Select the units and the min/max value to have a better personnalised visualisation.

Click on save, and you will see the gauge indicating the data (temperature in this example).

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/temperature_panel.JPG?raw=true)

Repeat this for every visualisation that you want to see.

You can also add text and images to illustrate your dashboard.


### Step 3 - Save and publish dashboard

Now, before leaving the page, you need to save your dashboard.

Never refresh the page before saving, as you will loose everything !

Click on the save button, select pretty and download the .json file.
Let's call this file "example_dashboard.json"

Then, upload this file on waziup github in Platform/master/UIManager/freeboard/

Once your dashboard is uploaded on Github, you can visualize it by following this link :

http://freeboard.waziup.io/index.html#source=https://raw.githubusercontent.com/Waziup/Platform/master/UIManager/freeboard/example_dashboard.json#/

You just have to replace "example_dashboard" by the real name of your file.

That's it ! If you want to modify it, you need to proceed to step 3 again.

## Option 2 - Create dashboard outside of waziup platform
### Creating your dashboard
Go to https://freeboard.io/. Create an account or use your own if you already have one.

![alt text](https://github.com/Waziup/waziup.io/blob/master/content/documentation/tutorials/new_dashboard.JPG?raw=true)

Choose a name for your dashboard and click on "create new".

### Step 1 - Configure data source
This step is the same as Option 1
### Step 2 - Configure panel
This step is the same as Option 1
### Step 3 - Save and publish dashboard
With this option, you don't have to save or publish your dashboard.
It is automatically saved within your account and the link to access it is the link in your browser.
Refreshing the page will not make you loose your data.

You can also choose to make your dashboard private and protect it by a password.
