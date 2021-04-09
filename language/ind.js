const a = '*'

exports.wait = () => {
	return`𝗦𝗮𝗯𝗮𝗿 𝘆𝗮𝗮 𝗹𝗮𝗴𝗶 𝗽𝗿𝗼𝘀𝗲𝘀`
}

exports.succes = () => {
	return`*「 Sukses 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GROUP BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM REGISTERASI 」*\n──────────────────────────\n*Cara mendaftar : ${prefix}daftar nama|umur*\n*Contoh : ${prefix}daftar BOT|17*\n──────────────────────────`
}

exports.rediregis = () => {
	return`「 𝗞𝗔𝗠𝗨 𝗦𝗨𝗗𝗔𝗛 𝗠𝗘𝗡𝗗𝗔𝗙𝗧𝗔𝗥 」\n──────────────────────────\n*Kamu sudah terdaftar di dalam database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「Khusus Group」*`
}

exports.ownerb = () => {
	return`*「Khusus Owner Bot」*`
}

exports.ownerg = () => {
	return`*「Khusus Owner Group」*`
}

exports.admin = () => {
	return`*「Khusus Admin Group」*`
}

exports.badmin = () => {
	return`*「Bot Harus Jadi Admin」*`
}

exports.nsfwoff = () => {
	return`*NSFW ga aktif*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear All Success*`
}

exports.pc = () => {
	return`*「 REGISTERASI 」*\n───────────────────────────\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA REGISTERASI 」*\n──────────────────────\nKamu sudah terdaftar dengan data \n\n❉ 𝗡𝗮𝗺𝗮: ${namaUser}\n❉ 𝗡𝘂𝗺𝗯𝗲𝗿: wa.me/${sender.split("@")[0]}\n❉ 𝗨𝗺𝘂𝗿: ${umurUser}\n❉ 𝗪𝗮𝗸𝘁𝘂 𝗣𝗲𝗻𝗱𝗮𝗳𝘁𝗮𝗿𝗮𝗻: ${time}\n❉ 𝗡𝘂𝗺𝗯𝗲𝗿 𝗦𝗡: ${serialUser}\n❉ 𝗖𝗮𝘁𝗮𝘁𝗮𝗻: Diharapkan Jangan Sampai Hilang\nKarena ini Penting\n\nSilahkan untuk menampilkan fitur ketik ${prefix}help/menu`
}

