const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
          message.guild.createChannel(`ÖNEMLİ KANALLAR`, 'category');
          message.guild.createChannel(`📕-kurallar`);
        message.guild.createChannel(`📕-başkanlık-sistemi`);
            message.guild.createChannel(`Sohbet Kanalları`, 'category');
          message.guild.createChannel(`📕-parti̇-nasil-kurulur`);
        message.guild.createChannel(`📗-duyuru`);
          message.guild.createChannel(`📗-yüksek-seçim-kurulu`);
            message.guild.createChannel(`📗-hükümet`);
            message.guild.createChannel(`PARTİ İŞLEMLERİ`, 'category');
              message.guild.createChannel(`🚩parti̇-kurulum`);
              message.guild.createChannel(`🚩-parti̇-alim-atma`);
              message.guild.createChannel(`BASIN KURULUŞLARI`, 'category');
        message.guild.createChannel(`📰-resmi̇-gazete`);
         message.guild.createChannel(`📻-rtük`);
            message.guild.createChannel(`📺-anadolu-ajansı`);
         message.guild.createChannel(`📺-türkiye-radyo-televizyon`); 
                      message.guild.createChannel(`METİN KANALLARI`, 'category');
        message.guild.createChannel(`⌛-kur-durumlari`);
            message.guild.createChannel(`💬-genel-sohbet`);
              message.guild.createChannel(`📝-ülke-basini`);
           message.guild.createChannel(`🌍-mi̇ti̇ng`);
        message.guild.createChannel(`🗜-bot-komutlari`);
      message.guild.createChannel(`mod-log`);
            message.guild.createChannel(`😂-rp-disi`);
          message.guild.createChannel(`MECLİS`, 'category');
         message.guild.createChannel(`💎-mecli̇s-genel-kurulu`);
          message.guild.createChannel(`EKONOMİ KOMUTLARI`, 'category');
             message.guild.createChannel(`📒-mali̇-bot-komutlari`); 
               message.guild.createChannel(`📒-maaş-bi̇lgi̇si̇`);
           message.guild.createChannel(`📒-mali̇-i̇şlemler`);
       message.guild.createChannel(`📒-dövüz-cüzdani`);
  message.guild.createChannel(`CUMHUR BAŞKANLIĞI`, 'category');
                    message.guild.createChannel(`💎-cumhur-başkani`);
            message.guild.createChannel(`💎-cumhur-başkani-özel-kalem`);
                     message.guild.createChannel(`💎-cumhur-başkani-yardımcısı`);
         message.guild.createChannel(`BAKANLIKLA`, 'category');
             message.guild.createChannel(`💎-adalet-bakanliği`);
            message.guild.createChannel(`💎-i̇ç-i̇şleri̇-bakanliği`);
              message.guild.createChannel(`💎-savunma-bakanliği`);
            message.guild.createChannel(`💎-dis-i̇şleri̇-bakanliği`);
               message.guild.createChannel(`💎-ulaşdirma-bakanliği`);
            message.guild.createChannel(`💎-sağlik-bakanliği`);
              message.guild.createChannel(`💎-mali̇ye-bakanliği`);
             message.guild.createChannel(`SİLAHLI GÜÇLER`, 'category');
            message.guild.createChannel(`⚔-türk-si̇lahli-kuvetleri̇`);
               message.guild.createChannel(`⚔-emli̇yet-genel-müdürlüğü`);
          message.guild.createChannel(`YARGI`, 'category');
            message.guild.createChannel(`📘mahkeme-salonu`);
              message.guild.createChannel(`📘dava-açma`);

          message.guild.createChannel(`Ses Kanalları`, 'category')
        message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ①`, 'voice');
          message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ②`, 'voice');
        message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ③`, 'voice');
        message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ④`, 'voice');
        message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ⑤`, 'voice');
        message.guild.createChannel(`  ♫ Müzik Odası`, 'voice');
          message.guild.createChannel(`╠ ● βεκlεʍε øδα$ı`, 'voice');


  



        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hazır-sunucu',
  description: 'Bot İçin gerekli kanlları kurar2.',
  usage: 'g!kurulum'
};