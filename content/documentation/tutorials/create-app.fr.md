---
url: /fr/documentation/tutorials/create-app
---

Créer une application avec Waziup
=========================

Waziup vous permet de développer et d'héberger vos propres applications IoT.
Ce court didacticiel vous montrera comment créer une application en langue go, et l'héberger sur Waziup.
Tout ce que vous avez besoin est une machine Linux (ou équivalent).

Installer les outils
--------------------

Première installation du client Deis:
```
$ curl -sSL http://deis.io/deis-cli/install-v2.sh | bash
$ sudo ln -fs $PWD/deis /usr/local/bin/deis
```

Inscrivez-vous à la plate-forme:
```
$ deis register http://deis.waziup.io
```

Générer une clé SSH et l'ajouter à l'agent:
```
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
$ eval "$(ssh-agent -s)"
$ ssh-add ~/.ssh/id_rsa
```

Ajoutez votre nouvelle clé ssh à Deis:
```
$ deis keys:add ~/.ssh/id_rsa.pub
```

Si vous êtes déjà inscrit, vous pouvez vous connecter:
```
$ deis login http://deis.waziup.io
```

Maintenant que l'installation est terminée, créons notre application.
Nous allons télécharger un exemple d'application et l'associer à deis:
```
$ git clone https://github.com/Waziup/exemple-go.git
$ cd example-go
$ deis create myapp
```
Veuillez remplacer myapp par n'importe quel nom que vous souhaitez pour votre application.
Vous pouvez déjà pousser l'exemple d'application:

```
$ git push deis master
```


N'hésitez pas à modifier l'application comme vous le souhaitez.
Lorsque vous êtes prêt, validez et recommencez l'application:
```
$ git add web.go
$ git commit -m "test"
$ git push deis master
```

Votre demande est maintenant disponible à l'adresse suivante:[http://myapp.waziup.io](http://myapp.waziup.io).
Attention! En raison de [ce bug](https://github.com/Waziup/Platform/issues/32), Le routage des applications ne fonctionne pas encore.
Ainsi, une fois que l'application est poussée, vous devez envoyer [a mail](waziup.community@create-net.org) pour l'activer'.


