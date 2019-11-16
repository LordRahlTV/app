const db = require('quick.db')
const Discord = require('discord.js')

var pref = "!"

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`aç yada kapat yazmalısın! Örnek: ${pref}selam aç`)
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    var i = await db.set(`sa_${message.guild.id}`, 'acik')
      message.channel.send(':white_check_mark: Selam a Cevap Verecektir Bot')
    
  }
  if (args[0] == 'kapat') {
    var i = await db.set(`sa_${message.guild.id}`, 'kapali')
      message.channel.send(':white_check_mark: Birisi sa Yazınca Cevap Vermiyecektir. ')
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa'],
  permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
  name: 'selam',
  description: 'Selam yazınca cevap verem ve vermeme',
  usage: 'selam [aç] / [kapat]'
};

