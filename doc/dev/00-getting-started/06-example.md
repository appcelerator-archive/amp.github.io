---
title: Example
---

#### Deploying a simple stack

To deploy a standard Docker Compose version 3 stackfile into your cluster, use `amp stack deploy`.
There are a number of sample stackfiles under `examples/stacks` that you can try out.

Here is a simple example:
```
$ curl -O https://raw.githubusercontent.com/appcelerator/amp/master/examples/stacks/pinger/pinger.yml
$ amp stack deploy -c pinger.yml
$ amp stack ls
$ amp service logs pinger
$ curl http://pinger.examples.local.appcelerator.io/ping
```
Or browse to: https://pinger.examples.local.appcelerator.io/ping.

For more information on what you can do with your stack when it is deployed, see the [stacks documentation](stack.md).

For more information on inspecting and manipulating the services within your stack, see the [service documentation](service.md)


