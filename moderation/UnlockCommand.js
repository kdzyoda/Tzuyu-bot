const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnlockCommand extends BaseCommand {
  constructor() {
    super('unlock', 'moderation', []);
  }

  run(client, message, args) {
    message.channel.send('unlock command works');
  }
}