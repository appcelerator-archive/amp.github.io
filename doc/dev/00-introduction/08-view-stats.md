---
title: View metrics
---

The `amp stats` command allows for the querying and filtering of real-time and historical statistics.

To fetch the stats of your cluster
```
$ amp stats
Stats on services period=now-10m, No filter
SERVICE         CPU %   MEM USAGE   LIMIT    MEM %   IO READ   IO WRITE   NET RX       NET TX
```

Following on from the previous example of deploying a stack, if you want to display the stats of the `pinger` stack,
you can run:
```
$ amp stats --stack
Stats on stacks period=now-10m, No filter
STACK     CPU %   MEM USAGE   LIMIT    MEM %   IO READ   IO WRITE   NET RX       NET TX
pinger    0.00%   6.7 MB      5.9 GB   0.3%    0/s       0/s        212.0 B/s   112.0 B/s
```

If you want to display the stats for the individual services in the stack, you can run:
```
$ amp stats --service
Stats on services period=now-10m, No filter
SERVICE         CPU %   MEM USAGE   LIMIT    MEM %   IO READ   IO WRITE   NET RX       NET TX
pinger_pinger   0.00%   6.7 MB      5.9 GB   0.3%    0/s       0/s        214.0 B/s   112.0 B/s
```

If you want to display the stats for all the containers replicating the service, you can run:
```
$ amp stats --container
Stats on containers period=now-10m, No filter
CONTAINER              CPU %   MEM USAGE   LIMIT    MEM %   IO READ   IO WRITE   NET RX      NET TX
pinger_pinger_6bc02a   0.00%   1.2 MB      2.0 GB   0.1%    0/s       0/s        73.0 B/s   38.0 B/s
pinger_pinger_6e8e55   0.00%   960.0 KB    2.0 GB   0.0%    0/s       0/s        73.0 B/s   38.0 B/s
pinger_pinger_cbf5cd   0.00%   4.5 MB      2.0 GB   0.2%    0/s       0/s        72.0 B/s   38.0 B/s
```

For more detailed examples of the querying and filtering options for stats, see the [stats documentation](https://github.com/appcelerator/amp/blob/master/docs/stats.md)
