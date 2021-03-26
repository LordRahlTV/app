const Discord = require('discord.js');
exports.run = async (client, message, args) => {

let target = message.mentions.users.first() || message.author;
message.channel.send(
new Discord.MessageEmbed()
.setColor("#fd8f8f")
.setAuthor(target.tag, target.displayAvatarURL({ dynamic: true }))
.setDescription(`${target} kullanıcısının avatarı.`)                     
.setTitle('Avatar')
.setFooter("League of Legends 💮")
.setImage(target.displayAvatarURL({ dynamic: true, size: 512 })));               
}; 
exports.conf = {
  aliases: ["av","avatar"]
};
exports.help = {
  name: 'avatar'
}
