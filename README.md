<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g fragen
$ fragen COMMAND
running command...
$ fragen (--version)
fragen/0.0.2 darwin-arm64 node-v16.16.0
$ fragen --help [COMMAND]
USAGE
  $ fragen COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`fragen QUESTION`](#fragen-question)
* [`fragen config`](#fragen-config)
* [`fragen help [COMMANDS]`](#fragen-help-commands)
* [`fragen plugins`](#fragen-plugins)
* [`fragen plugins:install PLUGIN...`](#fragen-pluginsinstall-plugin)
* [`fragen plugins:inspect PLUGIN...`](#fragen-pluginsinspect-plugin)
* [`fragen plugins:install PLUGIN...`](#fragen-pluginsinstall-plugin-1)
* [`fragen plugins:link PLUGIN`](#fragen-pluginslink-plugin)
* [`fragen plugins:uninstall PLUGIN...`](#fragen-pluginsuninstall-plugin)
* [`fragen plugins:uninstall PLUGIN...`](#fragen-pluginsuninstall-plugin-1)
* [`fragen plugins:uninstall PLUGIN...`](#fragen-pluginsuninstall-plugin-2)
* [`fragen plugins update`](#fragen-plugins-update)

## `fragen QUESTION`

Ask a question to the AI right from your terminal

```
USAGE
  $ fragen QUESTION

ARGUMENTS
  QUESTION  The question to ask the AI

DESCRIPTION
  Ask a question to the AI right from your terminal
```

_See code: [dist/commands/index.ts](https://github.com/erodactyl/fragen/blob/v0.0.2/dist/commands/index.ts)_

## `fragen config`

Configure OpenAI API key.

```
USAGE
  $ fragen config

DESCRIPTION
  Configure OpenAI API key.
```

_See code: [dist/commands/config.ts](https://github.com/erodactyl/fragen/blob/v0.0.2/dist/commands/config.ts)_

## `fragen help [COMMANDS]`

Display help for fragen.

```
USAGE
  $ fragen help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fragen.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.6/src/commands/help.ts)_

## `fragen plugins`

List installed plugins.

```
USAGE
  $ fragen plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fragen plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.2/src/commands/plugins/index.ts)_

## `fragen plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fragen plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fragen plugins add

EXAMPLES
  $ fragen plugins:install myplugin 

  $ fragen plugins:install https://github.com/someuser/someplugin

  $ fragen plugins:install someuser/someplugin
```

## `fragen plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fragen plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fragen plugins:inspect myplugin
```

## `fragen plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fragen plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fragen plugins add

EXAMPLES
  $ fragen plugins:install myplugin 

  $ fragen plugins:install https://github.com/someuser/someplugin

  $ fragen plugins:install someuser/someplugin
```

## `fragen plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ fragen plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ fragen plugins:link myplugin
```

## `fragen plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fragen plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fragen plugins unlink
  $ fragen plugins remove
```

## `fragen plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fragen plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fragen plugins unlink
  $ fragen plugins remove
```

## `fragen plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fragen plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fragen plugins unlink
  $ fragen plugins remove
```

## `fragen plugins update`

Update installed plugins.

```
USAGE
  $ fragen plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
