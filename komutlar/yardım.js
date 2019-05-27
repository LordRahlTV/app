const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
                '**Başlangıç**\n\n\n' + ' BURAYADA YAZ İŞTE BİŞİLER \n \n \n  |  ➡ Bu Emojılere Tıklayarak Sayfayı Değiştirebilirsiniz',
              '**Ana Komutlar**\n\n\n' + 'KOMUT İSMİ VE AÇIKLAMA ',
              '**Yapımcı Komutları**\n\n\n' + ' KOMUT İSMİ VE AÇIKLAMA ',
              '**Eğlence Komutları**\n\n\n' + 'KOMUT İSMİ VE AÇIKLAMA',
              '**Müzik Komutları**\n\n\n' + 'KOMUT İSMİ VE AÇIKLAMA',
              '**Yetkili Komutları**\n\n\n ' + 'KOMUT İSMİ VE AÇIKLAMA'
             // '**Sayaç **\n\n\n ' + ' KOMUT İSMİ VE AÇIKLAMA ',
              '**Yapımcım **\n\n\n ' + 'Yapımcım : **Enes** \nGeliştirici : **Enes**',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/avatars/510453815003054090/e764556833ceaa8099d38f8c1b6ea635.png?size=204')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
   message.react(":white_check_mark: ")
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};