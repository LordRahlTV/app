const  Discord  =  zorunlu ( ' discord.js ' );
const  client  =  new  Discord.Client ();
const  yapılandırma  =  gerektirir ( ' ./config.json ' );

const  size     =  config . renkler ;
const  rainbow  =  new  Dizi (boyut);

için ( var i = 0 ; i < boyutu i ++ ) {
  var kırmızı    =  sin_to_hex (i, 0  *  Math . , PI  *  2 / 3 ); // 0 derece
  var mavi   =  sin_to_hex (i, 1  *  Math . , PI  *  2 / 3 ); // 120 derece
  var yeşil =  sin_to_hex (i, 2  *  Math . , PI  *  2 / 3 ); // 240 derece

  gökkuşağı [i] =  ' # ' + kırmızı + yeşil + mavi;
}

işlev  sin_to_hex ( i , phase ) {
  var sin =  Matematik . sin ( Matematik . PI  / boyut *  2  * i + faz);
  var int =  Matematik . kat (günah *  127 ) +  128 ;
  var hex =  int . toString ( 16 );

  geri  hex . uzunluk  ===  1  ?  ' 0 ' + hex : hex;
}

izin yer =  0 ;
const  sunucuları  =  config . sunucular ;

 changeColor () işlevi {
  için ( izin indeksi =  0 ; göstergesi <  sunucuları . uzunluğu ; ++ indeksi) {		
    istemci . guildler . get (sunucular [dizin]). rolleri . bulun ( ' name ' , config . roleName ). setColor (gökkuşağı [yer])
		. yakalamak ( konsol . hata );
		
    if ( config . logging ) {
      Konsol . log ( ` [ColorChanger] Sunucuda rengi $ { rainbow [place] } olarak değiştirdi: $ { server [index] } ` );
    }
    eğer (yer == (boyut -  1 )) {
      yer =  0 ;
    } else {
      yer ++ ;
    }
  }
}

istemci . on ( ' hazır ' , () => {
  Konsol . log ( ` olarak giriş {$ istemci . kullanıcı . kullanıcıadı } ! ` );
  eğer ( yapılandırma . hız  <  60000 ) { konsol . log ( " Asgari hız 60.000'dir, eğer bu kötüye kullanılırsa botunuz IP ile yasaklanabilir " ); süreç . exit ( 1 );}
  setInterval (changeColor, yapılandırma . hız );
});


istemci . giriş ( yapılandırma . belirteç );