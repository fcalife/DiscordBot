import parse from './lib/args'

export const rules = {
  rules: {
    'manager': {
      aliases: ['m'],
      usage: ['--manager', 'Run bot with manager. Manager handles autorestarting etc.'],
      value: 'never',
    },
    'inspect-child': {
      aliases: ['i'],
      usage: ['--inspect-child', 'Add --inspect flag to child processes created by the manager.'],
      value: 'never',
      requireArgs: ['manager'],
    },
    'inspect-brk-child': {
      aliases: ['b'],
      usage: ['--inspect-brk-child', 'Add --inspect-brk flag to child processes created by the manager.'],
      value: 'never',
      requireArgs: ['manager'],
    },
    'no-auto-restart': {
      aliases: ['n'],
      usage: ['--no-auto-restart', 'Disable auto restarting when manager is enabled.'],
      value: 'never',
      requireArgs: ['manager'],
    },
    'global': {
      aliases: ['g'],
      usage: ['--global [<key>]', 'Set global[key] to bot instance. Defaults to "bot".'],
      value: 'optional',
    },
    'preserve-log': {
      aliases: ['p'],
      usage: ['--preserve-log', 'Preserves line numbers in logs but disables saving of logs on disk.'],
      value: 'optional',
      type: 'boolean',
    },
  },
} as const

export function getArgs(args = process.argv) {
  return parse(rules)
}