exports.cmdnf = (prefix, command) => {
	return`Maaf command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu*!`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*❉ Level: ${getLevelingLevel(sender)}*\n*❉ Jenis command : ${command}*\n*❉ Syarat Level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*❉ Level: ${getLevelingLevel(sender)}*\n*❉ Jenis command : ${command}*\n*❉ Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*❉ Level: ${getLevelingLevel(sender)}*\n*❉ Jenis command : ${command}*\n*❉ Syarat Level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*❉ Level: ${getLevelingLevel(sender)}*\n*❉ Jenis command : ${command}*\n*❉ Syarat Level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*❉ Level: ${getLevelingLevel(sender)}*\n*❉ Jenis command : ${command}*\n*❉ Syarat Level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*❉ Level: ${getLevelingLevel(sender)}*\n*❉ Jenis command : ${command}*\n*❉ Syarat Level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `●-▬▬▬ஜ۩۞۩ஜ▬▬▬▬-●

〘 *WHATSAPP BOT* 〙
────────────────────

〘 *ABOUT USER* 〙
╭──────────────────────
│❉ 𝗡𝗮𝗺𝗮 :  ${pushname}
│❉ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 :  ${premi}
│❉ 𝗡𝘂𝗺𝗯𝗲𝗿 :  wa.me/${sender.split("@")[0]}
│❉ 𝗗𝘂𝗶𝘁 :  Rp ${uangku}
│❉ 𝗫𝗣 :  ${getLevelingXp(sender)} / ${reqXp} 
│❉ 𝗟𝗲𝘃𝗲𝗹 :  ${getLevelingLevel(sender)}
│❉ 𝗥𝗼𝗹𝗲 :  ${role}
│❉ 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗨𝘀𝗲𝗿 : ${_registered.length}
│❉ 𝗕𝗼𝘁 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 :  ${a}3.0${a}
╰──────────────────────

〘 *INFORMATION* 〙
╭──────────────────────
│${a}❉ ${prefix}info${a}
│${a}❉ ${prefix}owner${a}
│${a}❉ ${prefix}report${a}
│${a}❉ ${prefix}donasi${a}
│${a}❉ ${prefix}request${a}
╰──────────────────────

〘 *OWNER ONLY* 〙

╭──────────────────────
│ ${a}❉ ${prefix}bc${a}
│ ${a}❉ ${prefix}addbadword${a}
│ ${a}❉ ${prefix}delbadword${a}
│ ${a}❉ ${prefix}bcgc${a}
│ ${a}❉ ${prefix}kickall${a}
│ ${a}❉ ${prefix}setreply${a}
│ ${a}❉ ${prefix}setprefix${a}
│ ${a}❉ ${prefix}clearall${a}
│ ${a}❉ ${prefix}block${a}
│ ${a}❉ ${prefix}unblock${a}
│ ${a}❉ ${prefix}leave${a}
│ ${a}❉ ${prefix}event [1/0]${a}
│ ${a}❉ ${prefix}clone${a}
│ ${a}❉ ${prefix}setppbot${a}
╰──────────────────────

〘 *MAKER MENU* 〙

╭──────────────────────
│ ${a}❉ ${prefix}sticker${a}
│ ${a}❉ ${prefix}stickerhide${a}
│ ${a}❉ ${prefix}quotemaker${a}
│ ${a}❉ ${prefix}glitchtext${a}
│ ${a}❉ ${prefix}qrcode${a}
│ ${a}❉ ${prefix}nulis${a}
│ ${a}❉ ${prefix}nulis2${a}
│ ${a}❉ ${prefix}attp${a}
│ ${a}❉ ${prefix}tahta${a}
│ ${a}❉ ${prefix}vinta${a}
│ ${a}❉ ${prefix}galaxybat${a}
│ ${a}❉ ${prefix}pornlogo${a}
│ ${a}❉ ${prefix}phcomment${a}
│ ${a}❉ ${prefix}gplaybutton${a}
│ ${a}❉ ${prefix}googletext${a}
│ ${a}❉ ${prefix}thunder${a}
╰──────────────────────
 
〘 *FUN MENU* 〙
 
╭──────────────────────
│ ${a}❉ ${prefix}alay${a}
│ ${a}❉ ${prefix}jadian${a}
│ ${a}❉ ${prefix}pantun${a}
│ ${a}❉ ${prefix}tercantik${a}
│ ${a}❉ ${prefix}terganteng${a}
│ ${a}❉ ${prefix}terbeban${a}
│ ${a}❉ ${prefix}lirik${a}
│ ${a}❉ ${prefix}artinama${a}
│ ${a}❉ ${prefix}chord${a}
│ ${a}❉ ${prefix}bisakah${a}
│ ${a}❉ ${prefix}kapankah${a}
│ ${a}❉ ${prefix}apakah${a}
│ ${a}❉ ${prefix}rate${a}
│ ${a}❉ ${prefix}slap${a}
│ ${a}❉ ${prefix}tampar${a}
│ ${a}❉ ${prefix}katadilan${a}
│ ${a}❉ ${prefix}ceritahorror${a}
│ ${a}❉ ${prefix}hurufterbalik${a}
│ ${a}❉ ${prefix}moddroid${a} 「 VIP 」
│ ${a}❉ ${prefix}happymod${a} 「 VIP 」
│ ${a}❉ ${prefix}playstore${a}
│ ${a}❉ ${prefix}katadilan${a}
│ ${a}❉ ${prefix}bacotandilan${a}
│ ${a}❉ ${prefix}katadoi${a}
│ ${a}❉ ${prefix}hemkel${a}
│ ${a}❉ ${prefix}cogan${a}
│ ${a}❉ ${prefix}cecan${a}
│ ${a}❉ ${prefix}quotes${a}
╰──────────────────────
 
〘 *MUTUAL* 〙
 
╭──────────────────────
│ ${a}❉ ${prefix}mutual${a}
│ ${a}❉ ${prefix}next${a}
╰──────────────────────
 
〘 *MEDIA MENU* 〙

╭──────────────────────
│ ${a}❉ ${prefix}brainly${a} 「 VIP 」
│ ${a}❉ ${prefix}pinterest${a}
│ ${a}❉ ${prefix}resepmasakan${a}
│ ${a}❉ ${prefix}igstalk${a}
│ ${a}❉ ${prefix}igstory${a}
│ ${a}❉ ${prefix}bitly${a}
│ ${a}❉ ${prefix}tiktokstalk${a} 「 VIP 」
│ ${a}❉ ${prefix}ssweb${a}
│ ${a}❉ ${prefix}kbbi${a}
│ ${a}❉ ${prefix}quran${a}
│ ${a}❉ ${prefix}quransurah${a}
│ ${a}❉ ${prefix}trendtweet${a}
│ ${a}❉ ${prefix}infocuaca${a}
│ ${a}❉ ${prefix}resepmasakan${a}
╰──────────────────────
 
〘 *NSFW MENU* 〙

╭──────────────────────
│ ${a}❉ ${prefix}lomly${a}
│ ${a}❉ ${prefix}wibu${a}
│ ${a}❉ ${prefix}anjing${a}
│ ${a}❉ ${prefix}blowjob${a}
│ ${a}❉ ${prefix}nekonime${a}
│ ${a}❉ ${prefix}pokemon${a}
│ ${a}❉ ${prefix}husbu${a}
│ ${a}❉ ${prefix}nangis${a}
│ ${a}❉ ${prefix}cium${a}
│ ${a}❉ ${prefix}peluk${a}
│ ${a}❉ ${prefix}ranime${a}
╰──────────────────────
 
〘 *LIMIT & DUIT* 〙

╭──────────────────────
│ ${a}❉ ${prefix}limit${a}
│ ${a}❉ ${prefix}buylimit${a}
│ ${a}❉ ${prefix}transfer${a}
│ ${a}❉ ${prefix}dompet${a}
│ ${a}❉ ${prefix}giftlimit${a}
│ ${a}❉ ${prefix}leaderboard${a}
╰──────────────────────
 
〘 *GROUP MENU* 〙

╭──────────────────────
│ ${a}❉ ${prefix}infogroup${a}
│ ${a}❉ ${prefix}delete${a}
│ ${a}❉ ${prefix}hidetag${a}
│ ${a}❉ ${prefix}blocklist${a}
│ ${a}❉ ${prefix}grouplist${a}
│ ${a}❉ ${prefix}level${a}
│ ${a}❉ ${prefix}linkgc${a}
│ ${a}❉ ${prefix}tagall${a}
│ ${a}❉ ${prefix}otagall${a}
│ ${a}❉ ${prefix}setpp${a}
│ ${a}❉ ${prefix}add${a}
│ ${a}❉ ${prefix}kick${a}
│ ${a}❉ ${prefix}setname${a}
│ ${a}❉ ${prefix}setdesc${a}
│ ${a}❉ ${prefix}demote${a}
│ ${a}❉ ${prefix}promote${a}
│ ${a}❉ ${prefix}listadmin${a}
│ ${a}❉ ${prefix}group [buka/tutup]${a}
│ ${a}❉ ${prefix}leveling [enable/disable]${a}
│ ${a}❉ ${prefix}nsfw [1/0]${a}
│ ${a}❉ ${prefix}simih [1/0]${a}
│ ${a}❉ ${prefix}welcome [1/0]${a}
│ ${a}❉ ${prefix}antilink [1/0]${a}
│ ${a}❉ ${prefix}antivirtex [on/off]${a}
│ ${a}❉ ${prefix}nobadword [enable/disable]${a}
╰──────────────────────
 
〘 *STORAGE* 〙

╭──────────────────────
│ ${a}❉ ${prefix}addsticker${a}
│ ${a}❉ ${prefix}getsticker${a}
│ ${a}❉ ${prefix}stickerlist${a}
│ ${a}❉ ${prefix}addvideo${a}
│ ${a}❉ ${prefix}getvideo${a}
│ ${a}❉ ${prefix}videolist${a}
│ ${a}❉ ${prefix}getimage${a}
│ ${a}❉ ${prefix}addImage${a}
│ ${a}❉ ${prefix}imagelist${a}
│ ${a}❉ ${prefix}addaudio${a}
│ ${a}❉ ${prefix}getaudio${a}
│ ${a}❉ ${prefix}audiolist${a}
╰──────────────────────
 
〘 *SONG MENU* 〙
 
╭──────────────────────
│ ${a}❉ ${prefix}spotifysearch${a}
│ ${a}❉ ${prefix}joox${a} 「 VIP 」
╰──────────────────────
 
〘 *THANKS TO* 〙

● 「 FDL 」
● 「 RizkyO 」
● 「 RIU 」
● 「 AFFIS JUNIANTO 」
● 「 FADHIL GRAPHY 」
● 「 MHANKBARBAR 」
● 「 MLSPACETOON 」
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
 *「 SELAMAT!!🚀 」*
╭──────────────────────
│❉ *Nama* : ${pushname}
│❉ *Number* : wa.me/${sender.split("@")[0]}
│❉ *XP* : ${getLevelingXp(sender)}
│❉ *Limit* : +3
│❉ *Role*: ${role}
│❉ *Level* : ${getLevel}  ~>  ${getLevelingLevel(sender)}
╰──────────────────────
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit kamu hari ini habis*\n*Silahkan apabila ingin membeli limit hubungi own / bisa juga lewat naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Limit anda tersisa : ${limitCounts}

NOTE : Untuk mendapatkan limit. Kamu bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah Parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*❉ 「 ATM 」*\n╭───────────\n│ *Nama* : ${pushname}\n│ *Number* : ${sender.split("@")[0]}\n│ *Duit* : ${uangkau}\n╰───────────`
}

exports.premadd = (pnom) => {
	return`
*「 PREMIUM ADD 」*
╭───────────
│❉ *Name* : ${pnom}
│❉ *Expired* : 30 DAYS*
│ *Thanks for ORDER PREMIUM*
╰───────────`
}

exports.dellprem = (hnom) => {
	return`
*「 PREMIUM DELETE 」*
╭───────────
│❉ *Name* : ${hnom}
│❉ *Expired* : umm:v*
│ ${a}Thanks For ORDER PREMIUM BACK SOON for BUY-ing AGAIN${a}
╰───────────`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} KAMU BUKAN USER PREMIUM`
}

