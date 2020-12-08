const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

const prefix = "+";
client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith === (prefix + 'ping') {

       message.reply('pong');

       } else
 
    if (message.content.startsWith === (prefix + 'help') {

       message.reply('+help, +ping, +verify, +version');

       } else

    if (message.content.startsWith === (prefix + 'verify') {

       message.reply('[insert message embed]');

       } else

    if (message.content.startsWith === (prefix + 'version') {

       message.reply('version 0.0.1');

       }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
