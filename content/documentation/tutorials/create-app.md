
Create an App with Waziup
=========================

Waziup allows you to develop and host you own IoT applications.
This short tutorial will show you how to create an application in go language, and host it on Waziup.
All you need is a Linux (or equivalent) machine.

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

If you are already registered, you can just login:
```
deis login http://deis.waziup.io
```

Now that the setup is done, let's create our app.
We'll download a sample application and associate it with deis:
```
$ git clone https://github.com/Waziup/example-go.git
$ cd example-go
$ deis create myapp
```

Feel free to modify the app as you wish.
When you're ready, commit and push the application:
```
git add web.go
git commit -m "test"
git push deis master
```

Your application is now available on the following address: [http://myapp.waziup.io](http://myapp.waziup.io).
Attention! Due to [this bug](https://github.com/Waziup/Platform/issues/32), the routing of the apps does not work yet.
So, once the application is pushed, you need to send [a mail](waziup.community@create-net.org) to enable it.
