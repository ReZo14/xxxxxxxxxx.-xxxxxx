const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://vesta-bot.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Enmap = require("enmap");
const cd = require("countdown");
const totime = require("to-time");
const dbg = new Enmap({ name: "Giveaway" });
console.log("[ Giveaways is Lunched. ]");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//كود للتجربة
/* 
client.on("message", message => {
  if (message.content === "v#help") {
    message.channel.send("** Coming Soon ** <a:load:675050044457615431> ")
    .then(m => {
        m.react("a:vesta:675059024470999050");
      });  
  }
});
*/

//=============================== - [ Orders Help ] - ===================================//

client.on("message", message => {
  if (message.content === "v!help") {
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`         <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> 
<a:647115773537419270:675330765931806752> Please Chose <a:647115773537419270:675330765931806752> 
      
       <:help:675688976727932948> \`\`${prefix}help building\`\`| لعرض اوامر الحمايه 
        
       <a:662947470845804545:675342924489162763> \`\`${prefix}help Create\`\`| لعرض اوامر بناء سيرفر
                
       <a:614642819176333312:675330761833840662> \`\`${prefix}help admin\`\`| لعرض اوامر الادمن

       <a:5701_dpartnerneon:675439144930902047> \`\`${prefix}help general\`\`| لعرض الاوامر العامله
<a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> <a:666666666666666:675691204909858816> 
`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help building") {
    message.channel.send(
      "**Done See Your Dm** <a:647116071626604544:675330765633880064> "
    );
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:647115773537419270:675330765931806752>  \*\*building Order\*\* <a:647115773537419270:675330765931806752> 
<a:load:675050044457615431> \`\`${prefix}setLog\`\` | لتحديد روم الوج
                    
<a:load:675050044457615431> \`\`${prefix}toggleLog on/off \`\` | تفعيل وألغاء الوج
               
<a:load:675050044457615431> \`\`${prefix}setMedia \`\` | تحديد روم الصور
        
<a:load:675050044457615431> \`\`${prefix}toggleMedia on/off \`\` | تفعيل وألغاء روم الصور
        
<a:load:675050044457615431> \`\`${prefix}infoMedia \`\` | معلومات روم الصور
                    
<a:load:675050044457615431> \`\`${prefix}setWelcomer <name room> \`\`|لتحديد روم الترحيب                 
           
<a:load:675050044457615431> \`\`${prefix}setLeave\`\`|لتحديد روم ورساله للمغادره             
           
<a:load:675050044457615431> \`\`${prefix}toggleLeave on / off\`\`|تفعيل والغاء رساله المغادره                   
            
<a:load:675050044457615431> \`\`${prefix}toggleWelcome on / off\`\`|تفعيل والغاء الويلكم                 
           
<a:load:675050044457615431> \`\`${prefix}toggleDmwelcome on / off\`\`| تفعيل والغاء الويلكم بالخاص
           
<a:load:675050044457615431> \`\`${prefix}toggleInvitedby on / off\`\`| تفعيل والغاء الانفيت باى
             
<a:load:675050044457615431> \`\`${prefix}antilink  on / off\`\`| تفعيل والغاء مضاد الينكات                    
            
<a:load:675050044457615431> \`\`${prefix}antibots on on / off\`\`| تفعيل والغاء مضاد البوتات
               
<a:load:675050044457615431> \`\`${prefix}setSug \`\`| تحديد روم الاقتراحات
            
<a:load:675050044457615431>\`\`${prefix}suggest \`\`| لأنشاء اقتراح
`);
    message.author.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help general") {
    message.channel.send(
      "**Done See Your Dm** <a:647116071626604544:675330765633880064> "
    );
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:647115773537419270:675330765931806752>  \*\*General Order\*\* <a:647115773537419270:675330765931806752> 
<a:load:675050044457615431> \`\`${prefix}id \`\` | معلومات عنك
                    
<a:load:675050044457615431> \`\`${prefix}colors \`\` | لعرض علبه الالوان
               
<a:load:675050044457615431> \`\`${prefix}color \`\` | لأختيار لون
        
<a:load:675050044457615431> \`\`${prefix}avatar \`\` | للرؤيه الصور
        
<a:load:675050044457615431> \`\`${prefix}allbots\`\` | لرؤيه البوتات بالسيرفر

<a:load:675050044457615431> \`\`${prefix}bans\`\` | لرؤيه عدد الاشخاص المتبنده

<a:load:675050044457615431> \`\`${prefix}roles\`\` | لرؤيه رولات السيرفر

<a:load:675050044457615431> \`\`${prefix}perms\`\` | لرؤيه صلاحياتك

<a:load:675050044457615431>\`\`${prefix}weather\`\` | لتفقد الطقس في اي مكان

`);
    message.author.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help admin") {
    message.channel.send("**Done See Your Dm** <a:yes:647115725084819456> ");
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:off:647115773537419270>  \*\*Admin Order\*\* <a:off:647115773537419270> 

<a:55:647116550662258708>\`\`${prefix}ban\`\`| حظر الشخص من السيرفر

<a:55:647116550662258708>\`\`${prefix}kick\`\`|طرد الشخص من السيرفر

<a:55:647116550662258708>\`\`${prefix}mute\`\`| اعطاء العضو ميوت 

<a:55:647116550662258708>\`\`${prefix}unmute\`\`| لفك الميوت عن الشخص 

<a:55:647116550662258708>\`\`${prefix}unban /id/all \`\`| لفك الحظر عن شخص او عن الجميع

<a:55:647116550662258708>\`\`${prefix}mc\`\`|عمل ميوت للروم

<a:55:647116550662258708>\`\`${prefix}umc\`\`|لأزاله الميوت

<a:55:647116550662258708>\`\`${prefix}move @user\`\`| لسحب الشخص الى روومك

<a:55:647116550662258708>\`\`${prefix}move all\`\`|لسحب الجميع الى رومك

<a:55:647116550662258708>\`\`${prefix}role @user <rank>\`\`| لأعطاء رتبة لعضو معين

<a:55:647116550662258708>\`\`${prefix}role all <rank>\`\`| لأعطاء رتبة للجميع

<a:55:647116550662258708>\`\`${prefix}role humans\`\`|لأعطاء رتبة للاشخاص فقط

<a:55:647116550662258708>\`\`${prefix}rmrole @user <rank> \`\`| لازالة الرتبة من شخص معين

<a:55:647116550662258708>\`\`${prefix}rmrole all <rank>\`\`| لأزاله الرتبه من الجميع

<a:55:647116550662258708>\`\`${prefix}rmrole humans <rank> <rank>\`\`| لأزاله الرتبه من الاشخاص فقط

<a:55:647116550662258708>\`\`${prefix}rmrole bots<rank>\`\`| لأزاله الرتبه من البوتات   

<a:55:647116550662258708>\`\`${prefix}gstart 1m 1 50k \`\`|امر الجيف اواى 

<a:55:647116550662258708>\`\`${prefix}createcolors\`\`| لأنشاء 137 لون 
`);
    message.author.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help music") {
    message.channel.send("**Soon** ");
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:lid:643056634821607434> \*\*Muisc Order\*\* <a:lid:643056634821607434> 
                      
