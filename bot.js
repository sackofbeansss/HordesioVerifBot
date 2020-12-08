const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === ';ping') {

       message.reply('pong');

       }
 
    if (message.content === ';help') {

       message.reply(';help, ;ping, ;verify, ;version');

       }

    if (message.content === ';verify') {

       message.reply('[insert message embed]');

       }

    if (message.content === ';version') {

       message.reply('version 0.0.1');

       }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
