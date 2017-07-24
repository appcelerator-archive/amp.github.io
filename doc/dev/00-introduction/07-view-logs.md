---
title: View logs
---

#### Viewing and filtering logs

The `amp logs` command allows for the querying and filtering of both real-time and historical logs.

To fetch the logs for your cluster:
```
$ amp logs
...
Cluster status: healthy
2017/06/29 17:59:32 listening on :3000
2017/06/29 17:59:37 listening on :3000
2017/06/29 17:59:37 listening on :3000
...
```

Following on from the previous example of deploying a stack, if you want to fetch the logs of the `pinger` stack,
you can run:
```
$ amp stack logs pinger
2017/06/29 17:59:32 listening on :3000
...
```
This will get the logs of every service in the stack.

If you want to get the logs for the individual services in the stack, you can run:
```
$ amp service logs pinger
2017/06/29 17:59:32 listening on :3000
...
```

For more detailed examples of the querying and filtering options for logs, see the [logs documentation](logs.md)