<a:mic:642515476874002432>\`\`${prefix}play\`\`|للتشغيل الاغنيه
                
<a:mic:642515476874002432>\`\`${prefix}skip \`\`|الاغنيه الثاليه
                 
<a:mic:642515476874002432>\`\`${prefix}queue\`\`|يعرض لك قائمه الاغانى
               
<a:mic:642515476874002432>\`\`${prefix}np \`\`|يعرض لك اسم الاغنيه
                 
<a:mic:642515476874002432>\`\`${prefix}stop\`\`|توقيف الاغانى 
              
<a:mic:642515476874002432>\`\`${prefix}vol  \`\`|لرفع وخفض الصوت
 



`);
    message.author.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "v!help Create") {
    message.channel.send("**Done See Your Dm** <a:yes:647115725084819456>  ");
    const embed = new Discord.RichEmbed().setColor("#36393e")
      .setDescription(`<a:off:647115773537419270> \*\*Create Server\*\* <a:off:647115773537419270>
                      
<a:55:647116550662258708>\`\`${prefix}server game room\`\`|انشاء رومات السيرفر الجمينج
<a:55:647116550662258708>\`\`${prefix}server game role\`\`|انشاء رولات السيرفر الجمينج
<a:55:647116550662258708>\`\`${prefix}server Shop room\`\`|انشاء رومات السيرفر الشوب
<a:55:647116550662258708>\`\`${prefix}server Shop role\`\`|انشاء رولات السيرفر الشوب



`);
    message.author.sendEmbed(embed);
  }
});

