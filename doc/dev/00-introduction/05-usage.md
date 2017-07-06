---
title: Using AMP
---

Run `amp --help` to get the CLI help menu for amp.

```
$ amp --help

Usage:	amp [OPTIONS] COMMAND 

Deploy, manage, and monitor container stacks.

Examples:
amp version

Options:
  -h, --help            Print usage
  -k, --insecure        Control whether amp verifies the server's certificate chain and host name
  -s, --server string   Specify server (host:port)
  -v, --version         Print version information and quit

Management Commands:
  cluster     Cluster management operations
  org         Organization management operations
  password    Password management operations
  service     Service management operations
  stack       Stack management operations
  team        Team management operations
  user        User management operations

Commands:
  config      Display configuration
  login       Login to account
  logout      Logout of account
  logs        Display filtered logs
  stats       Display statistics
  version     Show version information
  whoami      Display currently logged in account name

Run 'amp COMMAND --help' for more information on a command.
```

>*A large number of AMP commands are interactive, so if necessary options are not provided
you will be prompted to provide them before the command runs*.

### Target an AMP cluster

When using `amp`, every command takes the `--server|-s` option.
This option is used to define the target cluster you will be running your commands with.
The target server is displayed at the top of every CLI command output.
You can also add a default `--server|-s` value to your `amp.yml` config file.

>For more information on creating your configuration file, see the [config documentation](config.md).

The server location of our hosted AMP is `COMING SOON`. This location is currently
acting as a playground for anyone to signup and use as they like.

The default value for the `--server|-s` option is `localhost:50101`, which points to a local
cluster that can be deployed on your system's docker engine.

In order to make sure you're connected to the specified server when running commands,
you can run the `amp version` command to test this.

```
$ amp -s your.server.com version
[your.server.com:50101]
Client:
 Version:       v0.12.0-dev
 Build:         fe0947b5
 Server:        your.server.com:50101
 Go version:    go1.8.1
 OS/Arch:       darwin/amd64

Server:
 Version:       v0.12.0-dev
 Build:         fd732802
 Go version:    go1.8.1
 OS/Arch:       linux/amd64
```

#### Creating a local AMP cluster

```
$ amp cluster create
```
>*If you are using the unstable version of the CLI, you will need to build the `amp-bootstrap`
image using the command `make build-bootstrap` or `ampmake build-bootstrap` if your don't have the build tools,
and then specify the `--tag=local` option to the CLI*

For more examples of cluster commands and deployment in different environments, see the [cluster documentation](cluster.md).

### Signing up and logging in

In order to be able to use AMP, you will need to signup for a user account, verify the account
and login.

>NOTE: Don't forget to specify your desired server target!

To signup for amp use:
```
$ amp user signup
username: sample
email: sample@user.com
password: [password]
```
After signing up, you will then be sent an email to your registered address. In this email, you will
be sent a link to verify your account with or you can verify your account with the provided CLI command.
>*The verification step is skipped for local deployment, you'll be logged automatically*

To verify your account using the token in verification email.
```
$ amp user verify [token]
```
>NOTE: You do not need to verify your account on a local cluster

To login to amp
```
$ amp login
username: sample
password: [password]
```

If you are having issues signing up or logging in, see the [user documentation](user.md).

If you are have forgotten or want to change your password, see the [password documentation](password.md)

### UI and Dashboard

Along with our CLI, after deploying a cluster to your desired environment, you can get access to our Custom
UI, a Grafana Dashboard and Kibana Dashboard.

#### UI

local: http://local.appcelerator.io

hosted: https://cloud.YOUR.DOMAIN

Note: TLS can be use also for a local deployment, but you'll have to add the self signed certificate to your key store.

#### Grafana

local: http://dashboard.local.appcelerator.io

hosted: https://dashboard.YOUR.DOMAIN

#### Kibana

local:  http://kibana.local.appcelerator.io

hosted:  https://kibana.YOUR.DOMAIN

