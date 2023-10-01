import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['50487430323', 'Hernandez', true],
  ['50494825831']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50487430323', '5731439170']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Tay' 
global.author = '𝐊𝐚𝐫@𝐀𝐧𝐠𝐭' 

//--info FG
global.botName = 'Im 𝐊𝐚𝐫@𝐀𝐧𝐠𝐭'
global.fgig = 'https://www.instagram.com/' 
global.fgsc = 'https://github.com/FG98F/' 
global.fgyt = 'https://youtube.com/'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.bgp = 'https://chat.whatsapp.com/JeKUpOxymP4F6faK3B2Jqb'
global.bgp2 = 'https://chat.whatsapp.com/JeKUpOxymP4F6faK3B2Jqb'
global.bgp3 = 'https://chat.whatsapp.com/JeKUpOxymP4F6faK3B2Jqb'

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
