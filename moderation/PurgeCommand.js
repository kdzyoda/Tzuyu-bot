const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Hey you do not have permission to use this. You need milk.');
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I do not have \`MANAGE_MESSAGES\` permission.");
    if (!args[0]) return message.channel.send("You must pick a number to purge messages. \`-purge number\`");
    const amountToDelete = Number(args[0], 50);

    if (isNaN(amountToDelete)) return message.channel.send("Error. Number stated is not valid number.");
    if (!Number.isInteger(amountToDelete)) return message.channel.send("Number stated must be a whole number.");
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send('The number stated must be between 2 and 100.');
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    })

    try {
      await message.channel.bulkDelete(fetched)
       .then(messages => message.channel.send(`Completely purged ${messages.size} messages!`));
    } catch (err) {
      console.log(err);
      message.channel.send('I was unable to delete the messages make sure they are within 3 days old.');
    }
  }
}