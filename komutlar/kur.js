const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut girişi').setDescription('Gerekli Kanal kurulsun mu?.').setFooter('Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 10 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'Evet', {
max: 1,
time: 10000,
errors: ['time'],
})
.then((collected) => {
        message.guild.createChannel(`hoşgeldiniz`);
        message.guild.createChannel(`kαчıтѕız`);
        message.guild.createChannel(`loɠ-ƙaɲali`);
        message.guild.createChannel(`ᴋᴜʀᴀʟʟᴀʀ`);
        message.guild.createChannel(`ᴅᴜʏᴜʀᴜʟᴀʀıᴍıᴢ`);
        message.guild.createChannel("ʏᴏ̈ɴᴇᴛɪᴍ ᴏғғɪᴄᴇ", "voice");
        message.guild.createChannel("ᴀᴅᴍɪɴ ᴏғғɪᴄᴇ", "voice");
        message.guild.createChannel("ᴠɪᴅʏᴏ/ʏᴀʏıɴ", "voice");
        message.guild.createChannel("ʙᴀʏᴀɴ ᴏᴅᴀꜱı", "voice");
		message.guild.createChannel(`ɢᴇɴᴇʟ-ꜱᴏʜʙᴇᴛ`);
		message.guild.createChannel(`kᴇʟɪᴍᴇ-ᴛᴜ̈ʀᴇᴛᴍᴇᴄᴇ`);
		message.guild.createChannel(`bᴏᴛ-ᴋᴏᴍᴜᴛʟᴀʀı`);
        message.guild.createChannel("ꜱᴏʜʙᴇᴛ ᴏᴅᴀꜱı 📢\¹", "voice");
        message.guild.createChannel("ꜱᴏʜʙᴇᴛ ᴏᴅᴀꜱı 📢\¹", "voice");
        message.guild.createChannel("ᴏʏᴜɴ ꜱᴏʜʙᴇᴛ ᴏᴅᴀꜱı 🔘", "voice");
        message.guild.createChannel(`ᴍᴜ̈ᴢɪᴋ-ʏᴏ̈ɴʟᴇɴᴅɪʀᴍᴇ-ණ`);
        message.guild.createChannel("ᴍᴜ̈ᴢɪᴋ ᴏᴅᴀꜱı 📀", "voice");
        message.guild.createChannel("ᴍᴜ̈ᴢɪᴋ ᴏᴅᴀꜱı 📀", "voice");
        message.guild.createChannel("ᴄᴏᴜɴᴛᴇʀ ꜱᴛʀɪᴋ ɢʟᴏʙᴀʟ ᴏғғᴇɴꜱɪᴠᴇ", "voice");
        message.guild.createChannel("ᴘʟᴀʏᴇʀᴜɴᴋɴᴏᴡ·ꜱ ʙᴀᴛᴛʟᴇɢʀᴏᴜɴᴅꜱ", "voice");
        message.guild.createChannel("ɢʀᴀɴᴅ ᴛʜᴇғᴜᴛ ᴀᴜᴛᴏ ıı-ııı-ıᴠ-ᴠ", "voice");
        message.guild.createChannel("ᴍᴜʟᴛɪ ᴛʜᴇғᴜᴛ ᴀᴜᴛᴏ", "voice");
        message.guild.createChannel("ᴢᴜʟᴀᴏʏᴜɴ", "voice");
        message.guild.createChannel("ʟᴏʟ", "voice");
        message.guild.createChannel("ʏᴇᴍᴇᴋᴛᴇ", "voice");
        message.guild.createChannel("ᴅışᴀʀıᴅᴀ", "voice");
        message.guild.createChannel("ᴀғᴋ", "voice");


        message.channel.send(`Gerekli Kanalları Oluşturdum.Recep Fides(Recep Kotan) `);
        message.channel.send(`Discord linkimiz: https://discord.gg/Ee7hBtV `);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kur',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'kur'
};
