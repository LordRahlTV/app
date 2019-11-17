const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    var sans = ["Yalnızların yarenidir çay.","Çay henüz her şey bitmedi demektir…" ,"Çay içiyoruz mutlu bir sessizlik içinde…","Masada çay bardakları ve senin ellerin olsun…","Şimdi ölsek en fazla kahvede çaylar soğur…","Ömür bir çay içimi kadar zaten.","Ve oturdu mu bir masaya hakkını verir çay içmenin…","Neyse ki çayın demi var, hayatın gamına inat…","Soğuyan bir bardak çaydır benim ömrüm…","Biraz çay soğuklarda… Ne kadar acı şu dünya…" ];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___ÇAY SÖZLERİ___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "genel"
};

exports.help = {
  name: 'çaysözü',
  description: 'Çay sözleri söyler bot',
  usage: 'çaysözü'
};