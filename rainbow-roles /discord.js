/ *
 * Discord Gökkuşağı Rolleri
 *
 * discord.js :: Discord.js API'sı ile Discord sunucuları ile iletişim kurun
 *
 * MIT Lisansı
 *
 * Telif Hakkı (c) 2019 Jack MacDougall
 *
 * İzinsiz kopyalanacak herhangi bir kişiye ücretsiz olarak izin verilir.
 * bu yazılımın ve ilgili dokümantasyon dosyalarının ("Yazılım") ele alınması,
 * Yazılımda, sınırlama olmaksızın haklar dahil
 * kullanmak, kopyalamak, değiştirmek, birleştirmek, yayınlamak, dağıtmak, alt lisans vermek ve / veya satmak
 * Yazılımın kopyaları ve Yazılımın
 * aşağıdaki koşullara tabi olarak, bunu yapmak için döşenmiş:
 *
 * Yukarıdaki telif hakkı bildirimi ve bu izin bildirimi tüm içeriğe dahil edilecektir.
 * Yazılımın kopyaları veya önemli kısımları.
 *
 * YAZILIM, HERHANGİ BİR TÜR, AÇIK VEYA GARANTİ OLMADAN "OLDUĞU GİBİ" SAĞLANMAKTADIR
 * TİCARİ GARANTİ GARANTİLERİ İLE SINIRLANMAMIŞTIR;
* KATILIMCI AMAÇ VE ZARARSIZLIK İÇİN FİTNESS. HİÇBİR OLMAYAN KÜÇÜK
 * YAZAR VEYA TELİF SAHİPLERİ HİÇBİR ZARAR VEYA DİĞER HEDEFLER
 * SÖZLEŞME, TORT VEYA DİĞER BİRLİKTE ÇALIŞAN BİR SORUMLULUK,
 * YAZILIMLA VEYA KULLANIMDAN KULLANIMI VEYA DİĞER AÇIKLAMALARLA BAĞLANTISI
 * YAZILIM.
 * /

const  Debug  =  zorunlu ( ' hata ayıklama ' )
const  Discord  =  zorunlu ( ' discord.js ' )
const  ManagedGuild  =  zorunlu ( ' ./guild.js ' )
const { şemaları , renkleri , colorTitle , colorToEnglish } =  zorunlu ( ' ./colors.js ' )
const { token } =  zorunlu ( ' ./token.json ' )
const { aralığı , dieOnBoot } =  gerektirir ( ' ./config.json ' )

const  log  =  Hata ayıklama ( ' bot ' )
const  statsLog  =  Hata ayıklama ( ' istatistik ' )
const  inviteLog  =  ayıklama ( ' davetiye ' )
const  updateLog  =  Hata ayıklama ( ' bot-update ' )
const  deathLog  =  Hata ayıklama ( ' die ' )

const  bot  =  yeni  Discord.Client ()

modül . ihracat  = bot

const  githubFooter  = [ ' https://github.com/jackm-xyz/rainbow-roles ' ] // ["GitHub'da bu botu görüntüle", "https://github.com/jackm-xyz/rainbow-roles" ]

bot . on ( ' bağlantı kes ' , event  => {
    log ( ' bot uyumsuzluk bağlantısı kesildi ' , olay )
    süreç . çıkış ( 1 )
})
bot . on ( ' rateLimit ' , ( bilgi , limit , timeDiff , yol , yöntem ) => {
    log ( ' bot isabet oranı sınırı ' , bilgi)
})
bot . açık ( ' hata ' , err  => {
    log ( ' bot atma hatası ' , hata)
})
bot . açık ( ' uyar ' , uyarı  => {
    log ( ' bot atma uyarısı ' , uyarı)
})

bot . açık ( ' guildCreate ' , guild  => {
    log ( ` bot guild'e katıldı $ { guild . id } ( $ { guild . name } ) ` )
    Ana Kanal (lonca). gönder ({
        embed :  yeni  Discord.RichEmbed ()
            . setTitle ( ' Gökkuşağı Rolleri ' )
            . AyarAçıklaması ( ' senin ikilik var sunucusuna Gökkuşağı Roller eklediğiniz için teşekkür ederiz! \ n gökkuşağı rolleri kullanarak yardım almak için 'Roller yardımcı @Rainbow' kullanın. ' )
            . setFooter ( ... githubFooter)
    })
})

