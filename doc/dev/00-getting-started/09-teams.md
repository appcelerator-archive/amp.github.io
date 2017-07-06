---
title: Teams
---

The `amp stats` command allows for the querying and filtering of realtime and historical statistics.

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

For more detailed examples of the querying and filtering options for stats, see the [stats documentation](stats.md)

#### Organization and team management

Once you have signed up with `amp signup`, you can start creating organizations and within those organizations,
you can add members or create teams of members.

To create an organization:
```
$ amp org create
organization name: org
email: sample@org.com
Organization has been created.
```
>NOTE: The majority of the org and team commands are interactive, you can look at the org and team documentation or the `--help`
option to see which commands take arguments or options.

After creating an organization, you will be the owner of that organization and you can then add other users to that organization.

With an organization created, you can "log in" to into that organization by switching to the context of the organization using:
```
$ amp org switch org
You are now logged in as: org
```
Whilst logged in on behalf of the organization, you can deploy stacks within the context of that organization that cannot be accessed
by users outside of that organization. In addition, by creating new teams within that organization, you can delegate resources in the
form of stacks using the `amp team resource` commands.

For more information on organization and team management, see the [org documentation](org.md) and the [team documentation](team.md)
