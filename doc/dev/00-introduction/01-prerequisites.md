---
title: Prerequisites
---

We recommend installing the Docker CE stable channel release 17.06 on your system.
Make sure you check the "What to know before you install" section on the Docker site to ensure your system meets the requirements.

>NOTE: We currently do not support Docker Toolbox on any OS.

#### MacOS

On MacOS, Docker can be installed via the Docker website.

[Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

#### Windows

On Windows, Docker can be installed via the Docker website.

[Docker for Windows](https://docs.docker.com/docker-for-windows/install/)

#### Linux

On Linux, Docker can be installed via the Docker website. You can find your specific distribution in the tables.

[Docker for Linux](https://docs.docker.com/engine/installation/)

In addition, there is another step you must perform for your system.

Increase virtual memory (needed for Elasticsearch):
```
$ sudo sysctl -w vm.max_map_count=262144
```
To make this change permanent, you can run the following and reboot:
```
$ echo "vm.max_map_count = 262144" | sudo tee -a /etc/sysctl.conf
```
