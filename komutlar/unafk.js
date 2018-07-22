const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Afk",
                    icon_url: "https://cdn.discordapp.com/attachments/469843276954992662/470591640696782848/icons8-xbox-r-50.png"
                  },
                description: "**:negative_squared_cross_mark:  Artık Afk Değilsin**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkkapat'],
  permLevel: 0
};

exports.help = {
  name: 'unafk',
  description: 'Afk Modundan Çıkarsınız',
  usage: 'unafk'
};
