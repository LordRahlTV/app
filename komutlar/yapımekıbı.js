const Discord = require("discord.js")

exports.run = (client, message, args) => {
var embed = new Discord.MessageEmbed()

.setTitle(`© Çay`)
.setAuthor(`Bot Bilgi`,message.author.avatarURL(),)
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL()) 
.addField(` **Botun Kullanıcı Sayısı**`,client.users.cache.size) 
.addField(` **Botun Olduğu Sunucu Sayısı**`,client.guilds.cache.size) 
.addField(` **Bottaki Komut Sayısı**`,client.commands.size)
.addField(` **Sahip**`, `<@427088164663066624> <a:kelpek:705678773131149314>`,true) 
.addField(` **Sahip**`,`<@718402108101230653> <a:kelpek:705678773131149314>`,true)
.addField(` **Botun Geliştiricisi**`,`<@718402108101230653> <a:kelpek:705678773131149314>`,true)
.addField(` **Botun Geliştiricisi**`,`<@427088164663066624> <a:kelpek:705678773131149314>`,true)
.addField(` **Bot Discord.js Versiyon**`,Discord.version)
.setTimestamp()
message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımekibi"],
  permLevel: 0
};

exports.help = {
  name: 'yapımekibi',
  category: 'yapımcı',
  description: 'Yapım Ekibini Gösterir',
  usage: 'm+yapımekibi'
};