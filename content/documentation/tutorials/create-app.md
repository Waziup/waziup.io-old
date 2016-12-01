
Create an App with Waziup
=========================

Waziup allows you to develop and host you own IoT applications.

Install the tools
-----------------

First install Deis client:
```
$ curl -sSL http://deis.io/deis-cli/install-v2.sh | bash
$ sudo ln -fs $PWD/deis /usr/local/bin/deis
```

Register with the platform:
```
deis register http://deis.waziup.io
deis keys:add ~/.ssh/<your public key>
```

Download the application and associate it with deis:
```
$ git clone https://github.com/deis/example-go.git
$ cd example-go
$ deis create myapp
```

Push the application:
```
git push deis master
```

