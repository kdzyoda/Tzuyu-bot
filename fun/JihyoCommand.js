const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = class JihyoCommand extends BaseCommand {
  constructor() {
    super('jihyo', 'fun', []);
  }

  async run(client, message, args) {
    fetch('https://meme-api.herokuapp.com/gimme/ParkJihyo')
      .then(res => res.json())
      .then(async json => {
       const ParkJihyoEmbed = new Discord.MessageEmbed()
        .setTitle(json.title)
        .setImage(json.url)
        .setFooter(`${json.subreddit} ${json.postLink}`);

      let msg = await message.channel.send('Sending you a picture...');
      msg.edit(ParkJihyoEmbed);
      });
  }
}