client.on("ready", () => {
  client.user.setStatus("Online");
});
client.on("ready", () => {
  client.user.setActivity("Vionm Soon ♥ ", { type: "playing" });
});

client.on("message", message => {
  if (message.content === "v!help Create") {
    message.channel
      .send("** Coming Soon ** <a:load:675050044457615431> ")
      .then(m => {
        m.react("a:vesta:675059024470999050");
      });
  }
});

client.on("message", message => {
  if (message.content === "v!help admin") {
    message.channel
      .send("** Coming Soon ** <a:load:675050044457615431> ")
      .then(m => {
        m.react("a:vesta:675059024470999050");
      });
  }
});

// ------------ = [Welcome - Leave - Invite By] = ------------ //

const welcome = JSON.parse(
  fs.readFileSync("./welcome-json/welcomer.json", "utf8")
);

client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "setLeave")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(":pencil: **| من فضلك اكتب الرساله الان... :pencil2: **")
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg
              .edit(":scroll: **| اكتب اسم الروم الان... :pencil2: **")
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit("✅ **| تم الاعداد بنجاح...  **").then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ["time"]
                      });
                      let embed = new Discord.RichEmbed()
                        .setTitle("**Done The Leave Msg Code Has Been Setup**")
                        .addField("Message:", `${thisMessage}`)
                        .addField("Channel:", `${boi}`)
                        .setThumbnail(message.author.avatarURL)
                        .setFooter(`${client.user.username}`);
                      message.channel.sendEmbed(embed);
                      welcome[message.guild.id] = {
                        leavechannel: boi,
                        leavemsg: thisMessage,
                        onoff: "On",
                        leave: "On"
                      };
                      fs.writeFile(
                        "./welcome-json/welcomer.json",
                        JSON.stringify(welcome),
                        err => {
                          if (err) console.error(err);
                        }
                      );
                    });
                  });
              });
          });
      });
  }
});

//----------------------=[ W E A T H E R ]---[ C O M M A N D]=-----------------------//

