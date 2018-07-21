const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' ```:pencil2: **Botun yeniden başlatılmasına onay veriyorsanız 30 saniye içinde evet yazın** :pencil2:``` ')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`:electric_plug: **Yapımcım Yeniden Başlıyorum** :electric_plug:`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] :space_invader: **Bot Yeniden Başlatılıyor** :space_invader:`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('**Yeniden Başlatma İşlemini İptal Ettim.**');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'restart',
  description: '[Admin Komutu]',
  usage: 'restart'
};
