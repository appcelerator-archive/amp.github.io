---
title: Using the development version
---

Alternatively, if you wish to work with the latest development version directly from `master` on Github,
you can fork the repo and build your own CLI. The entire toolchain has been containerized so you only need to install Docker.

> TIP: Here is the official [Go documentation](https://golang.org/doc/code.html#Workspaces) explaining how to create a Go project structure and set GOPATH. 

To get the repo setup, you can run the following set of commands to clone the repository into your `go` workspace and add the CLI path to your system `PATH`.

```
$ cd $GOPATH/src
$ mkdir -p github.com/appcelerator
$ cd github.com/appcelerator
$ git clone https://github.com/appcelerator/amp
$ cd amp
$ export PATH=$GOPATH/src/github.com/appcelerator/amp/bin/{YourOS}/amd64:$PATH
```

To build the CLI and the core AMP images, you can then run:
```
$ ampmake build
```
This will build cross-compiled versions of the CLI and place them in the appropriate locations under `./bin`.
In addition, this will build the development versions of each of the images necessary for creation of the AMP cluster.