işlevi  hasSendPermission ( channel ) {
    geri  kanalı . türü  ===  ' metin '  &&  kanal . memberPermissions ( kanal . lonca . ben ). var ( ' SEND_MESSAGES ' )
}

 mainChannel işlevi ( lonca ) {
    if ( guild . systemChannelID ) {
        const  systemChannel  =  Guild . kanallar . almak ( lonca . systemChannelID )
        if ( hasSendPermission (systemChannel))) {
            dönüş sistemiKanal
        }
    }

    const  general  =  lonca . kanallar . find ( channel  => / ^ (general | main | chat) $ / . test ( kanal . adı )) 
    if (general &&  hasSendPermission (general)) {
        genel geri dönüş
    }

    const  sıralanmış  =  lonca . kanallar . sort (( chanA , chanB ) => {
        eğer ( ! hasSendPermission (chanA)) döndürür  - 1
        dönmek  Chana . < chanB konumu  . pozisyon mu? - 1 : 1     
    })
    const  bestPossible  =  sıralandı . ilk ()
    // console.log (sıralı, en iyiyim)

    return bestPossible
}

let mentionRegex

const  duraklatıldı  = {
    / *
    <guild id>: <duraklatıldı doğru / yanlış>
    * /
}
 updateAll () { işlevinin işlevi
    için ( const  Guild  bir  bot . loncalarda . dizisi ()) {
        eğer (duraklatıldı [ lonca . id ]) devam
        updateLog ( ` güncelleme guild $ { guild . id } ( $ { guild . name } ) ` )
        const  yönetilen  =  ManagedGuild . almak (lonca)
        yönetilen
            . güncelleme ()
            . sonra (() =>  updateLog ( ` $ { guild . id } guild güncellemesi tamamlandı ( $ { guild . name } ) ` ))
            . catch ( err  =>  log ( ` guild $ ' ı güncelleyemedi $ { guild . id } ( $ { guild . name } ) ` , err))
    }
}
bot . on ( ' hazır ' , () => {
    log ( ' bot discord sunucularına giriş yaptı ) '

    setInterval (updateAll, aralık *  1000 )
    tellRegex =  new  RegExp ( ` <@ (! |) $ { bot . user . id } > ` )

    let istatistik =  ' şu anda aşağıdaki guild'lere katılan, uyuşmazlığa bağlı: \ n '
    bot . guildler . forEach ( guild  => {
        istatistik + =  ` ( $ { guild . id } ) $ { guild . name } $ { guild adresinde katıldı . Katıldı . toISOString () } \ n `
        bırak yöneticiler =  ' '
        kullanıcıların izin ver =  ' '
        lonca . üyeler . forEach ( member  => {
            const  isAdmin  =  üye . izinler . var ( 8 )
            const  info  =  `     $ { isAdmin ?  ' admin '  :  ' kullanıcı ' }  $ { member . kullanıcı . tag } $ { üye . takma ad  ?  ` ( $ { member . nickname } ) `  :  ' ' } $ { member rolüyle . en yüksek rol . name } \ n `
            if (isAdmin) yöneticileri + = bilgi
            başka kullanıcılar + = bilgi
        })
        istatistik + = yöneticiler
        istatistik + = kullanıcı
        lonca . fetchInvites ()
            . Sonra ( davetler  > =  davet . forEach ( davet  => {
                inviteLog ( ` ( $ { lonca . id } ) $ { lonca . ad } davet sahiptir $ { davet . url } ile $ { davet . MaxUses } max kullanır ` )
            }))
            . catch ( err  =>  statsLog ( ` guild için davet getirme hatası ( $ { guild . id } ) $ { guild . name } ` , err . message  / * err * / ))
    })
    statsLog (istatistikler)

    eğer (dieOnBoot) {
        setTimeout (() => {
            deathLog ( ' açılışta ölüme izin verildi, ölüm notlarını yazdırarak ve loncaları bırak ' )
            bot . guildler . forEach ( guild  => {
                deathLog ( ` şimdi guild'den ayrılıyor ( $ { guild . id } ) $ { guild . name } ` )
                itsOver (lonca)
                    . sonra (() => {
                        deathLog ( ` bırakılan guild ( $ { guild . id } ) $ { guild . name } ` )
                    })
                    . yakalamak ( err  => {
                        deathLog ( ` guild'i bırakamadı ( $ { guild . id } ) $ { guild . name } ` , err)
                    })
            })
        }, 8000 )
    }
})

const  colorsEmbed  =  yeni  Discord.RichEmbed ()
renklerEmbed . setTitle ( ' Renk Listesi ' )
renklerEmbed . setDescription ( ' İşte tüm mevcut renkler ve renk kodları. ' )
için ( const  colorName  ait  Nesne . anahtarları (renk)) {
    renklerEmbed . addField ( colorTitle (colorName), colorToEnglish (renkler [colorName]))
}
renklerEmbed . setFooter ( ... githubFooter)

const  setsEmbed  =  yeni  Discord.RichEmbed ()
setsEmbed . setTitle ( ' Renk Ayar Listesi ' )
setsEmbed . setDescription ( ' Bunların tümü Rainbow Roles önceden programlanmış renk kümeleridir. \ n Renkler yerine bunları kullanın ve bunlar içerdikleri renklerle değiştirilecektir. ' )
için ( const  set  arasında  Nesne . değerlerinin (şemaları)) {
    const  colours  =  ayarlandı . set . harita (colorToEnglish). katılmak ( ' \ n ' )
    setsEmbed . addField ( ` $ { set . name } ( $ {
        Nesne . tuşları (düzenleri). Bulmak ( key  => düzenleri [key]. isim  ===  set . isim )
    } ) ` , renkler)
}
setsEmbed . setFooter ( ... githubFooter)

bot . açık ( ' mesaj ' , mesaj  => {
    if ( mesaj . yazar . bot ) dönüş
    if ( ! message . guild ) return
    eğer ( ! mesajı . isMentioned ( bot . kullanıcı )) dönüş
    if ( ! tellRegex . test ( mesaj . içerik )) return

    // TODO: komutları yorumla
    ; ( async () => {
        / *
        yardım - komutlar için yardım görüntüleme
        kılavuzu - basit kurulum kılavuzu
        renkler - mevcut renkler
        setleri - mevcut kümeler
        duraklat - bu guild'deki renk döndürmelerini duraklat
        * /

        if ( / help / . test ( mesaj . içerik )) {
            bekliyor  mesajı . Kanal . gönder ({
                embed :  yeni  Discord.RichEmbed ()
                    . setTitle ( ' Gökkuşağı Rolleri Yardım ' )
                    . setDescription ( ' Rainbow Rolleri Discord botunu kullanmak çok kolaydır. \ n) Çalıştırmak istediğiniz komutla botu kullanarak komutları çalıştırın. (örn. "@Rainbow Roles help") ' )
                    . addField ( ' yardım ' , ' Bu yardım sayfasını ve mevcut tüm komutları göster. ' )
                    . addField ( ' kılavuz ' , ' Gökkuşağı Rolleri kurulum / kullanım kılavuzunu yazdırın. ' )
                    . addField ( ' colours ' , ' Yeni rollerin tanımlanmasında kullanılacak olası renk adlarını listeleyin. ' )
                    . addField ( ' sets ' , ' Yeni rollerin kolay tanımlanması için önceden programlanmış tüm renk kümelerini listeler. ' )
                    . addField ( ' duraklat ' , ' Rollerin renk döndürmesini duraklatın. ' )
                    . setFooter ( ... githubFooter)
            })
            dönüş
        }

        if ( / guide / . test ( mesaj . içerik )) {
            bekliyor  mesajı . Kanal . gönder ({
                embed :  yeni  Discord.RichEmbed ()
                    . setTitle ( ' Kullanım Kılavuzu ' )
                    . AyarAçıklaması ( ' gökkuşağı rol oluşturmak basittir. \ n bot altına ** yeni bir rol ekleyin \' . rolleri listesinde en yüksek rolüne ** \ n Sonra adlandırın `gökkuşağı red` veya` gibi başka renk açılan gökkuşağı bluegreen`. \ n Dashes. de öyle gökkuşağı kırmızı-mor-bluegreen-beyaz ' `denemek izin verilir \ n bot otomatik olarak bu rol için bisiklet renklerini başlayacak. \ n Ayrıca gökkuşağı` gibi bazı özel setleri kullanabilirsiniz -pride` ya da 'gökkuşağı orangetored`. ' )
                    . setFooter ( ... githubFooter)
            })
            dönüş
        }

        if ( / colours / . test ( mesaj . içerik )) {
            bekliyor  mesajı . Kanal . Gönder ({embed : colorsEmbed})
            dönüş
        }

        if ( / sets / . test ( mesaj . içerik )) {
            bekliyor  mesajı . Kanal . Gönder ({embed : setsEmbed})
            dönüş
        }

        if ( / pause | play / . test ( mesaj . içerik )) {
            if ( ! message . member . hasPermission ( ' MANAGE_ROLES ' ))) {
                bekliyor  mesajı . Kanal . gönder ({
                    embed :  yeni  Discord.RichEmbed ()
                        . setTitle ( ' İzin Gerekli ' )
                        . AyarAçıklaması ( ' Üzgünüm ama rol renklerin bisiklet başlatmak / durdurmak için 'Rolleri yönet' izni gerekiyor. ' )
                        . setFooter ( ... githubFooter)
                })
                dönüş
            }
            duraklatıldı [ mesaj . lonca . id ] =  ! duraklatıldı [ mesaj . lonca . id ]
            bekliyor  mesajı . Kanal . gönder ({
                embed :  yeni  Discord.RichEmbed ()
                    . setTitle ( ` Role Cycling $ { duraklatılmış [ mesaj . guild . id ] ?  ' Durduruldu '  :  ' Başladı ' } ` )
                    . AyarAçıklaması ( ` Rol renk bisiklet şimdi olmuştur $ { duraklatılmış [ mesajı . lonca . id ] ?  ' durdurulmuş '  :  ' devam ' } bu sunucuda. \ n / devre dışı rol renk bisiklet etkinleştirmek için "duraklama" kullanın. ` )
                    . setFooter ( ... githubFooter)
            })
            dönüş
        }

        bekliyor  mesajı . Kanal . gönder ({
            embed :  yeni  Discord.RichEmbed ()
                . setTitle ( ' Komut Bulunamadı ' )
                . AyarAçıklaması ( ` Üzgünüm ama " $ { mesajı . cleanContent } " geçerli bir komut değil. \ n mümkün komutları görmek için "yardım" kullanın. ` )
                . setFooter ( ... githubFooter)
        })
    }) ()
        . yakalamak ( err  => {
            log ( ` $ { message . content } " ` , err komutunu yorumlayamadı
        })
})

bot . giriş (belirteç)

// fakir çocuğum iyi uykular; w;
async  işlevi  itsOver ( guild ) {
    let err
/ *      dene {
        mainChannel bekliyor (lonca) .send ({
            embed: yeni Discord.RichEmbed ()
                .setTitle ('Gökkuşağı Rolleri ÖLÜ!')
                .setDescription (
                    'Herkese merhaba! Jack burada. (da bot'un yaratıcısı) \ n '+
                    '\ n' +
                    'Nihayet oldu. \ N' +
                    '\ n' +
                    'Başlangıçta bu botu tasarlarken @discordapp tarafından Rainbow Rolleri yapmak için nasıl yasaklanabileceğim konusundaki uyarısı görmezden geldim: \ n' +
                    'https://twitter.com/discordapp/status/1055182857709256704\' +
                    '\ n' +
                    "Rainbow Rolleri çevrimiçi duruma getirdiğimden bu yana 114 gün geçti ve rol düzenleme konusunda IP'den yasaklandım. \ N" +
                    'Ağımdaki hiçbir Discord botu veya Discord hesabı bir daha asla rol renklerini düzenleyemiyor, bu yüzden bot kapanıyor. \ N' +
                    '\ n' +
                    'Ancak, yasaklanmamış bir örneğinizi çalıştırmak istiyorsanız, kodu https://github.com/jackm-xyz/rainbow-roles\n' adresinde kullanabilirsiniz.
                    '\ n' +
                    'Botumu kullandığın için teşekkürler! \ N' +
                    '\ n' +
                    'Kendi kendine imha \ n' +
                    '3 ... \ n' +
                    '2 ... \ n' +
                    '1 ...'
                )
                .setFooter (... githubFooter)
        })
    } catch (hata) {err = hata} * /
     yeni  Promise bekliyor ( r => setTimeout (r, 5000 ))
     lonca bekliyor . leave ()
    if (err) hataya atmak
}