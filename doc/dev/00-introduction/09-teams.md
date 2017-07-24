---
title: Teams
---

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
