const Discord = require("discord.js"); // So6
const fs = require('fs');
var config = require("./config.json")
const prefix = "s!"


var bot = new Discord.Client();

bot.on('ready', () => {        
    console.log("BOT IS READY");
    
    
})

bot.on('message', message => {

    if (message.author.bot) return
    
    
    
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
        prefixes: "s!"
    };
}

let prefix = prefixes[message.guild.id].prefixes;
    
    
    

    var msg = message.content.toUpperCase();

   

   
    
    if(msg.includes('AIRFALL WAS HERE')) {
        message.channel.send('No, airfall was not here!');
    }
    


    
    
var messageArray = message.content.split(/\s+/g);
var args = messageArray.slice(1);
var command = messageArray[0];
var cmd = bot.commands.get(command.slice(prefix.length));
if(!command.startsWith(prefix)) return;
if(cmd) cmd.run(bot, message, args);    


}) 


bot.login(process.env.TOKEN)
