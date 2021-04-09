
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `  ●-▬▬▬ஜ۩۞۩ஜ▬▬▬▬-●

〘 *WHATSAPP BOT* 〙
────────────────────

〘 *ABOUT USER* 〙
╭──────────────────────
│❉ *Nama* :  ${pushname}
│❉ *Status VIP* :  ${premi}
│❉ *Duit* :  Rp ${uangku}
│❉ *XP* :  ${getLevelingXp(sender)}/${reqXp} 
│❉ *Level* :  ${getLevelingLevel(sender)}
│❉ *Role* :  ${role}
│❉ *User Register* :  ${_registered.length}
╰──────────────────────

〘 *INFORMATION* 〙
╭──────────────────
│ ❉ ${prefix}info
│ ❉ ${prefix}owner
│ ❉ ${prefix}report
│ ❉ ${prefix}donasi
│ ❉ ${prefix}request
╰──────────────────


 〘 *OWNER ONLY* 〙

╭──────────────────────
│❉ ${prefix}bc
│❉ ${prefix}addbadword
│❉ ${prefix}delbadword
│❉ ${prefix}bcgc
│❉ ${prefix}kickall
│❉ ${prefix}setreply
│❉ ${prefix}setprefix
│❉ ${prefix}clearall
│❉ ${prefix}block
│❉ ${prefix}unblock
│❉ ${prefix}leave
│❉ ${prefix}event [1/0]
│❉ ${prefix}clone
│❉ ${prefix}setppbot
╰──────────────────────

 〘 *MAKER MENU* 〙

╭──────────────────────
│❉ ${prefix}sticker
│❉ ${prefix}stickerhide
│❉ ${prefix}quotemaker
│❉ ${prefix}glitchtext
│❉ ${prefix}qrcode
│❉ ${prefix}nulis
│❉ ${prefix}nulis2
│❉ ${prefix}nulis3
│❉ ${prefix}ttp
│❉ ${prefix}attp
│❉ ${prefix}vinta
│❉ ${prefix}wanted
│❉ ${prefix}pornlogo
│❉ ${prefix}phcomment
│❉ ${prefix}hartatahta
│❉ ${prefix}gplaybutton
│❉ ${prefix}darkneon
│❉ ${prefix}candlemug
│❉ ${prefix}lovemsg
│❉ ${prefix}mugflower
│❉ ${prefix}narutobanner
│❉ ${prefix}paperonglass
│❉ ${prefix}romancetext
│❉ ${prefix}shadowtext
│❉ ${prefix}coffeecup
│❉ ${prefix}glowingneon
╰──────────────────────
 
〘 *FUN MENU* 〙

╭──────────────────────
│❉ ${prefix}alay
│❉ ${prefix}jadian
│❉ ${prefix}pantun
│❉ ${prefix}tercantik
│❉ ${prefix}terganteng
│❉ ${prefix}lirik
│❉ ${prefix}artinama
│❉ ${prefix}chord
│❉ ${prefix}bisakah
│❉ ${prefix}kapankah
│❉ ${prefix}apakah
│❉ ${prefix}rate
│❉ ${prefix}slap
│❉ ${prefix}tampar
│❉ ${prefix}katadilan
│❉ ${prefix}ceritahoror
│❉ ${prefix}hurufterbalik
│❉ ${prefix}moddroid 「VIP」
│❉ ${prefix}happymod 「VIP」
╰──────────────────────
 
〘 *MUTUAL* 〙
 
╭──────────────────────
│❉ ${prefix}mutual
│❉ ${prefix}next
╰──────────────────────
 
〘 *MEDIA MENU* 〙

╭──────────────────────
│❉ ${prefix}brainly 「VIP」
│❉ ${prefix}pinterest
│❉ ${prefix}resepmasakan
│❉ ${prefix}igstalk
│❉ ${prefix}bitly
│❉ ${prefix}tiktokstalk 「VIP」
│❉ ${prefix}ssweb
│❉ ${prefix}kbbi
│❉ ${prefix}quran
│❉ ${prefix}quransurah
│❉ ${prefix}trendtweet
│❉ ${prefix}infocuaca
│❉ ${prefix}resepmasakan
╰──────────────────────
 
〘 *NSFW / 18+* 〙

╭──────────────────────
│❉ ${prefix}anjing
│❉ ${prefix}blowjob
│❉ ${prefix}nekonime
│❉ ${prefix}pokemon
│❉ ${prefix}husbu
│❉ ${prefix}nangis
│❉ ${prefix}cium
│❉ ${prefix}peluk
│❉ ${prefix}ranime
╰──────────────────────
 
〘 *LIMIT & DUIT* 〙

╭──────────────────────
│❉ ${prefix}limit
│❉ ${prefix}buylimit
│❉ ${prefix}transfer
│❉ ${prefix}dompet
│❉ ${prefix}giftlimit
│❉ ${prefix}leaderboard
╰──────────────────────
 
〘 *GROUP MENU* 〙

╭──────────────────────
│❉ ${prefix}delete
│❉ ${prefix}hidetag
│❉ ${prefix}blocklist
│❉ ${prefix}grouplist
│❉ ${prefix}level
│❉ ${prefix}linkgc
│❉ ${prefix}tagall
│❉ ${prefix}setpp
│❉ ${prefix}add
│❉ ${prefix}kick
│❉ ${prefix}setname
│❉ ${prefix}setdesc
│❉ ${prefix}demote
│❉ ${prefix}promote
│❉ ${prefix}listadmin
│❉ ${prefix}group [buka/tutup]
│❉ ${prefix}leveling [enable/disable]
│❉ ${prefix}nsfw [1/0]
│❉ ${prefix}simih [1/0]
│❉ ${prefix}welcome [1/0]
│❉ ${prefix}antilink [1/0]
│❉ ${prefix}nobadword [enable/disable]
╰──────────────────────
 
〘 *STORAGE* 〙

╭──────────────────────
│❉ ${prefix}addsticker
│❉ ${prefix}getsticker
│❉ ${prefix}stickerlist
│❉ ${prefix}addvideo
│❉ ${prefix}getvideo
│❉ ${prefix}videolist
│❉ ${prefix}getimage
│❉ ${prefix}addImage
│❉ ${prefix}imagelist
│❉ ${prefix}addaudio
│❉ ${prefix}getaudio
│❉ ${prefix}audiolist
╰──────────────────────
 
〘 *SONG MENU* 〙
 
╭──────────────────────
│❉ ${prefix}play
│❉ ${prefix}joox 「VIP」
╰──────────────────────
 
〘 *THANKS TO* 〙

● FDL
● RizkyO
● RIU
● AFFIS JUNIANTO
● FADHIL GRAPHY
● MHANKBARBAR
● MLSPACETOON
`
}
exports.help = help

//THANKS TO JAN DDI HAPUS -_-


  
