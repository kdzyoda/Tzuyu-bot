const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require(`discord.js`);

module.exports = class SnipeCommand extends BaseCommand {
  constructor() {
    super('snipe', 'fun', []);
  }

  async run(client, message, args) {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.channel.send('There is nothing to snipe here idiot');

    const snipeEmbed = new Discord.MessageEmbed()
     .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
     .setDescription(msg.content)

    message.channel.send(snipeEmbed); 
  }
}