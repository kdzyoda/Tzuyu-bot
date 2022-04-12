const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = class MinaCommand extends BaseCommand {
  constructor() {
    super('mina', 'fun', []);
  }

  async run(client, message, args) {
    fetch('https://meme-api.herokuapp.com/gimme/MyouiMina')
      .then(res => res.json())
      .then(async json => {
       const MyouiMinaEmbed = new Discord.MessageEmbed()
        .setTitle(json.title)
        .setImage(json.url)
        .setFooter(`${json.subreddit} ${json.postLink}`);

      let msg = await message.channel.send('Sending you a picture...');
      msg.edit(MyouiMinaEmbed);
      });
  }
}