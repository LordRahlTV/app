const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('Koca Yürekli ' + message.author.username + ' Salep Ismarladı!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.discordapp.net/attachments/820653082982744080/824399011163275315/DocumentHandler.png?width=406&height=406`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'salep',
  category: 'Eğlence2',
  description: 'Herkeze Çay Verir',
  usage: 'salep'
};
