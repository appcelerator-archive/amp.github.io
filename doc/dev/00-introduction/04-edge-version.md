---
title: Using the latest "edge" version
---

Alternatively, if you wish to work with the latest development version directly from `master` on Github,
you can fork the repo and build your own CLI. The entire toolchain has been containerized so you do not need
to install `go`, `make`, or any other tools on your system (other than Docker).

To get the repo setup, you can run the following set of commands:
```
$ cd $GOPATH/src
$ mkdir -p github.com/appcelerator
$ cd github.com/appcelerator
$ git clone https://github.com/appcelerator/amp
$ cd amp
$ export PATH=bin/{YourOS}/amd64:$PATH
```
This will clone the repository into your `go` workspace and add the CLI path to your system `$PATH`.

To build the CLI, you can then run:
```
$ ampmake buildall-cli
```
This will build cross-compiled versions of the CLI and place them in the appropriate locations under `./bin`.

If you already have `gnu` installed on your system, you can instead run:
```
$ make build-cli
```
This will build your OS-specific CLI in `./bin` and it is much faster.
