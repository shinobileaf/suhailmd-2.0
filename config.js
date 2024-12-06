const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_21_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICA0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCajQxRzJ1bXA4RS94WnBQNndvWk5DYlpBZ2VENEdSbHdSTjdsWWdpNlRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqRzBQSE10LVNfR3REUy01YTZmSmZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmMTkxNTBkLWNjMjktNGE0My1hYTczLWE3NjhlZmRhNzNjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICAxMzAsXG4gICAgICAxNzAsXG4gICAgICA1MixcbiAgICAgIDE4NyxcbiAgICAgIDIzMSxcbiAgICAgIDEyNyxcbiAgICAgIDE0NyxcbiAgICAgIDEyMixcbiAgICAgIDkzLFxuICAgICAgMTkxLFxuICAgICAgODQsXG4gICAgICAxMzgsXG4gICAgICAxOTUsXG4gICAgICAxMTgsXG4gICAgICAxMjQsXG4gICAgICAyNSxcbiAgICAgIDE0MyxcbiAgICAgIDE1OCxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgNjQsXG4gICAgICAyMDksXG4gICAgICA0NyxcbiAgICAgIDE2MyxcbiAgICAgIDI0NixcbiAgICAgIDkxLFxuICAgICAgNzYsXG4gICAgICAxMjcsXG4gICAgICAxNTUsXG4gICAgICAzMixcbiAgICAgIDE0NyxcbiAgICAgIDM3LFxuICAgICAgMTQ1LFxuICAgICAgMjM2LFxuICAgICAgMTgsXG4gICAgICA1OCxcbiAgICAgIDIxNixcbiAgICAgIDMsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQks4RzJZVjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTgzNTYwNjcyMToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTM5NDQzNTY1MzY1MTQ6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZZNUU4UWcrWE11Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3UDRWRlRqSVFqRXIyZ2EzTVZkelM4NVNxQUZBSkd4Zk1Tdm15Smp5Z2prPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlE0dkkrRVFLdFVZOEFOcGV1YkRkQW5aQzN5eFdRczlIWXZtZ09MckNLenJ2MkxZVCs0VWlRMk5LdlVBb1lmbDg3WGM0RnpBVURialFramxoWVdFYkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhSS0s3WW9jZkxzeHVQVDVEbCtkeDlrREhzS2ZVK0x1dGlwaGhpWk0wUkZ5VWdMai9lRFY3bkR2MTRKN2x5SDZPRHM1VzViUVR0RkdSNCtBVFIvUmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTgzNTYwNjcyMToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM1MDU2NzBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
