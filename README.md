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
fragen/0.0.3 darwin-arm64 node-v16.16.0
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

_See code: [dist/commands/index.ts](https://github.com/erodactyl/fragen/blob/v0.0.3/dist/commands/index.ts)_

## `fragen config`

Configure OpenAI API key.

```
USAGE
  $ fragen config

DESCRIPTION
  Configure OpenAI API key.
```

_See code: [dist/commands/config.ts](https://github.com/erodactyl/fragen/blob/v0.0.3/dist/commands/config.ts)_
<!-- commandsstop -->
