const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Afk",
                    icon_url: "https://i.imgyukle.com/2018/05/07/V49QH.th.png"
                  },
                description: "**:white_check_mark: Artik Afksın**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Afk Kalırsınız.',
  usage: 'afk'
};
