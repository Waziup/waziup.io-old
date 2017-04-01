---
url: /documentation/tutorials/create-app
---

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
$ deis register http://deis.waziup.io
```

Generate an SSH key and add it to the agent:
```
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
$ eval "$(ssh-agent -s)"
$ ssh-add ~/.ssh/id_rsa
```

Add your new ssh key to Deis:
```
$ deis keys:add ~/.ssh/id_rsa.pub
```

If you are already registered, you can just login:
```
$ deis login http://deis.waziup.io
```

Now that the setup is done, let's create our app.
We'll download a sample application and associate it with deis:
```
$ git clone https://github.com/Waziup/exemple-go.git
$ cd example-go
$ deis create myapp
```
Please replace the myapp with any name that you like for your application.
You can already push the example application:

```
$ git push deis master
```


Feel free to modify the app as you wish.
When you're ready, commit and push again the application:
```
$ git add web.go
$ git commit -m "test"
$ git push deis master
```

Your application is now available on the following address: [http://myapp.waziup.io](http://myapp.waziup.io).
Attention! Due to [this bug](https://github.com/Waziup/Platform/issues/32), the routing of the apps does not work yet.
So, once the application is pushed, you need to send [a mail](waziup.community@create-net.org) to enable it.
