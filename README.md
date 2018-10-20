WAZIUP website
==============

This is the source for the [waziup.io](http://waziup.io) site.

Writing content
---------------

1. Clone this repo

        $ git clone https://github.com/waziup.io/waziup.io.git

2. Download Hugo from [http://gohugo.io](http://gohugo.io) or install using Homebrew:

        $ brew update && brew install hugo

4. Run hugo in watch mode and start adding content under the `content/` tree

        $ hugo server --watch

    The site is served under `localhost:1313`

Deploying
---------

To deploy on Waziup platform:

```
$ hugo
$ docker build -t waziup/website .
$ docker push waziup/website
```