client.on("message", message => {
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let cont = message.content.slice(prefix.length).split(" ");
  let args = cont.slice(1);

  if (msg.startsWith(prefix + "WEATHER")) {
    weather.find({ search: args.join(" "), degreeType: "F" }, function(
      err,
      result
    ) {
      //
      if (err) message.channel.send(err);

      if (result.length === 0) {
        message.channel.send("**Please enter a valid location.**");
        return;
      }

      var current = result[0].current;
      var location = result[0].location;

      const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00ae86)
        .addField("Timezone", `UTC${location.timezone}`, true)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature} Degrees`, true)
        .addField("Feels Like", `${current.feelslike} Degrees`, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", `${current.humidity}%`, true);

      message.channel.send({ embed });
    });
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setWelcomer")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** <a:admins:650199479768711169>``MANAGE_GUILD``<a:admins:650199479768711169>"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send(
        "<a:632427371730960414:647116550662258708> Cant Find This Channel"
      );
    let embed = new Discord.RichEmbed()
      .setTitle(
        "**<a:yes:647115725084819456> Done The Welcome Code Has Been Setup**"
      )
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    welcome[message.guild.id] = {
      channel: room,
      onoff: "On",
      by: "On",
      dm: "Off",
      leave: "Off"
    };
    fs.writeFile(
      "./welcome-json/welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err) console.error(err);
      }
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLeave")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off",
        leave: "Off"
      };
    if (welcome[message.guild.id].leave === "Off")
      return [
        message.channel.send(
          `**<a:on:642500266985259018> The Leave Msg Is __𝐎𝐍__ ! <a:on:642500266985259018>**`
        ),
        (welcome[message.guild.id].leave = "On")
      ];
    if (welcome[message.guild.id].leave === "On")
      return [
        message.channel.send(
          `**<a:off:642500290171502602> The Leave Msg Is __𝐎𝐅𝐅__ ! <a:off:642500290171502602>**`
        ),
        (welcome[message.guild.id].leave = "Off")
      ];
    fs.writeFile(
      "./welcome-json/welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleWelcome")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off"
      };
    if (welcome[message.guild.id].onff === "Off")
      return [
        message.channel.send(
          `**<a:on:642500266985259018> The Welcome Is __𝐎𝐍__ ! <a:on:642500266985259018>**`
        ),
        (welcome[message.guild.id].onoff = "On")
      ];
    if (welcome[message.guild.id].onoff === "On")
      return [
        message.channel.send(
          `**<a:off:642500290171502602> The Welcome Is __𝐎𝐅𝐅__ ! <a:off:642500290171502602>**`
        ),
        (welcome[message.guild.id].onoff = "Off")
      ];
    fs.writeFile(
      "./welcome-json/welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleDmwelcome")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        dm: "Off"
      };
    if (welcome[message.guild.id].dm === "Off")
      return [
        message.channel.send(
          `**<a:on:642500266985259018> The Welcome Dm Is __𝐎𝐍__ ! <a:on:642500266985259018>**`
        ),
        (welcome[message.guild.id].dm = "On")
      ];
    if (welcome[message.guild.id].dm === "On")
      return [
        message.channel.send(
          `**<a:off:642500290171502602> The Welcome Dm Is __𝐎𝐅𝐅__ ! <a:off:642500290171502602>**`
        ),
        (welcome[message.guild.id].dm = "Off")
      ];
    fs.writeFile(
      "./welcome-json/welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleInvitedby")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        by: "Off"
      };
    if (welcome[message.guild.id].by === "Off")
      return [
        message.channel.send(
          `**<a:on:642500266985259018> The Invited By Is __𝐎𝐍__ ! <a:on:642500266985259018>**`
        ),
        (welcome[message.guild.id].by = "On")
      ];
    if (welcome[message.guild.id].by === "On")
      return [
        message.channel.send(
          `**<a:off:642500290171502602> The Invited By Is __𝐎𝐅𝐅__ ! <a:off:642500290171502602>**`
        ),
        (welcome[message.guild.id].by = "Off")
      ];
    fs.writeFile(
      "./welcome-json/welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  }
});
client.on("guildMemberRemove", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off",
      leave: "Off"
    };

  if (welcome[member.guild.id].onoff === "Off") return;
  if (welcome[member.guild.id].leave === "Off") return;
  let welcomer = member.guild.channels.find(
    "name",
    `${welcome[member.guild.id].leavechannel}`
  );
  if (!welcomer) return;
  welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
});

client.on("guildMemberAdd", async member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off"
    };
  if (welcome[member.guild.id].onoff === "Off") return;
  const Canvas = require("canvas");
  const jimp = require("jimp");
  const w = ["./wel/1.png"];
  let Image = Canvas.Image,
    canvas = new Canvas(400, 205),
    ctx = canvas.getContext("2d");
  ctx.patternQuality = "bilinear";
  ctx.filter = "bilinear";
  ctx.antialias = "subpixel";
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.stroke();
  ctx.beginPath();

  fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
    err,
    Background
  ) {
    if (err) return console.log(err);
    let BG = Canvas.Image;
    let ground = new Image();
    ground.src = Background;
    ctx.drawImage(ground, 0, 0, 400, 205);
  });

  let url = member.user.displayAvatarURL.endsWith(".webp")
    ? member.user.displayAvatarURL.slice(5, -20) + ".png"
    : member.user.displayAvatarURL;
  jimp.read(url, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
      if (err) return console.log(err);

      ctx.font = "17px Arial";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(member.user.username, 260, 145);

      ctx.font = "8px Arial Bold";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(`Your The Member ${member.guild.memberCount}`, 250, 155);

      let Avatar = Canvas.Image;
      let ava = new Avatar();
      ava.src = buf;
      ctx.beginPath();
      ctx.arc(130, 92, 71, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(ava, 60, 22, 145, 145);
      let c = member.guild.channels.find(
        "name",
        `${welcome[member.guild.id].channel}`
      );
      if (!c) return;
      c.sendFile(canvas.toBuffer());
      c.send(
        "**Welcome To** " +
          `${member.guild.name}` +
          "<a:help:647116050269470730>"
      );
      c.send(
        "<a:638852191855312913:647115758656028681> **  User : **" +
          `${member}` +
          ".."
      );
      fs.writeFile(
        "./welcome-json/welcomer.json",
        JSON.stringify(welcome),
        err => {
          if (err)
            console.error(err).catch(err => {
              console.error(err);
            });
        }
      );
    });
  });
});

const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberAdd", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      by: "Off"
    };
  if (welcome[member.guild.id].by === "Off") return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(
      channel => channel.name === `${welcome[member.guild.id].channel}`
    );
    if (!logChannel) return;
    setTimeout(() => {
      logChannel.send(`<a:644287436385681448:650262910786076682><a:645093836044894258:647116567665967105> Invited By: <@${inviter.id}> <a:645093875161104384:647116569540952113>

`);
    }, 2000);
    fs.writeFile(
      "./welcome-json/welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  });
});

client.on("guildMemberAdd", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      dm: "Off"
    };
  if (welcome[member.guild.id].dm === "Off") return;
  member
    .createDM()
    .then(function(channel) {
      return channel.send(`<a:admins:642505360699031563> Welcome To Server ${member.guild.name} <a:admins:642505360699031563>
<a:fire:643038541009387530> Your Name ${member}<a:fire:643038541009387530>
<a:mic:642515476874002432> You are a member number [${member.guild.memberCount}] in server `);
    })
    .catch(console.error);
  fs.writeFile("./welcome-json/welcomer.json", JSON.stringify(welcome), err => {
    if (err)
      console.error(err).catch(err => {
        console.error(err);
      });
  });
});

client.on("message", message => {
  if (message.author.bot) return;

  let messageArray = message.content.split(" ");

  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ban")) {
    let target = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    let reason = args.slice(1).join(" ");

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("you do not have permissions to use this command!s");

    if (!target) return message.reply("```منشن شخص```");
    if (!reason) return message.reply("```اكتب سباب طرد الشخص ```");

    message.channel.send(
      `${target.user.username} Banned from server for Reason ${reason}`
    );
    target.ban(reason);
  }
});
client.on("message", message => {
  if (message.author.bot) return;

  let messageArray = message.content.split(" ");

  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "kick")) {
    let target = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    let reason = args.slice(1).join(" ");

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("you do not have permissions to use this command!s");

    if (!target) return message.reply("```منشن شخص```");
    if (!reason) return message.reply("اكتب سباب طرد الشخص");

    message.channel.send(
      `**${target.user.username} kicked from server! Fot Reason ${reason}**`
    );
    target.kick(reason);
  }
});

client.on("message", async message => {
  if (message.author.omar) return;
  let messageArray = message.content.split(" ");
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return message.channel
      .send("**هذا الأمر فقط للسيرفرات**")
      .then(m => m.delete(5000));
  if (!message.member.hasPermission("MANAGE_ROLES")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
    return message
      .reply("**I Don't Have `MANAGE_ROLES` Permission**")
      .then(msg => msg.delete(6000));
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "mute") {
    let tomute = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!tomute) return message.reply("**يجب عليك المنشن اولاً**");
    //     if(!time.match(/[1-60][s,m,h,d,w]/g))
    if (!tomute.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`"
      );
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }

    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (!reason) {
    }

    await tomute.addRole(muterole.id);
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Muted!`, tomute.user.avatarURL)
      .addField(
        "**:busts_in_silhouette: المستخدم **",
        `**[ ${tomute.user.tag} ]**`,
        true
      )
      .addField(
        "**:hammer: تم بواسطة **",
        `**[ ${message.author.tag} ]**`,
        true
      )
      .addField("**:book: السبب **", `**[ ${reason} ]**`, true)
      .addField("User", `<@${tomute.user.id}>`, true)
      .setThumbnail(`${tomute.user.avatarURL}`);

    message.channel.send(embed);
  }
  if (command === `unmute`) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel
        .sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message
        .reply("**I Don't Have `MANAGE_ROLES` Permission**")
        .then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!toMute)
      return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

    let role = message.guild.roles.find(r => r.name === "muted");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.sendMessage(
        "**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:"
      );

    await toMute.removeRole(role);
    message.channel.sendMessage(
      "**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:"
    );

    return;
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply("sorry but you dont have permission MANAGE_CHANNELS");

  if (!message.content.startsWith(prefix)) return;

  if (!message.channel.guild)
    return message.reply("This Command for only server");

  if (message.content === prefix + "mc") {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        let embed = new Discord.RichEmbed()
          .setColor("")
          .setAuthor(`Channel Disabled By : ${message.author.username} `);
        message.channel.send(embed);
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply("Sorry but you dont have permission MANAGE_CHANNELS");

  if (message.content === prefix + "umc") {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        let embed = new Discord.RichEmbed()
          .setColor()
          .setAuthor(`Channel Enabled By : ${message.author.username}`);
        message.channel.send(embed);
      });
  }
});

//stop bot

console.log("[ Giveaways is Lunched. ]");
//gstart//gstart
client.on("ready", async () => {
  await dbg.defer;
  await console.log(`Logged in as [ ${client.user.username} ]!`);
  client.guilds.forEach(async g => {
    g.channels
      .filter(
        c =>
          c.type == "text" &&
          c.permissionsFor(client.user.id).has("VIEW_CHANNEL")
      )
      .forEach(async c => {
        let fetched = await c.fetchMessages();
        if (fetched.size == 0) return;
        let mess = await fetched.filter(
          r =>
            r.author.id === client.user.id && r.content == `**🎉 GIVEAWAY 🎉**`
        );
        if (mess.size == 0) return;
        mess.forEach(m => {
          if (!m) return;
          if (!dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`)) return;
          let time2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtime;
          let text2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtext;
          let win2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gwin;
          if (time2 === null || time2 === undefined) return;
          let embed = new RichEmbed()
            .setColor("BLUE")
            .setAuthor(`${text2}`, g.iconURL)
            .setDescription(
              `React with 🎉 to enter!\nTime remaining: ${cd(
                new Date().getTime(),
                time2
              )}`
            )
            .setFooter(`Ends at`, client.user.avatarURL)
            .setTimestamp(time2);
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(text2, g.iconURL)
            .setFooter(`Ended at`);
          let ttimer = setInterval(async () => {
            if (!m || m.content == `🎉 **GIVEAWAY ENDED** 🎉`) return;
            let ttt = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
            if (ttt.includes(moment().diff(time2, "seconds")))
              return m.edit(
                `🎉 **GIVEAWAY** 🎉`,
                embed
                  .setColor("#ffb800")
                  .setDescription(
                    `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                      new Date().getTime(),
                      time2
                    )}`
                  )
              );
            m.edit(
              `🎉 **GIVEAWAY** 🎉`,
              embed.setDescription(
                `React with 🎉 to enter!\nTime remaining: ${cd(
                  new Date().getTime(),
                  time2
                )}`
              )
            );
            if (moment().isAfter(time2)) {
              m.reactions
                .filter(a => a.emoji.name == "🎉")
                .map(r =>
                  r.fetchUsers().then(u => {
                    let rusers = u
                      .filter(user => !user.bot)
                      .random(parseInt(win2));
                    m.edit(
                      `${g} GIVEAWAY ENDED ${g}`,
                      embed2
                        .setTimestamp()
                        .setDescription(`Winners:\n${rusers || "No winners"}`)
                    );
                    if (
                      m.reactions
                        .filter(a => a.emoji.name == "🎉")
                        .map(reaction => reaction.count)[0] <= 1
                    ) {
                      return m.channel.send(`No winners :rolling_eyes:`);
                    } else {
                      m.channel.send(
                        `Congratulations ${rusers}! You won the **${text2}**`
                      );
                    }
                    dbg.delete(`giveaway.${g.id}.${c.id}.${m.id}.time`);
                    clearInterval(ttimer);
                    return;
                  })
                );
            }
          }, 5000);
        });
      });
  });
});
//client.on('error', console.error);
//client.on('warn', warn => console.warn(`[WARN] - ${warn}`));
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
});
client.on("message", async message => {
  //let g = client.guilds
  //  .get("606910399811420175")
  //    .emojis.find(r => r.name === "start");
  if (message.author.bot || message.channel.type == "dm") return undefined;
  let args = message.content.split(" ");
  let timer;
  if (args[0] == `${prefix}gstart`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1] || !args[2] || !args[3])
        return message.channel.send(
          `**Usage:** **\`${prefix}gstart [Time] [Winners] [Giveaway Prize]\n\`** **Example:** **\`${prefix}gstart 4h 1 Nitro\`**`
        );
      if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
        return message.channel.send(`I don't have **Embed Links** permission.`);
      if (ms(args[1]) === undefined)
        return message.channel.send(`Please use a proper time format.`);
      if (isNaN(args[2]))
        return message.channel.send(`Winners must be number!`);
      if (args[2] < 1 || args[2] > 10)
        return message.channel.send(`Winners must be bettwen 1 and 10.`);
      let timega = ms(args[1]) / 1000;
      let time = Date.now() + totime.fromSeconds(timega).ms();
      if (timega < 5)
        return message.channel.send(
          `Giveaway time can't be less than 5 seconds.`
        );
      let timespan = cd(new Date().getTime(), time);
      let rusers;
      let embed = new RichEmbed()
        .setColor("BLUE")
        .setAuthor(`${args.slice(3).join(" ")}`)
        .setDescription(`React with 🎉 to enter!\nTime remaining: ${timespan}`)
        .setFooter(`Ends at`, client.user.avatarURL)
        .setTimestamp(time);
      let embed2 = new RichEmbed()
        .setColor("RED")
        .setAuthor(args.slice(3).join(" "))
        .setFooter(`Ended at`);
      let msg = await message.channel
        .send(`**🎉 GIVEAWAY 🎉**`, embed)
        .catch(err => message.channel.send(`Error: \`${err}\``));
      dbg.set(
        `giveaway.${message.guild.id}.${message.channel.id}.${msg.id}.time`,
        {
          gtime: time,
          gid: msg.id,
          gtext: args.slice(3).join(" "),
          gwin: args[2]
        }
      );
      await msg.react("🎉");
      timer = setInterval(() => {
        if (!msg || msg.content == `**🎉 GIVEAWAY ENDED 🎉**`) return;
        let ttt = [-2, -3, -4, -5, -6, -7, -8, -9, -10];
        if (ttt.includes(moment().diff(time, "seconds")))
          return msg.edit(
            `**🎉 GIVEAWAY 🎉**`,
            embed
              .setColor("#ffb800")
              .setDescription(
                `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                  new Date().getTime(),
                  time
                )}`
              )
          );
        msg.edit(
          `**🎉 GIVEAWAY 🎉**`,
          embed.setDescription(
            `React with 🎉 to enter!\nTime remaining: ${cd(
              new Date().getTime(),
              time
            )}`
          )
        );
        rusers = msg.reactions
          .filter(a => a.emoji.name == "🎉")
          .map(reaction =>
            reaction.users.filter(u => !u.bot).random(parseInt(args[2]))
          )[0];
        if (moment().isAfter(time)) {
          msg.edit(
            `** GIVEAWAY ENDED 🎉**`,
            embed2
              .setTimestamp()
              .setDescription(`Winners:\n${rusers || "No winners"}`)
          );
          if (
            msg.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          ) {
            return message.channel.send(``);
          } else {
            msg.channel.send(
              `> Congratulations ${rusers}! You won the **${args
                .slice(3)
                .join(" ")}**`
            );
          }
          clearInterval(timer);
          return;
        }
      }, 5000);
    } else return undefined;
  }
});
