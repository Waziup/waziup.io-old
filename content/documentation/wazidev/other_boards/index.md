---
date: 2021-02-14T09:00:00+00:00
title: Other boards
menu:
  main:
    title: Other boards
    name: devotherboards
    parent: wazidev
    weight: 5
---

Overview
========

Waziup works with any boards, not only WaziDev!
It works with any LoRa boards, for example:
- MKR WAN 1300
- Arduino Uno

It also works with non-LoRa boards, for example:
- MKR WIFI 1010

Wifi boards
============

With Wifi boards, the goal is to send messages directly to WaziCloud.
The following example uses MKR WAN 1300.

```
#include <SPI.h>
#include <WiFiNINA.h>
#include <ArduinoHttpClient.h>

char ssid[] = "D-Link-CCB65F";   // your network SSID (name)
char pass[] = "cucciolo85!!";    // your network password (use for WPA, or use as key for WEP)

// Déclaration path and port
char server[] = "api.waziup.io";
char resource[]   = "/api/v2/devices/MyDevice/sensors/TC/value";
char contentType[] = "text/plain;charset=utf-8";
int port = 80;

WiFiClient wifiClient;
HttpClient httpClient = HttpClient(wifiClient, server, port);

void setup() {

  //Initialize serial and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println("Ready");
  // check for the WiFi module:
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("Communication with WiFi module failed!");
    // don't continue
    while (true);
  }

  // attempt to connect to WiFi network:
  int status = WL_IDLE_STATUS;
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);
    // wait 10 seconds for connection:
    delay(10000);
  }

  Serial.println("Connected to wifi");
  printWiFiStatus();
}

void loop() {

  //Send the message to WaziCloud
  httpClient.post(resource, contentType, "25");
  // read the status code and body of the response
  int statusCode = httpClient.responseStatusCode();
  String response = httpClient.responseBody();

  Serial.print("Status code: ");
  Serial.println(statusCode);
  Serial.print("Response: ");
  Serial.println(response);
  Serial.println("POST finished.");

  delay(5000);
}

void printWiFiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());
  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}
```
