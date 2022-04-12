const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = class MomoCommand extends BaseCommand {
  constructor() {
    super('momo', 'fun', []);
  }

  async run(client, message, args) {
    fetch('https://meme-api.herokuapp.com/gimme/momo')
      .then(res => res.json())
      .then(async json => {
       const momoEmbed = new Discord.MessageEmbed()
        .setTitle(json.title)
        .setImage(json.url)
        .setFooter(`${json.subreddit} ${json.postLink}`);

      let msg = await message.channel.send('Sending you a picture...');
      msg.edit(momoEmbed);
      });
  }
}