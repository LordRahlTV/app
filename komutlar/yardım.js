const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**📌 LorD Rahl der BOT Yardım Komutları 📌**")
    .setColor("RANDOM")
    .addField("**⭐️ Genel Komutlar ⭐️**", '*Genel komutlar burada.*')
    .addField(`Şikayet etmek için:`, '**?rapor <Kişi> <Sebep>**')
    .addField(`Tavsiye vermek için:`, '**?Tavsiye <tavsiyeniz>**')
    .addField(`Bot yapımcısını öğrenmek için:`, '**?Yapımcım**')
    .addField(`Tarihi öğrenmek için:`, '**?Tarih**')
    .addField(`Saati öğrenmek için:`, '**?Saat**')
    .addField(`**💣 Admin Komutları 💣**`, '*Adminlerin kullanabileceği komutlar burada.*')
    .addField(`Bir kullanıcıyı yasaklamak için:`, '**?Ban <Kullanıcı> <Sebep>**')
    .addField(`Bir kullanıcıyı susturmak için:`, '**?sustur <Kullanıcı> <Sebep>**')
    .addField(`Bir kullanıcıyı atmak için:`, '**?kick <Kullanıcı> <Sebep>**')
    .addField(`Bir kullanıcının yasağını açmak için:`, '**?UnBan <Kullanıcı> <Sebep>**')
    .addField(`Botun sunucudaki herkese özelden mesaj atması için:`, '**?DmDuyuru <Mesaj>**')
    .addField(`**💡 Kullanıcı Komutları 💡**`, 'Kullanıcıların kullanabilecieği komutlar burada.')
    .addField(`Avatarınızı görmek için:`, '**?Avatarım**')
    .addField(`Yetkilerinizi öğrenmek için:`, '**?Yetkilerim**')
    .addField(`**🔑 Özel Komut Sistemi 🔑**`, '*Özel komut oluşturmak için gereken kodlar*')
    .addField(`Özel komut eklemek için:`, '**?özelekle <Komut> <Gönderilecek Şey>**')
    .addField(`Özel komut silmek için:`, '**?özelsil <Komut>**')
    .addField(`**🕹 Sunucu Komutları 🕹**`, '*Sunucu ile ilgili komutlar burada.*')
    .addField(`Sunucu ayarlarını gösterir:`, '**?Ayarlar**')
    .addField(`Botun davet linkini atar:`, '**?Davet**')
    .addField(`Otorol sistemini ayarlamanızı sağlar:`, '**?Otorol <@rol>**')
    .addField(`Radyo çalmasını sağlar:`, '**?Radyo <FM adı> <Örnek fenomenfm>**')
    .addField(`🔥 **Bilgi** 🔥 Eğlence komutlarını öğrenmek için`, '**?Eglence** yazabilirsiniz')

    
     message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'help', 'y'],
 
  permLevel: 0,
  kategori: 'genel'
};

exports.help = {
  name: 'yardım',
  category: 'genel',
  description: 'Tüm komutları listeler.',
  usage: 'yardım veya yardım <komut adı>'
};